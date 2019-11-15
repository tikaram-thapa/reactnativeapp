import { combineReducers } from "redux";

const getMunicipalityData = (state = {}, action) => {
    switch (action.type) {
        case "GET_DATA_LOADING":
            return {
                isLoading: true,
                isError: false,
                isSuccess: false,
                data: null,
                errors: null
            }
        case "GET_DATA_SUCCESS":
            return {
                isLoading: false,
                isError: false,
                isSuccess: true,
                data: action.payload,
                errors: null
            }
        default:
            return state;
    }
}

export default combineReducers({
    getMunicipalityData
});