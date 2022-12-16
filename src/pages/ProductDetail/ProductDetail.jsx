import { useParams } from 'react-router-dom'
import { featuredproducts } from '../../constants'

// components
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import ProductDetailContent from '../../components/ProductDetailContent/ProductDetailContent'
import ProductComments from '../../components/ProductComments/ProductComments'
const ProductDetail = () => {
  const { id } = useParams()

  const product = featuredproducts.filter(item => item.id === id)[0];

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