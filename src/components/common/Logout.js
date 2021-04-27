import React from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { Layout, Button, Menu, Typography } from 'antd';



export default function Logout() {
    
    const {authService } = useOktaAuth();
        return(
            <div id="logout">
                <Button onClick={() => authService.logout()}>Logout</Button>
            </div>
        )
    } 