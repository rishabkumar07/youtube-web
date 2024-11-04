import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import MovieIcon from '@mui/icons-material/Movie';
import MusicIcon from '@mui/icons-material/MusicNote'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SportsCricket from '@mui/icons-material/SportsCricket';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import ShortTextIcon from '@mui/icons-material/ShortText';
import Whatshot from '@mui/icons-material/Whatshot';
import News from '@mui/icons-material/Newspaper';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import HistoryIcon from '@mui/icons-material/History';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';


const SideBar = () => {
  const isSideBarMenuOpen = useSelector((store) => store.app.isSideBarMenuOpen);

  if(!isSideBarMenuOpen)
    return;
  return (
    <div className="p-5 shadow-lg w-48 bg-white h-screen">
      <ul className="space-y-4 pt-4">
        <li className="flex items-center space-x-2"> 
          <HomeIcon />
          <Link to="/">Home</Link>
        </li>
        <li className="flex items-center space-x-2">
          <ShortTextIcon />
          <span>Shorts</span>
        </li>
        <li className="flex items-center space-x-2">
          <LiveTvIcon />
          <span>Live</span>
        </li>
        <li className="flex items-center space-x-2">
          <Whatshot />
          <span>Trending</span>
        </li>
      </ul>

      <h1 className="font-bold pt-5">Explore</h1>
      <ul className="space-y-4 pt-4">
        <li className="flex items-center space-x-2">
          <SubscriptionsIcon />
          <span>Subscriptions</span>
        </li>
        <li className="flex items-center space-x-2">
          <SportsCricket />
          <span>Cricket</span>
        </li>
        <li className="flex items-center space-x-2">
          <MovieIcon />
          <span>Movies</span>
        </li>
        <li className="flex items-center space-x-2">
          <News />
          <span>News</span>
        </li>
        <li className="flex items-center space-x-2">
          <ShoppingBagIcon />
          <span>Shopping</span>
        </li>
        <li className="flex items-center space-x-2">
          <PodcastsIcon />
          <span>Podcasts</span>
        </li>
        <li className="flex items-center space-x-2">
          <SportsEsportsIcon />
          <span>Gaming</span>
        </li>
      </ul>

      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul className="space-y-4 pt-4">
        <li className="flex items-center space-x-2">
          <HistoryIcon />
          <span>History</span>
        </li>
        <li className="flex items-center space-x-2">
          <ThumbUpIcon />
          <span>Liked Videos</span>
        </li>
      </ul>
    </div>
  )
};

export default SideBar;