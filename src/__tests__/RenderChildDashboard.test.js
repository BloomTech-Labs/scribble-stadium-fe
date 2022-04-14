import React from 'react';
import RenderChildDashboard from '../components/pages/ChildDashboard/RenderChildDashboard.js';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import persistReducer from '../state/reducers/index';

describe('RenderChildDashboard component', () => {
  it('should render without errors', () => {
    const store = createStore(persistReducer);
    render(
      <Provider store={store}>
        <RenderChildDashboard />
      </Provider>
    );
    expect(screen.getByTestId('child-dashboard')).toBeInTheDocument();
  });

  // it("should have a button which reads 'ACCEPT THE MISSION!' if there is not currently a game in progress", () => {
  //   // Need to figure out how to change the state of the store to test this
  //   const store = createStore(persistReducer);
  //   render(
  //     <Provider store={store}>
  //       <RenderChildDashboard />
  //     </Provider>
  //   );
  //   expect(screen.getByText('ACCEPT THE MISSION!')).toBeInTheDocument();
  // });

  // it("should have a button which reads 'RESUME THE MISSION!' if there is a game in progress", () => {
  //   // Need to figure out how to change the state of the store to test this
  //   const store = createStore(persistReducer);
  //   render(
  //     <Provider store={store}>
  //       <RenderChildDashboard />
  //     </Provider>
  //   );
  //   expect(screen.getByText('RESUME THE MISSION!')).toBeInTheDocument();
  // });
});
