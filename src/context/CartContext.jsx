import { createContext, useContext, useState, useEffect } from "react";


const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const addToCart = (product) => {
        const checkCart = cart.find(item => item.id === product.id);
        // Product already added
        if (checkCart) {
            // checkCart.amount += 1;
            // setCart([...cart.filter(item => item.id !== product.id), checkCart]);

            alert("product already added")
        } else {
            setCart([...cart, {
                id: product.id,
                amount: 1,
                title: product.title,
                price: product.price,
                image: product.image
            }]);

            setTotal((prev) => prev + product.price)

        }


    }


    const removeItem = (product) => {
        const checkCart = cart.find(item => item.id === product.id);
        setCart([...cart.filter(item => item.id !== product.id)])
        setTotal(prev => prev -= (checkCart.price * checkCart.amount))
    }

    const increase = (product) => {
        const checkCart = cart.find(item => item.id === product.id);
        checkCart.amount += 1
        setTotal(prev => prev += checkCart.price)
    }
    const decrease = (product) => {
        const checkCart = cart.find(item => item.id === product.id);
        if (checkCart.amount > 1) {
            checkCart.amount -= 1
            setTotal(prev => prev -= checkCart.price)
        } else {
            removeItem(product);
        }
    }


    useEffect(() => {
        console.log(cart);
    }, [cart])

    const values = {
        cart,
        setCart,
        addToCart,
        total,
        setTotal,
        increase,
        decrease,
        removeItem
    };


    return <CartContext.Provider value={values}> {children}</CartContext.Provider>;

}



const useCart = () => useContext(CartContext)

export { CartProvider, useCart };