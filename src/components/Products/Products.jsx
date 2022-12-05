import styles from './products.module.scss'
import { featuredproducts } from '../../constants/index'
import Product from '../Product/Product'

const Products = () => {
    return (
        <section className={styles.products}>
            <div className={styles.sectionTitle}>
                Featured
            </div>
            <div className="row">
                {featuredproducts.map((product) => (
                    <div className="col-lg-3">
                        <Product product={product} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Products