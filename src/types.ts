import { Dispatch, SetStateAction } from "react";

export interface ICartItem {
    id: number
    title: string
    image: string
    price: number
    count: number
}

export interface IProduct {
    id: number
    title: string
    description: string
    image: string
    price: number
}
export interface IProductItem {
    product: IProduct
}

export type TypeSetState<T> = Dispatch<SetStateAction<T>>