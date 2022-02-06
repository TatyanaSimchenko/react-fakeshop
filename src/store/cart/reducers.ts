import { ICartItem } from "../../types"
import { actionTypes } from "./types"
import { TypeActionCart } from "./types"

const initialstate: ICartItem[] = []

export const cartReducer = (state = initialstate, action: TypeActionCart) => {
    switch (action.type) {
        case actionTypes.CART_ADD_ITEM:
            {
                const cart = [...state]
                const { count, product } = action.payload

                const foundProduct = cart.find(item => item.id === product.id)

                if (foundProduct) {
                    foundProduct.count = count
                } else {
                    cart.push({
                        ...product,
                        count
                    })
                }
                return cart
            }
        case actionTypes.CART_REMOVE_ITEM:
            {
                return state.filter(item => item.id !== action.payload)
            }
        default:
            return state
    }
}

export default cartReducer