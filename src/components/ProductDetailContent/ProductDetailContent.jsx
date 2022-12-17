import React from 'react';
import { useCart } from '../../context/CartContext'
import styles from './productdetailcontent.module.scss'
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const ProductDetailContent = ({ product }) => {
    const { addToCart } = useCart();

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
        <div className={styles.productDetailContainer}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className={styles.imageContainer}>
                            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className={styles.detailContainer}>
                            <h2 className={styles.title}>{product.title}</h2>
                            <p className={styles.description}>{product.description}</p>
                            <p className={styles.price}>Price: ${product.price}</p>
                            <button onClick={() => addToCart(product, ()=>handleClick())} className={styles.addToCart}>ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>

            <Stack spacing={2} sx={{ width: '100%' }}>

                <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%', fontSize: "15px" }}>
                        Product successfully added!
                    </Alert>
                </Snackbar>
            </Stack>
        </div>
    )
}

export default ProductDetailContent