// Importing the CSS file for styling the top bar
import "../StyleComponents/Topbar.css";

// Importing the IoMdNotificationsOutline icon from react-icons
import { IoMdNotificationsOutline } from 'react-icons/io';

// Functional component for the top bar
const Topbar = () => {
   

    return (
        <>
            {/* Top bar container */}
            <div className="top-bar">
                {/* Logo section */}
                <div className="logo-section">
                    {/* Logo image */}
                    <img src="./images/Compito white@2x.png" width="150px" alt="Logo" />
                </div>
                {/* Search section */}
                <div className="search-section">
                    {/* Input field for search */}
                    <input type="text" placeholder="Search..." />
                    {/* Search icon */}
                    <i className="fas fa-search"></i> 
                </div>
                {/* Notification section */}
                <div className="notification-section">
                    {/* Bell icon for notifications */}
                    <IoMdNotificationsOutline className="bell-icon" />
                    {/* Profile picture */}
                </div>
            </div>
        </>
    );
}

// Exporting the Topbar component
export default Topbar;
