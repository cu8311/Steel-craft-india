import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './components/About/AboutUs'
import CertificatesSection from './components/Certificates/CertificatesSection'
import Home from './components/Home/Home'
import ManufacturingProcess from './components/Manufacturing/ManufacturingProcess'
import BuyerInformation from './components/Buyer/BuyerInformation'
import ScrollToTop from './components/hooks/ScrollToTop'
import RequestQuote from './components/Request/RequestQuote'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <main>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/certificates" element={<CertificatesSection />} />
        <Route path="/manufacturing" element={<ManufacturingProcess />} />
        <Route path="/buyer" element={<BuyerInformation />} />
        <Route path="/contact" element={<RequestQuote />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App