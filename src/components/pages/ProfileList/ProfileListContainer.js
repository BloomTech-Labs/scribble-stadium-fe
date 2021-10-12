import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { getProfileData } from '../../../api';
import { List } from '../../common';
import RenderProfileListPage from './RenderProfileListPage';

// Here is an example of using our reusable List component to display some list data to the UI.
const ProfileList = () => {
  const { user } = useAuth0();

  return (
    <List
      // Here we are passing our Axios request helper function as a callback.
      getItemsData={() => getProfileData(user)}
      // Here we are passing in a component we want to show whilst waiting for our API request
      // to complete.
      LoadingComponent={() => <div>Loading Profiles...</div>}
      // Here we are passing in a component that receives our new data and returns our JSX elements.
      RenderItems={RenderProfileListPage}
    />
  );
};

export default ProfileList;
