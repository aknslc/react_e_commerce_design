import { useState } from 'react'

// components
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'

const Home = () => {
    const [openMenu, setOpenMenu] = useState(true);

    

    return (
        <>
            <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
            <Navbar openMenu={openMenu} />
        </>
    )
}

export default Home