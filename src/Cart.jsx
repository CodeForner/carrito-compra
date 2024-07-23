import { useContext } from "react";
import { cartContext } from "./cartContext"; // Correct import path if needed

export const Cart = () => {
    const { cart, addCart,cleanCart, removeFromCart, decreaseQuantity, toggleCartVisibility } = useContext(cartContext);

    //A diferencia de .map or forEach, el método reduce permite devolver un único valor a partir de leer un array.
    //le proporcionamos la variable que queremos acumular y como segundo parametro el valor inicial del acumulador: 0
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
    
    return (
        <div className="list-page">
            <strong style={{fontSize: "xx-large"}}>
                Total cart: {total}
        </strong>
        <button className="cart-item-delete" onClick={cleanCart}>Vaciar carrito</button>
            <section className="product-list">
                {cart.map((item) => (
                    <ul key={item.id}>
                        <li>
                            
                            <img src={item.image} alt={item.title} />
                            <div>
                                <span>{item.title}</span>
                            </div>
                            <strong>{item.price} $</strong>
                            <div >
                            <strong>Total: {(item.price *item.quantity).toFixed(2)}</strong>
                                <div style={{display:"flex" , justifyContent:"space-between"}}>
                                <button onClick={() => decreaseQuantity(item)}>-</button>
                                <p> {item.quantity}</p>
                                <button onClick={() => addCart(item)}>+</button>
                                </div>
                                
                            </div>
                            <button onClick={() => removeFromCart(item)}>Eliminate</button>
                            
                        </li>
                    </ul>
                ))}
                
            </section>
            <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
            
            <br />
      <div className="continue_shopping_btn">
        <button className="get-started-button1" onClick={toggleCartVisibility}>Continue Shopping</button>
        <br />
        
        <button className="get-started-button1">Checkout</button>
      </div>
    </div>
       
    );
};
