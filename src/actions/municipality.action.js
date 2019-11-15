import { fetchApi } from "../service/api";

export const getMunicipalityData = (username) => {
    return async (dispatch, getState) => {
        const state = getState();
        const { authReducer: { authData: { token } } } = state;
        dispatch({
            type: "GET_DATA_LOADING"
        });
        const response = await fetchApi("/api/getDashboardData?username=" + username + "&access_token=" + token, "POST", null, 200, token)
        if (response.success && response.responseBody.status === 200) {
            dispatch({
                type: "GET_DATA_SUCCESS",
                payload: response.responseBody
            });
            // console.log("municipality.action.getData");
            // console.log(response);
            return response;
        }
    }
}