/* per later discussions it was decided to not to use SideBar and instead have it as a simple link on the Admin page
  Keeping this component in case if it is needed in the future
*/

import { Button } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AdminSideBar() {
  const [isActive, setActive] = useState('true');

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div className="sidebar-component">
      <nav className={isActive ? 'wide-sidebar' : 'narrow-sidebar'}>
        <div className="navlinks">
          <div className="link">
            <Link to="/admin/admindashboard">
              <Button shape="round" type="primary">
                <b>D</b>
              </Button>
              {isActive ? <h3>Dashboard</h3> : null}{' '}
            </Link>
          </div>
          <div className="link">
            <Link to="/admin/storymanager">
              <Button shape="round" type="primary">
                <b>SM</b>
              </Button>
              {isActive ? <h3>Story Manager</h3> : null}{' '}
            </Link>
          </div>
        </div>
      </nav>
      <div className={isActive ? 'close-button' : 'open-button'}>
        <Button onClick={handleToggle} type="primary" shape="round">
          {isActive ? <b>Close</b> : <b>Open</b>}
        </Button>
      </div>
    </div>
  );
}
