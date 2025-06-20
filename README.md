# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Netflix GPT
 - create react app
 - configured TailwindCss
 - Header
 - Routing or App
 - Login Form
 - Sign up form
 - Form validation
 - useRef Hook
 - Firebase setup
 - deploying our app to production
 - create signup user accout
 - create signin user account
 - create redux store with userslice
 - created signout
 - added update profile
 - BugFix:sign up user displayname and profile picture update(in handlesignUp function)
 - BugFix: if the user is not logged in Redirect /browse to Login and vice -versa
 - Unsbuscribed to the onAuthStateChanged callback(when component unmount we should unsubscribe)
 -Register TMDB api and create an app& get access token
 - get data from tmdb now playing movie list API
# Features
-Login/Sign up
    - Sign in/sign up
    - redirect to browse page
- Browse(after authentication)
    - Header
    - Main movie
        -Trailer in Background
        - Title & Description
        -Movie suggestions
                -Movie lists 
- Netflix Gpt
    -search Bar
    - Movie Suggestions


## use formik library for creating forms

## useRef

useRef is a hook used for refencing 
   - example
        const email =useRef(null)
        <input  ref=email type=text>
    input mail reference is stored in email


## authentication google firebase
 - google fiebase login
 - create new project(check if account is asking or not)
 - create web app
 -and follow the steps present there
 - copy config file in firebase.json

 -- for hosting
 - npm install -g firebase-tools
- firebase login
- npm run build
- firebase init hosting
   - Select your Firebase project
   - Set the public directory to build
    - Choose Yes for single-page app (React uses client-side routing)
    - Say No to overwriting index.html if asked
-  firebase deploy

## Authentication
- authenticate the user using firebase authentication

- nee to store the object id in redux store


# onAuthStateChanged api
is called whenever user signed in signed out this will be called automatically
 
 u can set dispatch actions inside this api and 
 place this in useEffect(because u want to call these only once)

 # useNavigate is a hook used to navigate

 # keeping useEffect(onAuthStateChanged) in header because the header always stay through out our app 