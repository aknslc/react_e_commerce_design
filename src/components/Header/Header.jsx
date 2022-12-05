import styles from './header.module.scss'
import { HiOutlineUser } from 'react-icons/hi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import logo from '../../assets/logo.webp'
import MobileMenu from '../MobileMenu/MobileMenu'
const Header = () => {


    return (
        <header>
            <div className="container">
                <div className={styles.headerContent}>
                    <MobileMenu />
                    <div className={styles.logo}>
                        <img src={logo} alt="logo" />
                    </div>

                    <div className={styles.accountNavigationContainer}>
                        <div className={styles.accountItem}>
                            <div>
                                <HiOutlineUser size={18} />
                            </div>
                            <div className={styles.accountItemDetail}>
                                Login
                            </div>

                        </div>
                        <div className={styles.accountItem}>
                            <div className='accountItemIcon'>
                                <AiOutlineHeart size={18} />
                            </div>
                            <div className={styles.accountItemDetail}>
                                Wishlist
                            </div>
                        </div>
                        <div className={styles.accountItem}>
                            <div>
                                <AiOutlineShoppingCart size={18} />
                            </div>
                            <div className={styles.accountItemDetail}>
                                Cart
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header