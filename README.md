

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
 - Custom hook for now playing moves
 - update store with movies data
 - Planning for MainContainer & secondary       container
 - Fetch data for trailer video
 - update store with trailer video data
 - embedded the youtube video and make it autoplay and mute
 - tailwind classes to make main container look awesome
 - Build Secondary component
 - build movie list
 - build movie card
 - tmdb img cdn url
 - usePopularMovies hook
 - GPT search page
 - GPT search bar
 - {Bonus} Multi-language feature in our app
 - search api call
 - fetchec movies from slice
 - created gptslice and added movies data
 - memoization
 - adding .env file
 -added .env to gitignore
 - made responsive





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

 # memoization helps to get rid of to many api calls
