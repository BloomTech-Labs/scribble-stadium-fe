import React from 'react';
import RenderChildDashboard from '../components/pages/ChildDashboard/RenderChildDashboard.js';
import { screen } from '@testing-library/react';
import { render as renderWithRedux } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import persistReducer from '../state/reducers/index';

describe('RenderChildDashboard component', () => {
  it('should render without errors', () => {
    const store = createStore(persistReducer);
    renderWithRedux(
      <Provider store={store}>
        <RenderChildDashboard />
      </Provider>
    );
    expect(screen.getByTestId('child-dashboard')).toBeInTheDocument();
  });
});
