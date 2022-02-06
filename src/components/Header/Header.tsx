import { FC } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/cart/actions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

//Styles
import "./Header.scss"


const Header: FC = () => {
    const [isShowCart, setIsShowCart] = useState(false)
    const [count, setCount] = useState(0);

    const cart = useTypedSelector(state => state.cart)
    const Total = cart.reduce((acc, item) => acc + count * item.price, 0);
    const dispatch = useDispatch()

    const removeHandler = (id: number) => {
        dispatch(removeFromCart(id))
    }

    return (
        <div className="header">
            <div>
                <h1 className="header__logo">fakeshop</h1>
            </div>
            <div className="cart">
                <button className="cart__btn"
                    onClick={() => setIsShowCart(!isShowCart)}>
                    <i className="fas fa-cart-plus"></i>
                    <div className="cart__counter">
                        <span className="cart__counter-score">{cart.length}</span>
                    </div>
                </button>
                <div className="cart__box" style={isShowCart ? { display: 'block' } : { display: 'none' }}>
                    <h1 className="cart__title" >Your shopping cart</h1>
                    {cart.map(item => (
                        <div className="cart__item" key={item.id}>
                            <img className="cart__img" src={item.image} alt={item.title} />
                            <div >
                                <h1 className="cart__title">{item.title}</h1>
                                <div className="cart__price">
                                    <p>${item.price}</p>
                                    <p>Total: ${(count * item.price).toFixed(2)}</p>
                                </div>

                                <div className="cart__count">
                                    <button className="cart__count-btn"
                                        onClick={() => count > 1 && setCount(count - 1)}>-</button>
                                    <input className="cart__input" type="number"

                                        onChange={e => setCount(+e.target.value)}
                                        value={count}
                                    />
                                    <button className="cart__count-btn"
                                        onClick={() => count < 20 && setCount(count + 1)}>+</button>
                                </div>
                            </div>
                            <button className="product__btn" onClick={() => removeHandler(item.id)}>Delete</button>
                        </div>
                    ))}
                    <p className="cart__total">Total: ${Total.toFixed(2)}</p>
                    <button className="cart__button">Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Header