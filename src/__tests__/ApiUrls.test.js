import { getApiUrl } from '../api/index';
import { store } from '../state/index';

/**
 * These test cases validate that the base API URL is changing correctly in accordance to NODE_ENV and devMode state.
 * These tests are to validate that devmode functions safely (not influencing the production DB)
 */
describe('BASE API Url changes correctly, depending on state and .env variables', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules(); // clears the cache
    process.env = { ...OLD_ENV }; // make a copy of environment
    jest.mock('../state/index'); // mock the redux store
  });

  afterAll(() => {
    process.env = OLD_ENV; // CLEANUP -- restore old environment
  });

  it('utilizes REACT_APP_API_URI in development when devMode true', () => {
    process.env.NODE_ENV = 'development';
    const mockState = {
      devMode: { isDevModeActive: true },
    };
    store.getState = () => mockState;
    expect(getApiUrl()).toBe(process.env.REACT_APP_API_URI);
  });

  it('utilizes REACT_APP_API_URI in development when devMode false', () => {
    process.env.NODE_ENV = 'development';
    const mockState = {
      devMode: { isDevModeActive: false },
    };
    store.getState = () => mockState;
    expect(getApiUrl()).toBe(process.env.REACT_APP_API_URI);
  });

  it('utilizes REACT_APP_DEV_MODE_DATABASE_ENDPOINT in production when devMode true', () => {
    process.env.NODE_ENV = 'production';
    const mockState = {
      devMode: { isDevModeActive: true },
    };
    store.getState = () => mockState;
    expect(getApiUrl()).toBe(process.env.REACT_APP_DEV_MODE_DATABASE_ENDPOINT);
  });

  it('utilizes REACT_APP_API_URI in production when devMode false', () => {
    process.env.NODE_ENV = 'production';
    const mockState = {
      devMode: { isDevModeActive: false },
    };
    store.getState = () => mockState;
    expect(getApiUrl()).toBe(process.env.REACT_APP_API_URI);
  });
});
