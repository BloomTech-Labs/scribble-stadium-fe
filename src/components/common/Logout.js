import React from 'react';
import { useOktaAuth } from '@okta/okta-react/dist/OktaContext';
import { Link, useHistory } from 'react-router-dom';
import { Layout, Button, Menu, Typography } from 'antd';



export default function Logout() {
    
    const { push } = useHistory();
    const { authService } = useOktaAuth();
        return(
            <div id="logout">
                <Button onClick={() => authService.logout()}>Logout</Button>
            </div>
        )
    }