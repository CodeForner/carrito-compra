import { createContext, useEffect, useState } from "react";

export const cartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [isCartVisible, setCartVisible] = useState(false);
    const [totalItems, setTotalItems] = useState(0);

    const addCart = (product) => {
        // Cada vez que se pulse el botón de add cart se ejecuta esta función.
        // Se recoge el id del producto y se compara a ver si ya está en el carrito.
        // Esto es así ya que estamos recorriendo el array cart.
        const productInCartIndex = cart.findIndex((item) => item.id === product.id);

        if (productInCartIndex >= 0) {
            // Si el producto ya está en el carrito, se actualiza su cantidad.
            // Creamos un nuevo carrito para no mutar el estado.
            const newCart = cart.map((item, index) =>
                index === productInCartIndex
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            setCart(newCart);
        } else {
            // Si no está en el carrito, añadimos al carrito existente: prevState el product y la cantidad.
            setCart((prevState) => [
                ...prevState,
                { ...product, quantity: 1 },
            ]);
        }
    };
    const decreaseQuantity = (product) => {
        setCart(prevState => {
            const productInCartIndex = prevState.findIndex((item) => item.id === product.id);
            if (productInCartIndex >= 0) {
                const item = prevState[productInCartIndex];
                if (item.quantity > 1) {
                    // Decrease quantity but keep item in cart
                    const newCart = prevState.map((item, index) =>
                        index === productInCartIndex
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    );
                    return newCart;
                } else {
                    // Remove item if quantity is 1 or less
                    return prevState.filter((item, index) => index !== productInCartIndex);
                }
            }
            return prevState;
        });
    };
    const cleanCart = () => {
        // Limpia el carrito, estableciendo su estado a un array vacío.
        setCart([]);
    };

    //Esta funcion lo que hace es usar filter
    //Este metodo nos permite tratar un array para luego devolver solo los elementos que cumplan una condicion
    //en este caso devuelve todos los elementos que sean distintos al producto, por lo que de cierta forma
    // lo estamos eliminando del carrito, ya que estamos definiendo el carrito como todos los elementos que había
    //menos el product.
    const removeFromCart =(product)=>{
        setCart(prevState =>prevState.filter((item)=> item.id!=product.id))
    }


    //Esto también es importante, devolver en value lo que queremos que los otros componentes utilicen.
 const toggleCartVisibility = () => {
        setCartVisible(prev => !prev);
    };

    useEffect(() => {
        const total = cart.reduce((acc, item) => acc + item.quantity, 0);
        setTotalItems(total);
      }, [cart]);

    return (
        <cartContext.Provider value={{ cart, addCart, cleanCart, removeFromCart, decreaseQuantity,isCartVisible, toggleCartVisibility, totalItems }}>
            {children}
        </cartContext.Provider>
    );
}
