import {timePropsReducer,clockTypeReducer,clockTextReducer,timeTick,modeReducer} from "../reducer/index";
import {combineReducers,createStore} from "redux";
const rootReducer = combineReducers({
    timePropsReducer,
    clockTypeReducer,
    clockTextReducer,
    modeReducer,
    timeTick
});

const configStore = () => createStore(rootReducer);

export default configStore;