import React from 'react';
import Logout from '../../common/Logout';
import {Link} from 'react-router-dom';
import { Layout, Button, PageHeader, Menu, Typography } from 'antd';

// Styling still needs work on this page
export default function NewParentDashboard(props) {
    
    return(
        <Layout>
            <PageHeader style={{color:"hotpink", fontSize:'5rem'}}>Parent Dashboard</PageHeader>
            <Menu id="parentDB">
                <div>  
                    <Button>Child Progress/Dashboard</Button>
                </div>
                {/* Need to figure out how to put link in a onclick for the button */}
                <div>
                    <Button> 
                        <Link to="/parent/settings">Settings</Link>
                    </Button>
                </div>
                <div>
                    <Button>
                        <Link to="/parent/help">Help</Link>
                    </Button>
                </div>
                <div id="logout">
                    <Logout/> 
                </div>
            </Menu>
        </Layout>
    )
}
