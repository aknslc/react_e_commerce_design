import styles from './cartcontent.module.scss'
import img from '../../assets/bershka.png'
import { RiDeleteBinLine } from 'react-icons/ri'
const CartContent = () => {
    return (
        <div className={styles.cartContent}>

            <div className="container">
                <h1>Cart</h1>
                <div className="row align-items-center">
                    <div className='col-lg-8'>
                        <div className={styles.leftContainer}>
                            <div className={styles.cartItems}>
                                <div className="d-flex align-items-center">
                                    <img src={img} alt="" />

                                    <h3>Product Title</h3>
                                </div>
                                <p>$ 15</p>
                                <div className={styles.quantity}>
                                    <button>-</button>
                                    <span>1</span>
                                    <button>+</button>
                                </div>
                                <RiDeleteBinLine size={20} style={{ color: "red" }} />

                            </div>
                            <div className={styles.cartItems}>
                                <div className="d-flex align-items-center">
                                    <img src={img} alt="" />

                                    <h3>Product Title</h3>
                                </div>
                                <p>$ 15</p>
                                <div className={styles.quantity}>
                                    <button>-</button>
                                    <span>1</span>
                                    <button>+</button>
                                </div>
                                <RiDeleteBinLine size={20} style={{ color: "red" }} />

                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className={styles.totalArea}>
                            <div className={styles.totalContent}>
                                <p>Total: $ 0</p>
                                <div>
                                    <button className='btn btn-success btn-lg'>Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CartContent