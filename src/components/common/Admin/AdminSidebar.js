import { Button } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AdminSideBar() {
  const [isActive, setActive] = useState('true');

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div>
      <nav className={isActive ? 'wide-sidebar' : 'narrow-sidebar'}>
        <div className="navlinks">
          <div>
            <Link to="/admindashboard">
              {' '}
              <Button>D</Button>
              {isActive ? 'Dashboard' : null}{' '}
            </Link>
          </div>
          <div>
            <Link to="/storymanager">
              {' '}
              <Button>SM</Button>
              {isActive ? 'Story Manager' : null}{' '}
            </Link>
          </div>
        </div>
        <Button onClick={handleToggle}>{isActive ? 'Close' : 'Open'}</Button>
      </nav>
    </div>
  );
}
