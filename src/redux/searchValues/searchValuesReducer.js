import {ADD_SEARCH_VALUE, DELETE_SEARCH_VALUE} from "./searchValuesTypes";

const initialStateToken = {
    searchValue: {
        search: "",
        startDate: "",
        endDate: "",
        adult: 1,
        children: 0,
        room: 0
    }
};

export const searchValuesReducer = (state=initialStateToken, action) => {
    switch  (action.type) {
        case ADD_SEARCH_VALUE:
            return {
                ...state, 
                searchValue: action.payload,
            };
        case DELETE_SEARCH_VALUE: 
            return {
                ...state,
                searchValue: {
                    search: "",
                    date: "",
                    adult: 1,
                    children: 0,
                    room: 0
                },
            };
        default: return state
    }
}