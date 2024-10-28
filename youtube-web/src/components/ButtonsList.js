import { useRef, useState } from 'react';
import {Box, IconButton} from '@mui/material';
import  ChevronLeftIcon  from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { SUGGESTIONS_LIST } from './utils/constants';
import { useDispatch } from 'react-redux';
import { addVideoCategoryId } from './utils/homeSlice';

const ButtonsList = () => {
  const scrollRef = useRef(null);
  const dispatch = useDispatch();
  const suggestionsList = SUGGESTIONS_LIST.items;

  const [selectedGenreId, setSelectedGenreId] = useState(0);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 200;
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 200;
    }
  };

  const handleSuggestionButtonClick = (id) => {
    dispatch(addVideoCategoryId(parseInt(id)));
    setSelectedGenreId(parseInt(id));
  }

  return (
    <Box display="flex" alignItems="center" mt={4}>
      <IconButton onClick={scrollLeft}
        sx={{
            '&:hover': {bgcolor: 'grey.400'}, 
            mr:1 
          }}>
        <ChevronLeftIcon />
      </IconButton>

      <Box ref={scrollRef} sx= {{
        display:'flex',
        overflowX : 'auto',
        gap: '2',
        py: 1,
        flexWrap: 'nowrap',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': { display: 'none' }
      }}>
        {suggestionsList.map((suggestion) => (
          <Box key={suggestion.id} component="button" onClick={() => handleSuggestionButtonClick(suggestion.id)}
            sx={{
              px: 3,
              py: 1,
              m: 1,
              bgcolor: selectedGenreId === parseInt(suggestion.id) ? 'black' : 'grey.100',
              color: selectedGenreId === parseInt(suggestion.id) ? 'white' : 'grey.900',
              borderRadius: 2,
              whiteSpace: 'nowrap',
              fontSize: '0.9rem',
              fontWeight: 'medium', 
              '&:hover': { bgcolor: selectedGenreId === parseInt(suggestion.id) ? 'black' : 'grey.200' }
            }}>
            {suggestion.snippet?.title}
          </Box>
        ))}
      </Box>

      <IconButton onClick={scrollRight}
        sx={{
          '&:hover': { bgcolor: 'grey.400' },
          ml: 1
        }}>
        <ChevronRightIcon />
      </IconButton>
    </Box>
  );
};

export default ButtonsList;
