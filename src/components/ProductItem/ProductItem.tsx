import { FC } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart/actions";
//Types
import { IProductItem } from "../../types"
//Styles
import "./ProductItem.scss"

const ProductItem: FC<IProductItem> = ({ product }) => {
    const count = product.price * 1;
    const dispatch = useDispatch()
    const addHandler = () => {
        dispatch(addToCart(product, count))
        console.log(product.id);
    }
    return (
        <div className="product">
            <img className="product__image" src={product.image} alt={product.title} />
            <div className="product__item">
                <h1 className="product__title">{product.title}</h1>
                <p className="product__text">{product.description}</p>
                <div className="product__price">${product.price}</div>
            </div>
            <button
                className="product__btn"
                onClick={addHandler}>Add to cart</button>
        </div>
    )
}

export default ProductItem