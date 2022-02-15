import React from "react"
import { useAuth0 } from "@auth0/auth0-react";
import "./styles/Header.css";
import { storySquadLogo } from "./utils/pics";
import {useNavigate} from "react-router-dom";

const Header = () => {
    // const { user, isAuthenticated, logout } = useAuth0();
    // authentication will be handled by Auth0 //
    const navigate = useNavigate();
  
    return (
        // isAuthenticated && ( checks for athenticated user 
            <div className="header">
                <h4>Admin: {user.name}</h4>
                <div>
                    <img src={storySquadLogo} alt={user.name}/>
                </div>
                <div className="buttons">
                    <button onClick={() => {navigate("/admindashboard")}}>Home</button>
                    <button onClick={()=> logout()}>Log Out</button>
                </div>
                
            </div> 
        // )
    )
}

export default Header