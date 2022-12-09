import styles from './cartcontent.module.scss'
import { RiDeleteBinLine } from 'react-icons/ri'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'
const CartContent = () => {
    const { cart, total, increase, decrease,removeItem } = useCart();
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
                                                <div className="d-flex align-items-center w-full">
                                                    <img src={product.image} alt="" />

                                                    <div className={styles.productInfo}>
                                                        <h3>{product.title.substring(0, 15)}</h3>
                                                        <p>${product.price}</p>
                                                    </div>

                                                </div>


                                                <div className={styles.quantity}>
                                                    <button onClick={()=> decrease(product)}>-</button>
                                                    <span>{product.amount}</span>
                                                    <button onClick={()=> increase(product)}>+</button>
                                                </div>
                                                <RiDeleteBinLine onClick={()=> removeItem(product)} size={20} style={{ color: "red", cursor:"pointer" }} />
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
                    </div>
                </div>
            </div>

        </div >
    )
}

export default CartContent