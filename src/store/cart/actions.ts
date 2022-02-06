import { actionTypes } from "./types"
import { IProduct } from "../../types"

export const addToCart = (product: IProduct, count: number) => ({
    type: actionTypes.CART_ADD_ITEM,
    payload: { product, count },
})

export const removeFromCart = (productId: number) => ({
    type: actionTypes.CART_REMOVE_ITEM,
    payload: productId,
})





