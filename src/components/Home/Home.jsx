import React from 'react'
import Hero from '../Hero/Hero'
import ProductsSection from '../Product/ProductSection'
import Slider from '../Slider/Slider'
import Posters from '../Background/Posters'

const Home = () => {
  return (
    <main>
        <Hero />
        <Slider />
        <ProductsSection />
        <Posters />
    </main>
  )
}

export default Home