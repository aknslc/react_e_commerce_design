import React from 'react'
import styles from './cartcontent.module.scss'
import { RiDeleteBinLine } from 'react-icons/ri'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'


import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const CartContent = () => {
    const { cart, total, increase, decrease, removeItem } = useCart();

    // snackbar
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div className={styles.cartContent}>

            <div className="container">
                <h1>Cart</h1>
                <div className="row align-items-center">
                    <div className='col-lg-8'>
                        <div className={styles.leftContainer}>
                            {cart.length === 0 ?
                                (
                                    <div className={styles.emptyCartContainer} >
                                        <p>Cart is Empty</p>
                                        <Link className='btn btn-success text-white my-5' to="/">Go Products</Link>
                                    </div>
                                )
                                :
                                (
                                    <>
                                        {cart.map(product => (
                                            <div key={product.id} className={styles.cartItems}>
                                                <div className="d-flex align-items-center" style={{width:"250px"}}>
                                                    <div>
                                                        <img src={product.image} alt="" />
                                                    </div>

                                                    <div className={styles.productInfo}>
                                                        <h3>{product.title}</h3>
                                                        <p>${product.price}</p>
                                                    </div>

                                                </div>


                                                <div className={styles.quantity}>
                                                    <div>
                                                        <button onClick={() => decrease(product)}>-</button>
                                                    </div>
                                                    <div>
                                                        <span>{product.amount}</span>
                                                    </div>
                                                    <div>
                                                        <button onClick={() => increase(product)}>+</button>
                                                    </div>
                                                </div>
                                                <RiDeleteBinLine onClick={() => removeItem(product, () => handleClick())} size={20} style={{ color: "red", cursor: "pointer" }} />
                                            </div>
                                        ))}
                                    </>
                                )}

                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className={styles.totalArea}>
                            <div className={styles.totalContent}>
                                <p>Total: $ {total}</p>
                                <div>
                                    <button className='btn btn-success btn-lg'>Order</button>
                                </div>
                            </div>
                        </div>

                        <Stack spacing={2} sx={{ width: '100%' }}>
                            <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
                                <Alert onClose={handleClose} severity="error" sx={{ width: '100%', fontSize: "15px" }}>
                                    Removed Item!
                                </Alert>
                            </Snackbar>
                        </Stack>
                    </div>
                </div>
            </div>







        </div >
    )
}

export default CartContent