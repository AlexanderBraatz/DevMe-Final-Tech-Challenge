import { createStore } from "redux";


import initial from "./initial";
import reducer from "./reducer";


const store = createStore(reducer, initial);


export default store;
