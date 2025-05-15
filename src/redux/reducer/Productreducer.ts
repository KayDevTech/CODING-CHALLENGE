import type { product } from "../../Types";
import { ActionTypes } from "../constant/Actiontypes"


interface productState {
    products: product[];
    selectedProduct?: product;

}
const initialState: productState = {
        products: [],
}

type Action =
    | { type: typeof ActionTypes.SET_PRODUCTS; payload: product[] }
    | { type: typeof ActionTypes.SELECTED_PRODUCT; payload: product }


export const productRdeucer = (state: productState = initialState, action: Action) => {
    switch(action.type){
        case ActionTypes.SET_PRODUCTS:
            return {
                ...state, 
                products: action.payload
            } 

        case ActionTypes.SELECTED_PRODUCT:
            return {
                ...state, 
                selectedProduct: action.payload
            };
        default: 
            return state;   
    }
}