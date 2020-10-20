import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, cleanup, waitFor, act } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { ParentLoadingComponent } from '../components/common';
import ParentDashboardContainer from '../components/pages/ParentDashboard/ParentDashboardContainer';
import { ParentDashboard } from '../components/pages/ParentDashboard';

const mockStore = configureStore([]);
const store = mockStore();

afterEach(cleanup);

jest.mock('@okta/okta-react', () => ({
  useOktaAuth: () => {
    return {
      authState: {
        isAuthenticated: true,
      },
      authService: {
        getUser: () => Promise.resolve({ name: 'someone' }),
      },
    };
  },
}));

// works but has warnings for state and un-mounted components - 100%
describe('<ParentDashboardContainer /> test suite', () => {
  test('container renders without crashing', async () => {
    const { getByText, findByText, queryByText } = render(
      <Router>
        <Provider store={store}>
          {/* <ParentDashboardContainer LoadingComponent={ParentLoadingComponent} /> */}
          <ParentDashboard
            LoadingComponent={ParentLoadingComponent}
            parent={{ children: [] }}
          />
        </Provider>
      </Router>
    );
    let loader = getByText(/loading/i);
    expect(loader).toBeInTheDocument();

    // await waitFor(async () => {
    //   await findByText(/welcome/i);
    // });
    // loader = queryByText(/loading/i);
    // expect(loader).toBeNull();
    await act(() => Promise.resolve());
  });
});

// works but has 0% coverage
// describe('<ParentDashboardContainer /> test suite', () => {
//   test('container renders without crashing', async () => {
//     const {getByText, queryByText} = await render(
//       // <Component parent={{children: []}} />
//       <Provider store = {store}>
//         <ParentDashboard parent={{ children: [] }} store={store} />
//       </Provider>, {wrapper: MemoryRouter}
//     );
//     const welcome = getByText(/welcome/i);
//     expect(welcome.innerHTML).toBe('Welcome Back');
//   });
// });

// works but doesn't need the act at the botto,, nor the query for null
// describe('<ParentDashboardContainer /> test suite', () => {
//   test('container renders without crashing', async () => {
//     const {getByText, queryByText} = await render(
//       // <Component parent={{children: []}} />
//       <Provider store = {store}>
//         <ParentDashboard parent={{ children: [] }} store={store} />
//       </Provider>, {wrapper: MemoryRouter}
//     );
//     const welcome = getByText(/welcome/i);
//     expect(welcome.innerHTML).toBe('Welcome Back');

//         const loader = queryByText(/loading/i);
//     expect(loader).toBeNull();
//     await act(() => Promise.resolve());
//   });
// });

// Original
// import * as React from 'react';
// import { configure, shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import { BrowserRouter as Router } from 'react-router-dom';

// import configureStore from 'redux-mock-store';
// import { Provider } from 'react-redux';

// import LoadingComponent from '../components/common/ParentLoadingComponent';
// import RenderParentDashboard from '../components/pages/ParentDashboard/RenderParentDashboard';
// import ParentDashboardContainer from '../components/pages/ParentDashboard/ParentDashboardContainer';
// jest.mock('@okta/okta-react', () => ({
//   useOktaAuth: () => {
//     return {
//       authState: {
//         isAuthenticated: true,
//       },
//       authService: {},
//     };
//   },
// }));

// configure({ adapter: new Adapter() });

// describe('<ParentDashboardContainer />', () => {
//   configure({ adapter: new Adapter() });
//   const mockStore = configureStore([]);
//   const store = mockStore();

//   describe('Render <ParentDashboardContainer />', () => {
//     let shallowWrapper;
//     beforeEach(() => {
//       shallowWrapper = shallow(
//         <Router>
//           <Provider store={store}>
//             <ParentDashboardContainer />
//           </Provider>
//         </Router>
//       ).dive();
//     });

//     it('Find ParentDashboard', () => {
//       expect(shallowWrapper.find(RenderParentDashboard));
//     });
//     it('Find Loading Component', () => {
//       expect(shallowWrapper.find(LoadingComponent));
//     });
//     it('Find ParentDashboardContainer', () => {
//       expect(shallowWrapper).toMatchSnapshot();
//     });
//   });
// });
