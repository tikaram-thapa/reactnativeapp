import { fetchAuthApi } from "../service/api";

export const loginUser = (payload) => {

  return async (dispatch) => {

    // alert(payload.username + ", " + payload.password);
    try {
      dispatch({
        type: "LOGIN_USER_LOADING"
      });
      const response = await fetchAuthApi("/api/apiLogin?username=" + payload.username + "&password=" + payload.password, "POST", payload, 200);

      if ((response.success) && (response.responseBody.message === "login_success")) {
        dispatch({
          type: "LOGIN_USER_SUCCESS",
        });
        dispatch({
          type: "GET_USER_SUCCESS",
          payload: response.responseBody
        });
        dispatch({
          type: "AUTH_USER_SUCCESS",
          token: response.token
        });
        return response;
      } else {
        throw response;
      }

    } catch (error) {
      dispatch({
        type: "LOGIN_USER_FAIL",
        payload: error.responseBody
      });
      return error;
    }
  }
}

export const logoutUser = (username) => {
  return async (dispatch, getState) => {
    const state = getState();
    try {
      const { authReducer: { authData: { token } } } = state;
      const response = await fetchAuthApi("/api/logoutApi?username=" + username + "&access_token=" + token, "DELETE", null, 200, token);
      if (response.success && response.responseBody.status === 200) {
        dispatch({
          type: "USER_LOGGED_OUT_SUCCESS"
        });
      }
      //  else {
      //   throw response;
      // }
    } catch (error) {
      // dispatch({
      //   type: "USER_LOGOUT_FAILED",
      //   payload: error.responseBody
      // });
      // console.log("logout error");
      // console.log(error);
      // return error;
    }
  }
}