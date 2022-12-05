import styles from './product.module.scss'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
const Product = ({ product }) => {
    return (
        <div className={styles.productCard}>

            <div className={styles.productDetails}>
                <img src={product.image} alt={product.title} />

                <div className={styles.title}>
                    {product.title.substring(0, 25)}
                </div>
                <div className={styles.description}>
                    {product.description.substring(0, 30)}
                </div>
                <div className={styles.price}>
                    $ {product.price}
                </div>
            </div>

            <div className={styles.buttons}>
                <AiOutlineHeart size={25} className={styles.buttonsItem} />
                <AiOutlineShoppingCart size={25} className={styles.buttonsItem} />
            </div>

        </div>
    )
}

export default Product