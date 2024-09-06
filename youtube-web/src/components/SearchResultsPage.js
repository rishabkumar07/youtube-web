import { YT_SEARCH_API } from "./utils/constants";
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
//import { addCurrentVideo } from "./utils/homeSlice";
import parse from 'html-react-parser';
//import { useDispatch } from "react-redux";

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query");
  const [searchResults, setSearchResults] = useState([]);
  //const dispatch = useDispatch();

  useEffect(() => {
    if(query)
      fetchSearchResults();
  }, [query]);

  const fetchSearchResults = async() => {
    try
    {
      const data = await fetch(`${YT_SEARCH_API}&maxResults=25&q=${query}`);
      const json = await data.json();
      setSearchResults(json.items);
    }
    catch (error) 
    {
      console.error("Error fetching search results:", error);
    }
  }

  /*const addVideoDetails = (video) => {
    //fetch more details then add
    dispatch(addCurrentVideo(video));
  }*/

  return (
    <div className="p-5">
      {searchResults.map((video) => (
        <Link to={`/watch?v=${video.id.videoId}`} key={video.id.videoId}>
          <div className="flex items-start space-x-4 mb-6">
            <div className="w-60 h-36 flex-shrink-0">
              <img src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}  className="w-full h-full object-cover rounded-lg" />
            </div>

            <div className="flex-grow">
              <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 hover:text-blue-500"> {parse(video.snippet.title)} </h3>
              <div className="text-sm text-gray-600 mt-1"> 
                {video.snippet.channelTitle} 
              </div>
              <p className="text-sm text-gray-700 mt-2 line-clamp-2"> {parse(video.snippet.description)} </p>
            </div>
          </div>
        </Link>
      )
      )}
    </div>
  )
};

export default SearchResultsPage;