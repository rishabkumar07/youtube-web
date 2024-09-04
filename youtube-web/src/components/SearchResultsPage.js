import { YT_SEARCH_API } from "./utils/constants";
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if(query)
      fetchSearchResults();
  }, [query]);

  const fetchSearchResults = async() => {
    try
    {
      const data = await fetch(`${YT_SEARCH_API}&q=${query}`);
      const json = await data.json();
      setSearchResults(json.items);
    }
    catch (error) 
    {
      console.error("Error fetching search results:", error);
    }
  }

  return (
    <div className="p-5">
      {searchResults.map((video) => (
        <div key={video.id.videoId} className="mb-4">
          <Link to={`/watch?v=${video.id.videoId}`}>
            <img src={video.snippet.thumbnails.medium.url} 
              alt={video.snippet.title} className="w-full h-auto rounded-lg" />
            <h3 className="text-lg font-semibold mt-2">{video.snippet.title}</h3>
            <p className="text-sm text-gray-600">{video.snippet.channelTitle}</p>
          </Link>
        </div>
      )
      )}
    </div>
  )
};

export default SearchResultsPage;