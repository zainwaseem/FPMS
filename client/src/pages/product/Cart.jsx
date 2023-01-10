import React, { useEffect } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from '../../features/products/cartSlice'
import './Cart.css'

const Cart = () => {
  const cart = useSelector((state) => state.cart)
  console.log(cart.cartItems)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTotals())
  }, [cart, dispatch])

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product))
  }
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product))
  }
  const handleClearCart = () => {
    dispatch(clearCart())
  }
  const placeOrder = () => {
    console.log(`ordered placed succuesfully`)
  }
  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is currently empty</p>
          <div className="start-shopping">
            <Link to="/products">
              <AiOutlineArrowLeft />
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">
            {cart.cartItems &&
              cart.cartItems?.map((cartItem) => (
                <div className="cart-item" key={cartItem._id}>
                  <div className="cart-product">
                    <img src={cartItem.img.secure_url} alt={cartItem.title} />
                    <div>
                      <h3>{cartItem.title}</h3>
                      <p>{cartItem.desc}</p>
                      <button onClick={() => handleRemoveFromCart(cartItem)}>
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="cart-product-price">${cartItem.price}</div>
                  <div className="cart-product-quantity">
                    <button
                      className="descreseincreaseButon"
                      onClick={() => handleDecreaseCart(cartItem)}
                    >
                      -
                    </button>
                    <div className="count">{cartItem.cartQuantity}</div>
                    <button
                      className="descreseincreaseButon"
                      onClick={() => handleAddToCart(cartItem)}
                    >
                      +
                    </button>
                  </div>
                  <div className="cart-product-total-price">
                    ${cartItem.price * cartItem.cartQuantity}
                  </div>
                </div>
              ))}
          </div>
          <div className="cart-summary">
            <button className="clear-btn" onClick={() => handleClearCart()}>
              Clear Cart
            </button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">${cart.cartTotalAmount}</span>
              </div>
              <p>Taxes and shipping calculated at checkout</p>
              <button onClick={placeOrder}>Order Now</button>
              <div className="continue-shopping mb-4">
                <Link to="/products">
                  <AiOutlineArrowLeft />
                  <span>Continue Adding</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
