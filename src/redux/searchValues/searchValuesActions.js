import {ADD_SEARCH_VALUE, DELETE_SEARCH_VALUE} from "./searchValuesTypes";

export const addSearchValues = (token) => {
    return {
        type: ADD_SEARCH_VALUE,
        payload: token,
    }
}

export const deleteSearchValues = () => {
    return {
        type: DELETE_SEARCH_VALUE,
        payload: "",
    }
}