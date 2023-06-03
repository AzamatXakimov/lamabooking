import { combineReducers } from "redux";
import {TokenReducer} from "./token/tokenReducer"
import { searchValuesReducer } from "./searchValues/searchValuesReducer";

export const RootRedusers = combineReducers({
    token: TokenReducer,
    searchValue: searchValuesReducer,
})