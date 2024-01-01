import { createStore, combineReducers, applyMiddleware } from 'redux'; 
import { thunk } from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension'; //for redux devtools extension
import { userReducerLogout, userReducerProfile, userReducerSignIn, userReducerSignUp } from './reducer/userReducer';


//combine reducers
const reducer = combineReducers({

    signIn: userReducerSignIn,
    signup : userReducerSignUp,
    logOut : userReducerLogout,
    userProfile : userReducerProfile,

});


//initial state
let initialState = {
    signIn: {
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null //get user info from local storage //if user info is in local storage then parse it to json else null
    },
    mode : "light"
};


const middleware = [thunk]; 
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware))); //create store //composeWithDevTools(applyMiddleware(...middleware)) is for redux devtools extension //applyMiddleware(...middleware) is for thunk middleware
 export default store; //export store