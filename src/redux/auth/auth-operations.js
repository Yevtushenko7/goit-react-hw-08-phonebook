import axios from "axios";
import { authActions } from "../auth";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = credentials => async dispatch => {
    dispatch(authActions.registerRequest());

    try {
      const { data } = await axios.post('/users/signup', credentials);
      
        token.set(data.token);
        dispatch(authActions.registerSuccess(data));
    } catch (error) {
        dispatch(authActions.registerError(error.message));
    }
};

const login = credentials => async dispatch => {
    dispatch(authActions.loginRequest());
    try {
      const { data } = await axios.post('/users/login', credentials);
      
        token.set(data.token);
        dispatch(authActions.loginSuccess(data));
    } catch (error) {
        dispatch(authActions.loginError(error.message));
    }
};


const logout = () => async dispatch => {
    dispatch(authActions.logoutRequest());
    try {
      await axios.post('/users/logout');
      
        token.unset();
        dispatch(authActions.logoutSuccess());
    } catch (error) {
        dispatch(authActions.logoutError(error.message));
    }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const { auth } = getState();
  const persistedToken = auth.token;

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);

  dispatch(authActions.getCurrentUserRequest());

  try {
    const { data } = await axios.get('/users/current');

    dispatch(authActions.getCurrentUserSuccess(data));
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error.message));
  }
};

const authOperations = { register, login, logout, getCurrentUser };

export default authOperations;