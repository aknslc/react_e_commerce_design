import styles from './products.module.scss'
import { featuredproducts } from '../../constants/index'
import Product from '../Product/Product'

const Products = () => {
    return (
        <section className={styles.products}>
            <div className="container">
                <div className={styles.sectionTitle}>
                    Featured
                </div>
                <div className="row">
                    {featuredproducts.map((product) => (
                        <div key={product.id} className="col-lg-3 col-md-6 col-sm-12">
                            <Product product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products