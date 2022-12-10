import React, { createContext, useContext, useState, useEffect } from "react";


const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

 
    // add to cart
    const addToCart = (product, cb) => {
        const checkCart = cart.find(item => item.id === product.id);
        // Product already added
        if (checkCart) {
            alert("product already added")
        } else {
            setCart([...cart, {
                id: product.id,
                amount: 1,
                title: product.title,
                price: product.price,
                image: product.image
            }]);
            cb();
            setTotal((prev) => prev + product.price)
        }
    }

    const removeItem = (product, cb) => {
        const checkCart = cart.find(item => item.id === product.id);
        setCart([...cart.filter(item => item.id !== product.id)])
        setTotal(prev => prev -= (checkCart.price * checkCart.amount))

        cb()
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
        removeItem,
    };


    return <CartContext.Provider value={values}> {children}</CartContext.Provider>;

}



const useCart = () => useContext(CartContext)

export { CartProvider, useCart };