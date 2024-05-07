import { Link } from "react-router-dom";
import "../StyleComponents/Sidebar.css";
import { BsFillHouseFill, BsClipboardData, BsPeople} from 'react-icons/bs';
import { MdLibraryAdd } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import Excel from "./Excel";


const Sidebar = () => {
 
    return (
        <>
            <div className="sidebar">
                <div className="sidebar-content">
                    <div className="sidebar-header">
                        <img src="./Images/Dashboard white@2x.png" width="200px" alt="Logo" className="logo" />
                    </div>
                        <ul className="sidebar-menu">
                            <Link to="/" className="Nlinks" >   <li><BsFillHouseFill className="icon" /><a href="#">Home</a></li></Link>
                            <Link to="insertuser" className="Nlinks" ><li><MdLibraryAdd className="icon" /><a href="#">Insert User</a></li></Link>
                            <Link to="userdisplay" className="Nlinks" >   <li><BsPeople className="icon" /><a href="#">User-Display</a></li></Link>
                            <Link to="inserttask" className="Nlinks" ><li><FaTasks className="icon" /><a href="#">Insert Task</a></li></Link>
                            <Link to="taskdisplay" className="Nlinks" ><li><BsClipboardData className="icon" /><a href="#">Task-Display</a></li></Link>
                            
                        </ul>
                    <div className="logout-container">
                        <Excel/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;
