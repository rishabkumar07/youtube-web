import { toggleSideBarMenu } from "./utils/appSlice";
import { useDispatch } from "react-redux";
const Header = () => {
  const dispatch = useDispatch();
  const handleSideBarMenu = () => {
    dispatch(toggleSideBarMenu());
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
      <input type="text" placeholder="Search" className="w-1/2 border border-gray-400 p-2 rounded-l-full"></input>
      <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">🔍</button>
      </div>

      <div className="col-span-1">
        <img src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
         alt="user" className="h-8"></img>
      </div>
    </div>
  )
};

export default Header;