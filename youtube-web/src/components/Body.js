import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Body = () => {
  const isSideBarMenuOpen = useSelector((store) => store.app.isSideBarMenuOpen);
  return (
    <div className="flex">
      {isSideBarMenuOpen && (
        <div className="fixed top-65px left-0 h-[calc(100vh-65px)] overflow-y-auto w-44 overflow-x-hidden">
          <SideBar />
        </div>
      )}
      <div 
        className="transition-all duration-300"
        style={{
          width: isSideBarMenuOpen ? `calc(100% - 12rem)` : "100%",
          marginLeft: isSideBarMenuOpen ? "12rem" : ""
        }}>
        <Outlet />
      </div>  
    </div>
  )
};

export default Body;