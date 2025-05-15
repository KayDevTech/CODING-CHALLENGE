// ../constant/Actiontypes.ts
export const ActionTypes = {
    SET_PRODUCTS: "SET_PRODUCTS",
    SELECTED_PRODUCT: "SELECTED_PRODUCT",
    REMOVE_SELECTED_PRODUCT: "REMOVE_SELECTED_PRODUCT"
} as const;

// And add this:
export type ActionTypes = typeof ActionTypes[keyof typeof ActionTypes];
