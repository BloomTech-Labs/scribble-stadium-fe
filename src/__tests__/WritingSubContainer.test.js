import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, cleanup, waitFor } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { ChildLoadingComponent } from '../components/common';
import { WritingSub } from '../components/pages/WritingSub';

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

describe('<WritingSub /> test suite', () => {
  test('container renders without crashing', async () => {
    const { getByText, findByText, queryByText } = render(
      <Router>
        <Provider store={store}>
          <WritingSub LoadingComponent={ChildLoadingComponent} />
        </Provider>
      </Router>
    );
    let loader = getByText(/loading/i);
    expect(loader).toBeInTheDocument();

    await waitFor(async () => {
      await findByText(/story squad/i);
    });

    loader = queryByText(/loading/i);
    expect(loader).toBeNull();
  });
});

// import * as React from 'react';
// import { configure, shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { cleanup } from '@testing-library/react';

// import configureStore from 'redux-mock-store';
// import { Provider } from 'react-redux';

// import LoadingComponent from '../components/common/ParentLoadingComponent';
// import RenderWritingSub from '../components/pages/WritingSub/RenderWritingSub';
// import WritingSubContainer from '../components/pages/WritingSub/WritingSubContainer';

// afterEach(() => {
//   cleanup();
// });

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

// describe('<ProfileModalContainer />', () => {
//   configure({ adapter: new Adapter() });
//   const mockStore = configureStore([]);
//   const store = mockStore();

//   describe('Render <ProfileModalContainer />', () => {
//     let shallowWrapper;
//     beforeEach(() => {
//       shallowWrapper = shallow(
//         <Router>
//           <Provider store={store}>
//             <WritingSubContainer />
//           </Provider>
//         </Router>
//       ).dive();
//     });

//     it('Find WritingSub', () => {
//       expect(shallowWrapper.find(RenderWritingSub));
//     });
//     it('Find Loading Component', () => {
//       expect(shallowWrapper.find(LoadingComponent));
//     });
//     it('Find WritingSubContainer', () => {
//       expect(shallowWrapper).toMatchSnapshot();
//     });
//   });
// });
