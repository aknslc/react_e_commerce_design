import React, { createContext, useContext, useState, useEffect } from "react";

// confirm alert
import { confirmAlert } from 'react-confirm-alert';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);


    // confirm alert func
    const confirmAlertFunc = (product) => {
        
        confirmAlert({
            
            customUI: ({onClose}) => {
                return (
                    <div className='confirm-custom-ui'>
                        <h1>Are you sure?</h1>
                        <p>You want to delete this product?</p>
                        <button className="btn btn-outline-secondary btn-lg" onClick={onClose}>No</button>
                        <button className="btn btn-danger btn-lg mx-2"
                            onClick={() => {
                                removeItem(product)
                                onClose();
                            }}
                        >
                            Yes, Delete it!
                        </button>
                    </div>
                )
            }
        });
    };

    // add to cart
    const addToCart = (product, cb) => {
        const checkCart = cart.find(item => item._id === product._id);
        // Product already added
        if (checkCart) {
            alert("product already added")
        } else {
            setCart([...cart, {
                _id: product._id,
                amount: 1,
                title: product.title,
                price: product.price,
            }]);
            cb();
            setTotal((prev) => prev + product.price)
        }
    }

    const removeItem = (product) => {
        const checkCart = cart.find(item => item._id === product._id);
        setCart([...cart.filter(item => item._id !== product._id)])
        setTotal(prev => prev -= (checkCart.price * checkCart.amount))

    }

    const increase = (product) => {
        const checkCart = cart.find(item => item._id === product._id);
        checkCart.amount += 1
        setTotal(prev => prev += checkCart.price)
    }
    const decrease = (product) => {
        const checkCart = cart.find(item => item._id === product._id);
        if (checkCart.amount > 1) {
            checkCart.amount -= 1
            setTotal(prev => prev -= checkCart.price)
        } else {
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
        confirmAlertFunc
    };


    return <CartContext.Provider value={values}> {children}</CartContext.Provider>;

}



const useCart = () => useContext(CartContext)

export { CartProvider, useCart };