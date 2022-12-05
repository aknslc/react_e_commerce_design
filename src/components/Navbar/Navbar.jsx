import DropDown from './DropDown'
import styles from './navbar.module.scss'

import { RiArrowDownSLine } from 'react-icons/ri'

const Navbar = () => {

  return (
    <>

      <nav>
        <div className="container">
          <ul className={styles.mainNav}>
            <li className={`${styles.mainNavItem} ${styles.dropdownLi}`}>
              <a className={styles.mainNavLink} href="#!">
                Computers
                <RiArrowDownSLine size={13} />
              </a>
              <DropDown />
            </li>
            <li className={styles.mainNavItem}>
              <a className={styles.mainNavLink} href="#!">Electronics</a>
            </li>
            <li className={`${styles.mainNavItem} ${styles.dropdownLi}`}>
              <a className={styles.mainNavLink} href="#!">
                Smart Home
                <RiArrowDownSLine size={13} />
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
                <RiArrowDownSLine size={13} />
              </a>
              <DropDown />
            </li>

          </ul>
        </div>
      </nav>


    </>
  )
}

export default Navbar