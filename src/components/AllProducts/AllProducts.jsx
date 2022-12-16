import Product from '../Product/Product'
import styles from './allproducts.module.scss'
import { featuredproducts } from '../../constants/index'
const AllProducts = () => {
    return (
        <div className={styles.allProducts}>
            <div className="container">
                <div className="row">
                    {featuredproducts.map((product) => (
                        <div key={product.id} className="col-lg-3">
                            <Product product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AllProducts