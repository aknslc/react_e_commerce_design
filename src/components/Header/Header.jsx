import styles from './header.module.scss'
import { HiOutlineUser } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import MobileMenu from '../MobileMenu/MobileMenu'
import { useCart } from '../../context/CartContext'
const Header = () => {

    const { cart } = useCart();


    return (
        <header>
            <div className="container">
                <div className={styles.headerContent}>
                    <MobileMenu />
                    <Link to="/" className={styles.logo}>
                        <span>LOGO</span>
                    </Link>
                    <div className={styles.accountNavigationContainer}>
                        <div className={styles.accountItem}>
                            <Link to="/login">
                                <HiOutlineUser size={18} />
                            </Link>
                            <Link to="/login" className={`${styles.accountItemDetail} ${styles.loginContainer}`}>
                                Login
                            </Link>
                        </div>
                        <div className={styles.accountItem}>
                            <Link to="/favorites" className='accountItemIcon'>
                                <AiOutlineHeart size={18} />
                            </Link>
                            <Link to="/favorites" className={styles.accountItemDetail}>
                                Favorites
                            </Link>
                        </div>
                        <div className={styles.accountItem}>
                            <Link to="/cart">
                                <AiOutlineShoppingCart size={18} />
                            </Link>
                            <Link to="/cart" className={styles.accountItemDetail}>
                                Cart({cart.length})
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header