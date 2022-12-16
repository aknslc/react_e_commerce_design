import styles from './products.module.scss'
import { featuredproducts } from '../../constants/index'
import Product from '../Product/Product'
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
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

                <div className='text-center'>
                    <Link to={"/products"} className={styles.allProductsBtn}>All Products</Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts