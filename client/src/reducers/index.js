import {combineReducers} from "redux";
//NAME IT DIFFERENTLY SO IT WONT BE CONFUSED WITH OTHER REDUCERS
//HOWEVER FROM THE LIBRARY WE HAVE TO CALL OUT THE EXACT METHOD "reducer"
import {reducer as formReducer} from "redux-form";
import authReducer from "./authReducer";
import streamReducer from "./streamReducer";

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    streams: streamReducer
});