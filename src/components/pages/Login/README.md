## Login and Authentication w/ Auth0.

- The `LoginContainer.js` file includes a login button that directs the user to the Auth0 Universal Login Page.
- After the user enters their information on the Auth0 Universal Login, they will be re-directed back to the SS application.
- This login button is the key to `user authentication and management` within your application.
- You don't have to manage ANY users because we're letting Auth0 do this for us :)
- The documentation is very user friendly on the Auth0 site[auth0 site here](https://auth0.com/) and it'd be REALLY good to read this as well [the docs here](https://github.com/auth0/auth0-react) to get a good understanding of how the functionality works throughout the application.
- Refer to src/api/index.js > getAuthHeader to see where the id_token is being passed to the API
- Future cohorts should also think about how you want to style and best ways to display the button the home screen. There is a bit of whitespace that can be 
optimized to bring a little bit more life to the page.