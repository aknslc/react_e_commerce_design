import styles from './footer.module.scss'
import { SlSocialFacebook, SlSocialInstagram, SlSocialLinkedin } from 'react-icons/sl'
import logo from '../../assets/logo.webp'
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className={styles.footerItem}>
                            <div className={styles.logo}>
                                <img src={logo} alt="" />
                            </div>
                            <h5 className={styles.footerContentTitle}>Quick Links</h5>
                            <div className={styles.footerContentLink}>
                                <a href="#!">Gift Cards</a>
                            </div>
                            <div className={styles.footerContentLink}>
                                <a href="#!">Privacy Policy</a>
                            </div>
                            <div className={styles.footerContentLink}>
                                <a href="#!">Terms of Service</a>
                            </div>
                            <div className={styles.footerContentLink}>
                                <a href="#!">Contact Us</a>
                            </div>
                            <div className={styles.footerContentLink}>
                                <a href="#!">FAQs</a>
                            </div>
                            <div className={styles.footerContentLink}>
                                <a href="#!">Shipping + Returns</a>
                            </div>
                            <div className={styles.footerContentLink}>
                                <a href="#!">Hudson Blake</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className={styles.footerItem}>
                            <h5 className={styles.footerContentTitle}>About Us</h5>
                            <div className={styles.footerContentLink}>
                                <a href="#!">Our Story + Mission</a>
                            </div>
                            <div className={styles.footerContentLink}>
                                <a href="#!">Locations</a>
                            </div>
                            <div className={styles.footerContentLink}>
                                <a href="#!">Collaborations</a>
                            </div>
                            <div className={styles.footerContentLink}>
                                <a href="#!">Careers</a>
                            </div>
                            <div className={styles.footerContentLink}>
                                <a href="#!">Blog</a>
                            </div>
                            <div className={styles.footerContentLink}>
                                <a href="#!">Interns</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className={styles.footerItem}>
                            <h5 className={styles.footerContentTitle}>Social Media</h5>
                            <div className={styles.socialMediaIcons}>
                                <SlSocialFacebook className={styles.socialMediaIcon} />
                                <SlSocialInstagram className={styles.socialMediaIcon} />
                                <SlSocialLinkedin className={styles.socialMediaIcon} />
                            </div>
                        </div>
                    </div>
                </div>


                <p className={styles.footerDesc}>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
            </div>
        </footer>
    )
}

export default Footer