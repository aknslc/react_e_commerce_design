import { useParams } from 'react-router-dom'

import useFetch from '../../hooks/useFetch'
// components
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import ProductDetailContent from '../../components/ProductDetailContent/ProductDetailContent'
import ProductComments from '../../components/ProductComments/ProductComments'
const ProductDetail = () => {
  
  const { id } = useParams()
  const {data, loading} = useFetch(`/products/${id}`);

  const product = data;

  return (
    <>
      <Header />
      <Navbar />
      <ProductDetailContent product={product} />
      <ProductComments/>
      <FeaturedProducts/>
      <Footer/>
 
    </>
  )
}

export default ProductDetail