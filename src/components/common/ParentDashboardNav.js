import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import { useAuth0 } from '@auth0/auth0-react';
import { getProfileData } from '../../../api';
import NewProgressCharts from '../../common/NewProgressCharts';
import NewChildCard from '../../common/NewChildCard';
import AccountSettings from '../AccountSettings/AccountSettingsContainer';
import ParentFooter from '../../common/ParentFooter';
import ChooseChildModal from './ChooseChildModal';
import { connect } from 'react-redux';
import { setParent } from '../../../state/actions/parentActions';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// TEMPORARY HARD CODE - import of image assets - remove when pulling state from BE or globally
import pinkyWinky from '../../../assets/images/hero_images/hero10.png';
import submarineBoy from '../../../assets/images/hero_images/hero3.png';
import dad from '../../../assets/images/hero_images/hero5.png';

const ParentDashboardNav = props => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <ChooseChildModal />
        </Route>
        <Route path="/">
          <ParentFooter />
        </Route>
        <Route path="/">
          <NewProgressCharts />
        </Route>
        <Route path="/">
          <NewChildCard />
        </Route>
        <Route path="/">
          <AccountSettings />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default ParentDashboardNav;
