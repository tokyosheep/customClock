import {timePropsReducer,clockTypeReducer,clockTextReducer} from "../reducer/index";
import {combineReducers,createStore} from "redux";
const rootReducer = combineReducers({
    timePropsReducer,
    clockTypeReducer,
    clockTextReducer
});

const configStore = () => createStore(rootReducer);

export default configStore;