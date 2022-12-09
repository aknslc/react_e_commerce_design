import styles from './header.module.scss'
import { HiOutlineUser } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import logo from '../../assets/logo.webp'
import MobileMenu from '../MobileMenu/MobileMenu'
const Header = () => {

    return (
        <header>
            <div className="container">
                <div className={styles.headerContent}>
                    <MobileMenu />
                    <Link to="/" className={styles.logo}>
                        <img src={logo} alt="logo" />
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
                                Cart(0)
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header