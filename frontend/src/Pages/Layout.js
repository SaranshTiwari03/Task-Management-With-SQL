import { Link,Outlet } from "react-router-dom";
import Topbar from "../Components/Topbar";
import Sidebar2 from "../Components/Sidebar";

function Layout() {
  return (
    <>
        <Topbar/>
        
        
        <div className="displayscreen">
           <div classname="sidecontent"><Sidebar2/></div> 
            <Outlet className="outlet"/>
        </div>

        
    </>
  )
}

export default Layout
