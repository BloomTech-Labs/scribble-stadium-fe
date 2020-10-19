import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { ChildLoadingComponent } from '../components/common';
import { MissionControl } from '../components/pages/MissionControl';

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

describe('<MissionControlContainer /> test suite', () => {
  test('container renders without crashing', async () => {
    const { getByText, findByText, queryByText } = render(
      <Router>
        <Provider store={store}>
          <MissionControl LoadingComponent={ChildLoadingComponent} />
        </Provider>
      </Router>
    );

    let loader = getByText(/loading/i);
    expect(loader).toBeInTheDocument();
  });
});

// import * as React from 'react';
// import { configure, shallow, ShallowWrapper } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import { BrowserRouter as Router } from 'react-router-dom';

// import configureStore from 'redux-mock-store';
// import { Provider } from 'react-redux';

// import LoadingComponent from '../components/common/ChildLoadingComponent';
// import MissionControlContainer from '../components/pages/MissionControl/MissionControlContainer';
// import RenderMissionControl from '../components/pages/MissionControl/RenderMissionControl';

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

// describe('<MissionControlContainer />', () => {
//   configure({ adapter: new Adapter() });
//   const mockStore = configureStore([]);
//   const store = mockStore();

//   describe('Render <MissionControlContainer />', () => {
//     let shallowWrapper = ShallowWrapper;
//     beforeEach(() => {
//       shallowWrapper = shallow(
//         <Router>
//           <Provider store={store}>
//             <MissionControlContainer />
//           </Provider>
//         </Router>
//       ).dive();
//     });
//     it('Find Render Mission', () => {
//       expect(shallowWrapper.find(RenderMissionControl).length).toBe(0);
//     });
//     it('Find Loading Component', () => {
//       expect(shallowWrapper.find(LoadingComponent));
//     });
//     it('MissionControlContainer', () => {
//       expect(shallowWrapper).toMatchSnapshot(); // <------
//     });
//   });
// });
