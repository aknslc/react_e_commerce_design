import styles from './product.module.scss'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
const Product = ({ product }) => {

    return (
        <div className={styles.productCard}>

            <Link to={`/products/${product.id}`} className={styles.productDetails}>
                <img src={product.image} alt={product.title} />

                <div className={styles.title}>
                    {product.title.substring(0, 25)}
                </div>
                <div className={styles.price}>
                    $ {product.price}
                </div>
            </Link>

            <div className={styles.buttons}>
                <AiOutlineHeart size={25} className={styles.buttonsItem} />
                <AiOutlineShoppingCart size={25} className={styles.buttonsItem} />
            </div>

        </div>
    )
}

export default Product