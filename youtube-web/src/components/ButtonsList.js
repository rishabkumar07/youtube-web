import { useRef } from 'react';
import { Scrollbar } from 'react-scrollbars-custom';
import { SUGGESTIONS_LIST } from './utils/constants';

const ButtonsList = () => {
  const scrollRef = useRef(null);

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

  const suggestionsList = SUGGESTIONS_LIST.items;

  return (
    <div className="flex items-center mt-4">
      <button
        className="p-2 m-2 bg-gray-300 hover:bg-gray-400 rounded-full"
        onClick={scrollLeft}
      >
        &lt;
      </button>

      <Scrollbar
        style={{ width: '100%', height: '100px' }}
        noScrollX={true}
        ref={scrollRef}
      >
        <div className="flex space-x-4">
          {suggestionsList.map((suggestion) => (
            <button
              className="px-5 py-2 m-2 bg-gray-100 hover:bg-gray-200 rounded-full whitespace-nowrap text-gray-800 text-sm font-medium"
              key={suggestion.id}
            >
              {suggestion.snippet?.title}
            </button>
          ))}
        </div>
      </Scrollbar>

      <button
        className="p-2 m-2 bg-gray-300 hover:bg-gray-400 rounded-full"
        onClick={scrollRight}
      >
        &gt;
      </button>
    </div>
  );
};

export default ButtonsList;
