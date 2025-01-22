export const YOUTUBE_POPULAR_VIDEOS_LIST_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&hl=hi&maxResults=30&regionCode=IN&key="+ process.env.REACT_APP_GOOGLE_API_KEY;

export const SEARCH_SUGGESTION_API = "https://thingproxy.freeboard.io/fetch/http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YT_COMMENTS_THREADS_API = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=10&key=" + process.env.REACT_APP_GOOGLE_API_KEY;

export const YT_SEARCH_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&key=" + process.env.REACT_APP_GOOGLE_API_KEY;

export const YT_VIDEO_DETAILS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" + process.env.REACT_APP_GOOGLE_API_KEY;

export const YT_CHANNEL_DETAILS = "https://youtube.googleapis.com/youtube/v3/channels?part=snippet,statistics&key=" + process.env.REACT_APP_GOOGLE_API_KEY;

export const SUGGESTIONS_LIST = {
  "items": [
    {
      kind: "youtube#videoCategory",
      etag: "grPOPYEUUZN3ltuDUGEWlrTR90U",
      id: "0",
      snippet: {
        title: "All",
        assignable: true,
        channelId: "UCBR8-60-B28hp2BmDPdntcQ",
      },
    },
    {
      kind: "youtube#videoCategory",
      etag: "grPOPYEUUZN3ltuDUGEWlrTR90U",
      id: "1",
      snippet: {
        title: "Film & Animation",
        assignable: true,
        channelId: "UCBR8-60-B28hp2BmDPdntcQ",
      },
    },
    {
      kind: "youtube#videoCategory",
      etag: "Q0xgUf8BFM8rW3W0R9wNq809xyA",
      id: "2",
      snippet: {
        title: "Autos & Vehicles",
        assignable: true,
        channelId: "UCBR8-60-B28hp2BmDPdntcQ",
      },
    },
    {
      kind: "youtube#videoCategory",
      etag: "qnpwjh5QlWM5hrnZCvHisquztC4",
      id: "10",
      snippet: {
        title: "Music",
        assignable: true,
        channelId: "UCBR8-60-B28hp2BmDPdntcQ",
      },
    },
    {
      kind: "youtube#videoCategory",
      etag: "HyFIixS5BZaoBdkQdLzPdoXWipg",
      id: "15",
      snippet: {
        title: "Pets & Animals",
        assignable: true,
        channelId: "UCBR8-60-B28hp2BmDPdntcQ",
      },
    },
    {
      kind: "youtube#videoCategory",
      etag: "PNU8SwXhjsF90fmkilVohofOi4I",
      id: "17",
      snippet: {
        title: "Sports",
        assignable: true,
        channelId: "UCBR8-60-B28hp2BmDPdntcQ",
      },
    },
    {
      kind: "youtube#videoCategory",
      etag: "0Hh6gbZ9zWjnV3sfdZjKB5LQr6E",
      id: "20",
      snippet: {
        title: "Gaming",
        assignable: true,
        channelId: "UCBR8-60-B28hp2BmDPdntcQ",
      },
    },

    {
      kind: "youtube#videoCategory",
      etag: "cHDaaqPDZsJT1FPr1-MwtyIhR28",
      id: "22",
      snippet: {
        title: "People & Blogs",
        assignable: true,
        channelId: "UCBR8-60-B28hp2BmDPdntcQ",
      },
    },
    {
      kind: "youtube#videoCategory",
      etag: "3Uz364xBbKY50a2s0XQlv-gXJds",
      id: "23",
      snippet: {
        title: "Comedy",
        assignable: true,
        channelId: "UCBR8-60-B28hp2BmDPdntcQ",
      },
    },
    {
      kind: "youtube#videoCategory",
      etag: "0srcLUqQzO7-NGLF7QnhdVzJQmY",
      id: "24",
      snippet: {
        title: "Entertainment",
        assignable: true,
        channelId: "UCBR8-60-B28hp2BmDPdntcQ",
      },
    },
    {
      kind: "youtube#videoCategory",
      etag: "bQlQMjmYX7DyFkX4w3kT0osJyIc",
      id: "25",
      snippet: {
        title: "News & Politics",
        assignable: true,
        channelId: "UCBR8-60-B28hp2BmDPdntcQ",
      },
    },
    {
      kind: "youtube#videoCategory",
      etag: "Y06N41HP_WlZmeREZvkGF0HW5pg",
      id: "26",
      snippet: {
        title: "Howto & Style",
        assignable: true,
        channelId: "UCBR8-60-B28hp2BmDPdntcQ",
      },
    },

    {
      kind: "youtube#videoCategory",
      etag: "Mxy3A-SkmnR7MhJDZRS4DuAIbQA",
      id: "28",
      snippet: {
        title: "Science & Technology",
        assignable: true,
        channelId: "UCBR8-60-B28hp2BmDPdntcQ",
      },
    }
  ]
};
