import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../../common/Admin/AdminHeader'; 
import SideBar from "../../common/Admin/AdminSidebar";

const Admin = () => {
    const { isAuthenticated } = useAuth0();
    
    return (
        isAuthenticated && (
            <Router>
                <Header />
                <div className='main'>
                    <SideBar />
                    <div className='container'>
                        Placeholder for Admin routes
                    </div>
                </div> 
            </Router>
        )
    )
}

export default Admin