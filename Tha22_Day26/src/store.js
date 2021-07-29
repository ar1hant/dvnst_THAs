import {Reducer} from "./reducers/Reducer";
import {createStore} from "redux";

const store = createStore(Reducer);
export default store;