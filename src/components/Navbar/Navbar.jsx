import DropDown from './DropDown'
import styles from './navbar.module.scss'

import { BiDownArrow } from 'react-icons/bi'

const Navbar = ({ openMenu }) => {

  return (
    <>
      {openMenu && (
        <nav>
          <ul className={styles.mainNav}>
            <li className={`${styles.mainNavItem} ${styles.dropdownLi}`}>
              <a className={styles.mainNavLink} href="#!">
                Computers
                <BiDownArrow size={13} />
              </a>
              <DropDown />
            </li>
            <li className={styles.mainNavItem}>
              <a className={styles.mainNavLink} href="#!">Electronics</a>
            </li>
            <li className={`${styles.mainNavItem} ${styles.dropdownLi}`}>
              <a className={styles.mainNavLink} href="#!">
                Smart Home
                <BiDownArrow size={13} />
              </a>
              <DropDown />
            </li>
            <li className={styles.mainNavItem}>
              <a className={styles.mainNavLink} href="#!">Arts & Crafts</a>
            </li>
            <li className={styles.mainNavItem}>
              <a className={styles.mainNavLink} href="#!">Automotive</a>
            </li>
            <li className={`${styles.mainNavItem} ${styles.dropdownLi}`}>
              <a className={styles.mainNavLink} href="#!">
                Baby
                <BiDownArrow size={13} />
              </a>
              <DropDown />
            </li>

          </ul>
        </nav>

      )}
    </>
  )
}

export default Navbar