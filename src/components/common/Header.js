import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ChildHeader from './Childnav';
import ParentNavTop from './ParentNavTop';

function HeaderRenderer(props) {
  const [Header, setHeader] = useState(ChildHeader);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.includes('parent')) {
      setHeader(ParentNavTop);
    }
    //if a login specific header is desired it can be implemented here
    //  else if (location.pathname === '/login') {
    //   setHeader();
    // }
    //if more sections of the app need distinct headers add them here:
    else {
      setHeader(ChildHeader);
    }
  }, [location]);
  return (
    <div>
      <Header />
    </div>
  );
}

export default HeaderRenderer;
