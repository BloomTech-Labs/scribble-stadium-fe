import React from 'react';
import { render, screen } from '@testing-library/react';
import NewParentDashboard from '../components/pages/NewParentDashboard/NewParentDashboard';
import {BrowserRouter as Router} from 'react-router-dom';


import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureStore([]);
const store = mockStore();




jest.mock('@okta/okta-react', () => ({
    useOktaAuth: () => {
        return {
            authState: {
                isAuthenticated: true,
            },
            authService: {},
        };
    },
})); 

const ParentComponent = props => {
    return(
        <Router>
            <Provider store = {store}>
                <NewParentDashboard {...props} />
            </Provider>
        </Router>
    );

};

describe('<NewParentDashboard /> test suite', () => {
    test('Parent Dashboard', () => {
        render(<ParentComponent parent={{ children: [] }} />);
        expect(screen.getByText(/Parent Dashboard/i)).toBeInTheDocument();
    });

    // test('The new Parent Dashboard renders successfully', () => {
    //     const { dashboard } = render(<NewParentDashboard />);
    //     expect(dashboard.querySelector('#parentDB')).toBeTruthy();
    // });
});