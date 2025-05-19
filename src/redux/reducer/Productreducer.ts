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
    | { type: typeof ActionTypes.REMOVE_SELECTED_PRODUCT }


export const productRdeucer = (state: productState = initialState, action: Action) => {
    switch(action.type){
        case ActionTypes.SET_PRODUCTS:
            return {
                ...state, 
                products: action.payload
            }
        default: 
            return state;   
    }
}

export const selectedProductReducer = (state: productState = initialState, action: Action) => {
    switch(action.type){
        case ActionTypes.SELECTED_PRODUCT:
            return{
                ...state,
                ...action.payload
            }
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
                return {}
            default:
                return state;
    }
} 

