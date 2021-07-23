import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
const OKTA_TESTING_DISABLEHTTPSCHECK =
  process.env.OKTA_TESTING_DISABLEHTTPSCHECK || false;
// let USE_INTERACTION_CODE = false;

const config = {
  issuer: process.env.REACT_APP_OKTA_ISSUER_URI,
  redirectUri: window.location.origin + '/implicit/callback',
  clientId: process.env.REACT_APP_CLIENT_ID,
  pkce: true,
  scopes: ['openid', 'email', 'profile'],
  disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK,
  // useInteractionCode: USE_INTERACTION_CODE,
};

function genRestore(_history) {
  return async (_oktaAuth, originalUri) => {
    _history.replace(toRelativeUrl(originalUri, window.location.origin));
  };
}
const oktaAuth = new OktaAuth(config);

export { oktaAuth, config, genRestore };
