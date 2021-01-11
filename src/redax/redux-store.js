import {combineReducers, createStore} from "redux";
import spinningReducer from "./spinning-reducer";
import reelReducer from "./reel-reducer";

let reducers = combineReducers({
    spinElements: spinningReducer,
    reelElements: reelReducer
});

let store = createStore(reducers);

export default store;