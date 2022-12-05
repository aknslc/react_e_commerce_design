import styles from './header.module.scss'
import { HiOutlineUser } from 'react-icons/hi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'

const Header = ({ openMenu, setOpenMenu }) => {

    const handleMenuIcon = (e) => {
        e.preventDefault();
        setOpenMenu(!openMenu)
    }
    return (
        <header>
            <div className={styles.logo}>
                <a href="#!">LOGO</a>
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

                <div className={styles.accountItem}>
                    <GiHamburgerMenu onClick={handleMenuIcon} className={styles.hamburgerIcon} size={25} />

                </div>
            </div>
        </header>
    )
}

export default Header