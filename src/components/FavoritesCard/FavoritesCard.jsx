import styles from './favoritescard.module.scss'
import { AiOutlineHeart } from 'react-icons/ai'
import { useFavorite } from '../../context/FavoriteContext'

const FavoritesCard = ({ product }) => {
    const { favorite, addToFavorite } = useFavorite();
    const checkFavorite = favorite.find(item => item.id === product.id);



    return (
        <div className={styles.favoritesItem}>
            <img src={product.image} className="w-full" alt="" />
            <h2>{product.title.substring(0,10)}</h2>
            <p>{product.description}</p>
            <p>$ {product.price}</p>

            <div className={styles.heartIconContainer}>
                <AiOutlineHeart onClick={()=> addToFavorite(product)} size={25} className={checkFavorite && styles.heartIcon} />
            </div>
        </div>


    )
}

export default FavoritesCard