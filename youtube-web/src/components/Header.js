import { toggleSideBarMenu } from "./utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { SEARCH_SUGGESTION_API } from "./utils/constants";
import { addToSearchResultsCache } from "./utils/searchSlice";
import SearchResultsPage from "./SearchResultsPage";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Avatar from "@mui/material/Avatar";
import InputAdornment  from "@mui/material/InputAdornment";
import green from "@mui/material/colors/green";


const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSearchSuggestion, setShowSearchSuggestion] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchInputRef = useRef(null);
  const dispatch = useDispatch();
  const searchResultsCache = useSelector((store) => store.search);
  const navigate = useNavigate();

  useEffect(() => {
    if(!searchQuery)
    {
      setShowSearchSuggestion(false);
      return;
    }

    const timer = setTimeout(() => {
      setShowSearchSuggestion(true);

      if(searchResultsCache[searchQuery])
        setSearchSuggestions(searchResultsCache[searchQuery]);
      else
        getSearchSuggestions();
    }, 180);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    try 
    {
      const response = await fetch(SEARCH_SUGGESTION_API + searchQuery);
      const text = await response.text();
      const json = JSON.parse(text.match(/\[(.*)\]/)[0]);
      setSearchSuggestions(json[1]);

      dispatch(addToSearchResultsCache({
        [searchQuery] : json[1]
      }));
    } 
    catch (error) 
    {
      console.error("Error fetching search suggestions:", error);
    }
  }

  const handleSideBarMenu = () => {
    dispatch(toggleSideBarMenu());
  }

  const handleSuggestionClick = (suggestion) => {
    if(!suggestion)
      return;
    setShowSearchSuggestion(false);
    navigate(`/results?search_query=${suggestion}`);
  }

  const handleClearInput = () => {
    setSearchQuery("");
    setSearchSuggestions([]);
    setShowSearchSuggestion(false);
    setSelectedIndex(-1);
    searchInputRef.current.focus();
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSuggestionClick(searchSuggestions[selectedIndex] || searchQuery);
    }
    else if (e.key === "ArrowDown" && searchSuggestions.length > 0) {
      setSelectedIndex((prevIndex) => prevIndex < searchSuggestions.length - 1 ? prevIndex + 1 : 0);
    }
    else if (e.key === "ArrowUp" && searchSuggestions.length > 0) {
      setSelectedIndex((prevIndex) => prevIndex > 0 ? prevIndex - 1 : searchSuggestions.length - 1);
    }
  }

  return (
    <div className="grid grid-flow-col p-3 m-1 shadow-lg">
      <div className="flex col-span-2">
        <IconButton onClick={handleSideBarMenu} >
          <MenuIcon />
        </IconButton>
        <a href="/" className="p-2.5">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
            className="h-8 mx-2" alt="youtube-logo"></img>
        </a>
      </div>

      <div className="col-span-9 px-10 relative pt-3">
        <TextField placeholder="Search" variant="standard" fullWidth
          inputRef={searchInputRef} value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value) }
          onFocus={() => searchQuery && searchSuggestions.length > 0 && setShowSearchSuggestion(true) }
          onBlur={() => setShowSearchSuggestion(false) }
          onKeyDown={handleKeyDown}
          sx= {{
            width: '60%',
            border: 1,
            borderColor: 'grey.400',
            padding: '4px 16px',
            borderTopLeftRadius: '9999px',
            borderBottomLeftRadius: '9999px',
            mt: '-6px'
          }}
          InputProps = {{
            disableUnderline: true,
            endAdornment: (
              <InputAdornment position="end">
                {searchQuery && (
                  <IconButton onClick={handleClearInput} >
                    <ClearIcon />
                  </IconButton>
                )}
              </InputAdornment>
            )
          }}></TextField>
        <IconButton sx= {{
          border: "1px solid",
          borderColor: "grey.400",
          height: "42px",
          width: "54px",
          mt: "-6px",
          borderTopRightRadius: "9999px",
          borderBottomRightRadius: "9999px",
          bgcolor: "grey.100",
          "&:hover": {
            bgcolor: "grey.200"
          }
          }}
          onClick={() => handleSuggestionClick(searchQuery)}>
            <SearchIcon />
        </IconButton>

        {showSearchSuggestion && (
          <Box sx={{
            position: "absolute",
            top: "100%",
            width: "60%",
            mt: "2px",
            zIndex: 10,
            bgcolor: "background.paper",
            boxShadow: 1,
            borderRadius: "8px"
            }}>
            <List>
              {searchSuggestions.map((suggestion, index) => (
                <ListItemButton
                  key={suggestion}
                  onMouseDown={() => handleSuggestionClick(suggestion)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  onMouseLeave={() => setSelectedIndex(-1)} 
                  selected={index === selectedIndex}
                  className="cursor-pointer"
                  sx={{
                    py: 1,
                    px: 3,
                    backgroundColor: index === selectedIndex ? "grey.200" : "inherit",
                    "&:hover": {
                      backgroundColor: "grey.200",
                    },
                    "&.Mui-selected": {
                      backgroundColor: "grey.200",
                      "&:hover": {
                        backgroundColor: "grey.300",
                      },
                    },
                  }}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if(e.key === "Enter")
                      handleSuggestionClick(suggestion);
                  }}
                >
                  {suggestion}
                </ListItemButton>
              ))}
            </List>
          </Box> 
        )}
      </div>

      <div className="col-span-1">
        <IconButton>
          <Avatar sx={{ bgcolor: green[800] }} alt="Rishab Gupta" src="/broken-image.jpg">
            R
          </Avatar>
        </IconButton>
      </div>
    </div>
  )
};

export default Header;