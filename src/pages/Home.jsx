import { useState } from 'react'

// components
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Brands from '../components/Brands/Brands';
import Products from '../components/Products/Products';
import Promo from '../components/Promo/Promo';


const Home = () => {
    const [openMenu, setOpenMenu] = useState(true);

    

    return (
        <>
            <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
            <Navbar openMenu={openMenu} />
            <Brands/>
            <Products/>
            <Promo/>
        </>
    )
}

export default Home