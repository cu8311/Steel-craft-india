import React from 'react'
import Hero from '../Hero/Hero'
import ProductsSection from '../Product/ProductSection'
import Slider from '../Slider/Slider'
import Posters from '../Background/Posters'
import MiniAbout from '../About/MiniAbout'

const Home = () => {
  return (
    <main>
        <Hero />
        <Slider />
        <MiniAbout />
        <ProductsSection />
        <Posters />
    </main>
  )
}

export default Home