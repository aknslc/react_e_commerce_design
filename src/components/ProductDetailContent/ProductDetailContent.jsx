import { useCart } from '../../context/CartContext'
import styles from './productdetailcontent.module.scss'

const ProductDetailContent = ({ product }) => {
    const {addToCart} = useCart();
    return (
        <div className={styles.productDetailContainer}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className={styles.imageContainer}>
                            <img src={product.image} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className={styles.detailContainer}>
                            <h2 className={styles.title}>{product.title}</h2>
                            <p className={styles.description}>{product.description}</p>
                            <p className={styles.price}>Price: ${product.price}</p>
                            <button onClick={() => addToCart(product)} className={styles.addToCart}>ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailContent