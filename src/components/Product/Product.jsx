import styles from './product.module.scss'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { useFavorite } from '../../context/FavoriteContext'
const Product = ({ product }) => {
    const {addToCart} = useCart();
    const {addToFavorite, favorite} = useFavorite();

    const checkFavorite = favorite.find(item => item.id === product.id);

    return (
        <div className={styles.productCard}>

            <Link to={`/products/${product.id}`} className={styles.productDetails}>
                <img src={product.image} alt={product.title} />

                <div className={styles.title}>
                    {product.title.substring(0, 18)}
                </div>
                <div className={styles.price}>
                    $ {product.price}
                </div>
            </Link>

            <div className={styles.buttons}>
                <AiOutlineHeart onClick={()=> addToFavorite(product)} size={25} 
                className={`${styles.buttonsItem} ${checkFavorite && styles.buttonsItemHeart} `} 
                />
                <AiOutlineShoppingCart onClick={()=>addToCart(product)} size={25} className={styles.buttonsItem} />
            </div>

        </div>
    )
}

export default Product