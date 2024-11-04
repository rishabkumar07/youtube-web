import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Body = () => {
  const isSideBarMenuOpen = useSelector((store) => store.app.isSideBarMenuOpen);
  return (
    <div className="flex">
      {isSideBarMenuOpen && <SideBar />}
      <div className={`${isSideBarMenuOpen ? "w-[calc(100%-12rem)]" : "w-full"} transition-all duration-300`}>
        <Outlet />
      </div>  
    </div>
  )
};

export default Body;