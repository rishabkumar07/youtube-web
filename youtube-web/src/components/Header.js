import { toggleSideBarMenu } from "./utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { SEARCH_SUGGESTION_API } from "./utils/constants";
import { addToSearchResultsCache } from "./utils/searchSlice";
import SearchResultsPage from "./SearchResultsPage";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSearchSuggestion, setShowSearchSuggestion] = useState(false);
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
    setShowSearchSuggestion(false);
    navigate(`/results?search_query=${suggestion}`);
  }

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-2">
        <img src="https://icon-library.com/images/free-hamburger-menu-icon/free-hamburger-menu-icon-6.jpg"
          className="h-8 cursor-pointer" alt="menu" onClick={handleSideBarMenu}></img>
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
            className="h-8 mx-2" alt="youtube-logo"></img>
        </a>
      </div>

      <div className="col-span-9 px-10">
        <input type="text" placeholder="Search" className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          value={searchQuery} onChange={(e) => setSearchQuery(e.target.value) }
          onFocus={() => setShowSearchSuggestion(true) } 
          onBlur={() => setShowSearchSuggestion(false) }></input>
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100"
          onClick={() => handleSuggestionClick(searchQuery)}>🔍</button>
        {showSearchSuggestion && (
          <div className="fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {searchSuggestions.map((suggestion) => (
                <li key={suggestion} className="py-2 px-3 shadow-sm hover:bg-gray-100 hover:cursor-pointer"
                  onMouseDown={() => handleSuggestionClick(suggestion)}>
                  {suggestion}
                </li>
              ))}
            </ul>
          </div> 
        )}
      </div>

      <div className="col-span-1">
        <img src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
         alt="user" className="h-8"></img>
      </div>
    </div>
  )
};

export default Header;