import axios from "../../pages/api/axios";
import { toast } from "react-toastify";
import {
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_FAIL,
    USER_SIGNIN_RESET,
    USER_LOGOUT_REQUEST,
    USER_LOGOUT_SUCCESS,
    USER_LOGOUT_FAIL,
    USER_LOGOUT_RESET,
    USER_LOAD_REQUEST,
    USER_LOAD_SUCCESS,
    USER_LOAD_FAIL,
    USER_LOAD_RESET,
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAIL,
    USER_SIGNUP_RESET,
} from "../constants/userConstant";

export const userSignInAction = ({jobId, password}) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST });
    try {
        console.log({jobId, password});
        const { data } = await axios.post(`/login`, {jobId, password});
        localStorage.setItem('userInfo', JSON.stringify(data));
        dispatch({ 
            type: USER_SIGNIN_SUCCESS, 
            payload: data 
        });
        toast.success('Login Successful!');
    } catch (error) {
        dispatch({
            type: USER_SIGNIN_FAIL,
            payload: error.response.data.error
        });
        toast.error(error.response.data.error);
    }
}

// user sign up action
export const userSignUpAction = (user) => async (dispatch) => {
    dispatch({ type: USER_SIGNUP_REQUEST });
    try {

        // Modify the user data to include the role field
        const userData = {
            ...user,
            role: user.role || 0, // Default to role 0 (user) if not specified
        };

        const { data } = await axios.post("/api/register", userData);

        dispatch({
            type: USER_SIGNUP_SUCCESS,
            payload: data
        });
        toast.success("Registered Successfully!");
    } catch (error) {
        dispatch({
            type: USER_SIGNUP_FAIL,
            payload: error.response.data.error
        });
        toast.error(error.response.data.error);
    }
}

//logout action
export const userLogOutAction = () => async (dispatch) => {
    dispatch({ type: USER_LOGOUT_REQUEST });
    try {
        const { data } = await axios.get("/logout");
        localStorage.removeItem('userInfo');
        dispatch({ 
            type: USER_LOGOUT_SUCCESS, 
            payload: data 
        });
        toast.success('Logged Out Successful!');
    } catch (error) {
        dispatch({
            type: USER_LOGOUT_FAIL,
            payload: error.response.data.error
        });
        toast.error(error.response.data.error);
    }
}


//user profile action
export const userProfileAction = () => async (dispatch) => {
    dispatch({ type: USER_LOAD_REQUEST });
    try {
        const { data } = await axios.get("/api/me");
        dispatch({ 
            type: USER_LOAD_SUCCESS, 
            payload: data 
        });
    } catch (error) {
        dispatch({
            type: USER_LOAD_FAIL,
            payload: error.response.data.error
        });
    }
}

