import { combineReducers } from "redux";
import { productRdeucer, selectedProductReducer } from "./Productreducer";

const reducers = combineReducers({
    allProducts: productRdeucer,
    products: selectedProductReducer,
    devTools: import.meta.env.MODE !== 'production'
});

export default reducers