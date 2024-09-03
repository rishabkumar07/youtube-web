export const YOUTUBE_POPULAR_VIDEOS_LIST_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&hl=hi&maxResults=40&regionCode=IN&key="+ process.env.REACT_APP_GOOGLE_API_KEY;

export const SEARCH_SUGGESTION_API = "https://thingproxy.freeboard.io/fetch/http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YT_COMMENTS_THREADS_API = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=10&key=" + process.env.REACT_APP_GOOGLE_API_KEY;