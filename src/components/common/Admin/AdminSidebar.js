import React,{useState} from 'react';
import { Link } from 'react-router-dom';

export default function SideBar() {
    const [isActive, setActive] = useState("true");

    const handleToggle = () => {
        setActive(!isActive);
      };
    return (
        <div>
            <nav className={isActive? "wide-sidebar": "narrow-sidebar"}>
                <div className='navlinks'>
                    <div className='navlink'>
                        <Link to="/admindashboard"> <img src="" alt='dashboard-icon'/>{isActive? "Dashboard":null} </Link>
                    </div>
                    <div className='navlink'>
                        <Link to="/storymanager"> <img src="" alt='story-manager-icon'/>{isActive? "Story Manager":null} </Link>
                    </div>
                </div>
                <div 
                    className='hamburger-menu'
                    onClick={handleToggle}>
                    <img src="" alt='hamburger menu'/>
                </div>
            </nav>
        </div>
    );
}
