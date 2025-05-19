import { ActionTypes } from "../constant/Actiontypes"
import type { product } from "../../Types"

export const setProducts = (products: product[]) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProduct = (product: product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}
