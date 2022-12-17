import { useEffect } from 'react'
import Product from '../Product/Product'
import styles from './allproducts.module.scss'
import useFetch from '../../hooks/useFetch'

const AllProducts = () => {

    const {data, loading, error} = useFetch('/products');

    return (
        <div className={styles.allProducts}>
            <div className="container">
                <div className="row">
                    {data.map((product) => (
                        <div key={product._id} className="col-lg-3 col-md-6 col-sm-12">
                            <Product product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AllProducts