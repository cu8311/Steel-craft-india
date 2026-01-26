import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './components/About/AboutUs'
import CertificatesSection from './components/Certificates/CertificatesSection'
import Home from './components/Home/Home'
import ManufacturingProcess from './components/Manufacturing/ManufacturingProcess'
import BuyerInformation from './components/Buyer/BuyerInformation'
import ScrollToTop from './components/hooks/ScrollToTop'
import Footer from './components/Footer/Footer'
import IndustriesPage from './components/Industries/IndustriesPage'
import SubIndustriesPage from './components/Industries/SubIndustiresPage'
import NotFoundPage from './components/NotFound/NotFoundPAge'
import ContactUsPage from './components/Request/ContactUsPage'

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
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/industries/:id" element={<SubIndustriesPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App