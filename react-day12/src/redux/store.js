import { createStore } from "redux" ;
import { counterReducer } from "./reducer";

const store = createStore (counterReducer);
//creatStore creates a empty workspace to connect our action file and reducer file
export default store
//default store