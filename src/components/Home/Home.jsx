import React from 'react'
import Hero from '../Hero/Hero'
import ProductsSection from '../Product/ProductSection'
import IndustriesSection from '../Industries/IndustriesSection'
import Slider from '../Slider/Slider'

const Home = () => {
  return (
    <main>
        <Hero />
        <Slider />
        <ProductsSection />
        <IndustriesSection />
    </main>
  )
}

export default Home