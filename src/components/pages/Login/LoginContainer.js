import React, { useEffect } from 'react';
import * as OktaSignIn from '@okta/okta-signin-widget';
import { useOktaAuth } from '@okta/okta-react';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import { config } from '../../../utils/oktaConfig';

const LoginContainer = ({ setCorsErrorModalOpen }) => {
  const { oktaAuth } = useOktaAuth();

  useEffect(() => {
    // Proof Key for Code Exchange as known as PKCE, is a key for preventing
    // malicious attacks and securely performing code authorization flow.
    // It is destructured below but not used.
    // eslint-disable-next-line
    const {
      pkce,
      issuer,
      clientId,
      redirectUri,
      scopes,
      useInteractionCode,
    } = config;
    // destructure your config so that you can pass it into the required fields in your widget.

    const widget = new OktaSignIn({
      baseUrl: issuer ? issuer.split('/oauth2')[0] : '',
      clientId,
      redirectUri,
      registration: {
        // click: function () {
        //   window.location.href = '/login'; //This just redirects to a random page for now, will have actual page when signup feature is complete
        // },
      },
      features: { registration: true },
      // turning this feature on allows your widget to use Okta for user registration
      logo: 'https://placekitten.com/200/200',
      // add your custom logo to your signing/register widget here.
      i18n: {
        en: {
          'primaryauth.title': `Sign-in to your account`,
          'primaryauth.username.placeholder': 'Email Address',
          needhelp: '🐾∞🐾',
          // needhelp: 'Don’t have an account yet? SIGN-UP HERE',
          // change title for your app
        },
      },
      authParams: {
        // To avoid redirect do not set "pkce" or "display" here. OKTA-335945
        issuer,
        scopes,
      },
      useInteractionCodeFlow: useInteractionCode, // Set to true, if your org is OIE enabled
    });

    widget.renderEl(
      { el: '#sign-in-widget' },
      res => {
        oktaAuth.handleLoginRedirect(res.tokens);
        /**
         * In this flow, the success handler will not be called because we redirect
         * to the Okta org for the authentication workflow.
         */
      },
      err => {
        throw err;
      }
    );
    // Note: Can't distinguish CORS error from other network errors
    const isCorsError = err => err.name === 'AuthApiError' && !err.statusCode;

    widget.on('afterError', (_context, error) => {
      if (isCorsError(error)) {
        setCorsErrorModalOpen(true);
      }
    });

    return () => widget.remove();
    // TODO: adding this line to disable linting for this dep array,
    // where it is suggesting we include 'setCorsErrorModalOpen'.
    // We might want to revisit at a later date
    // eslint-disable-next-line
  }, [oktaAuth]);

  return <div id="sign-in-widget" />;
};

export default LoginContainer;
