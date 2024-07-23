import { useContext, useState } from "react";
import { cartContext } from "../context/cartContext"; // Correct import path if needed

export const Cart = () => {
    const { cart, addCart, cleanCart, removeFromCart, decreaseQuantity, toggleCartVisibility } = useContext(cartContext);
    const [isCheckedOut, setIsCheckedOut] = useState(false);

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

    const handleCheckout = () => {
        setIsCheckedOut(true);
        cleanCart(); // Clear the cart after checkout
    };

    return (
        <div className="list-page">
            {isCheckedOut ? (
                <div className="checkout-message">
                    <h1>See you soon!</h1>
                </div>
            ) : (
                <>
                    <strong style={{ fontSize: "xx-large" }}>
                        Total cart: {total}
                    </strong>
                    <button className="cart-item-delete" onClick={cleanCart}>Empty Cart</button>
                    <section className="product-list">
                        {cart.map((item) => (
                            <ul key={item.id}>
                                <li>
                                    <img src={item.image} alt={item.title} />
                                    <div>
                                        <span>{item.title}</span>
                                    </div>
                                    <strong>{item.price} $</strong>
                                    <div>
                                        <strong>Total: {(item.price * item.quantity).toFixed(2)}</strong>
                                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5px" }}>
                                            <button style={{ padding: "5px", background: "#ef2a75" }} onClick={() => decreaseQuantity(item)}>-</button>
                                            <p style={{ color: "black", fontSize: "medium" }}>{item.quantity}</p>
                                            <button style={{ padding: "5px", background: "#ef2a75" }} onClick={() => addCart(item)}>+</button>
                                        </div>
                                    </div>
                                    <button style={{ color: "white", background: "#f32c2c", padding: "5px" }} onClick={() => removeFromCart(item)}>Remove</button>
                                </li>
                            </ul>
                        ))}
                    </section>
                    <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
                    <br />
                    <div className="continue_shopping_btn">
                        <button className="get-started-button1" onClick={toggleCartVisibility}>Continue Shopping</button>
                        <br />
                        <button className="get-started-button1" onClick={handleCheckout}>Checkout</button>
                    </div>
                </>
            )}
        </div>
    );
};
