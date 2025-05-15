import { combineReducers } from "redux";
import { productRdeucer } from "./Productreducer";

const reducers = combineReducers({
    allProducts: productRdeucer,
    devTools: import.meta.env.MODE !== 'production'
});

export default reducers