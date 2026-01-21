import React from 'react'
import Hero from '../Hero/Hero'
import ProductsSection from '../Product/ProductSection'
import IndustriesSection from '../Industries/IndustriesSection'
import Slider from '../Slider/Slider'
import Background from '../Background/Background'

const Home = () => {
  return (
    <main>
        <Hero />
        <Slider />
        <ProductsSection />
        <Background />
    </main>
  )
}

export default Home