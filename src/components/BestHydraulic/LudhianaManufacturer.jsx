import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import styles from './ludhiana-manufacturer.module.css';

export default function LudhianaManufacturer() {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const faqs = [
    {
      question: "Are you a manufacturer or trader in Ludhiana?",
      answer: "We are a manufacturer of hydraulic fittings components and supply to dealers and industrial buyers."
    },
    {
      question: "What products do you supply?",
      answer: "Hydraulic nuts, nipples, males, and caps (bulk supply + custom as required)."
    },
    {
      question: "Do you support bulk orders for dealers/OEMs?",
      answer: "Yes, we regularly support bulk and repeat supply with consistent quality."
    },
    {
      question: "Can you manufacture as per sample or drawing?",
      answer: "Yes, share your sample/drawing and required quantity for feasibility and quote."
    },
    {
      question: "Do you provide dispatch outside Ludhiana?",
      answer: "Yes, we dispatch across Punjab and other states based on order requirements."
    }
  ];

  const products = [
    {
      name: "Hydraulic Nuts",
      description: "Durable, accurate threading"
    },
    {
      name: "Hydraulic Nipples",
      description: "Leak-proof connections"
    },
    {
      name: "Hydraulic Males",
      description: "Precision-machined fittings"
    },
    {
      name: "Hydraulic Caps",
      description: "Port protection & sealing"
    }
  ];

  const applications = [
    "Construction & earthmoving machinery",
    "Hydraulic hose assemblies & crimping setups",
    "Agriculture machinery & tractors",
    "Industrial machines, presses, and power packs",
    "Material handling & heavy equipment",
    "Automotive & transport hydraulics"
  ];

  const serviceAreas = [
    "Focal Point",
    "Gill Road",
    "Jaspal Bangar",
    "Dhandari Kalan",
    "Sherpur",
    "Sahnewal",
    "Doraha",
    "Khanna",
    "Mandi Gobindgarh",
    "Chandigarh region (dispatch-based)"
  ];

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>Hydraulic Fittings Manufacturer in Ludhiana | Steel Craft India</title>
        <meta 
          name="description" 
          content="Steel Craft India is a hydraulic fittings manufacturer in Ludhiana. Hose end fittings, nuts, nipples, caps & custom orders. Fast dispatch & bulk supply." 
        />
        <meta name="keywords" content="hydraulic fittings manufacturer Ludhiana, hydraulic nuts Ludhiana, hydraulic nipples, hydraulic fittings Punjab, Steel Craft India" />
        <link rel="canonical" href="https://www.steelcraftsindia.in/hydraulic-fittings-manufacturer-ludhiana" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Hydraulic Fittings Manufacturer in Ludhiana | Steel Craft India" />
        <meta property="og:description" content="Steel Craft India is a hydraulic fittings manufacturer in Ludhiana. Hose end fittings, nuts, nipples, caps & custom orders. Fast dispatch & bulk supply." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.steelcraftsindia.in/hydraulic-fittings-manufacturer-ludhiana" />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Steel Craft India",
            "image": "https://www.steelcraftsindia.in/logo.jpeg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Ludhiana",
              "addressRegion": "Punjab",
              "addressCountry": "IN"
            },
            "telephone": "+919356854656",
            "email": "steelcraft80@gmail.com",
            "priceRange": "$$",
            "description": "Hydraulic fittings manufacturer in Ludhiana"
          })}
        </script>
      </Helmet>


      {/* Hero Section */}
      <section className={styles.ludhianaHero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Hydraulic Fittings Manufacturer in Ludhiana – Steel Craft India</h1>
          <p className={styles.heroIntro}>
            Steel Craft India is a trusted hydraulic fittings manufacturer in Ludhiana, supplying precision-engineered 
            fittings used in high-pressure hydraulic systems across industries. We manufacture and supply hydraulic nuts, 
            nipples, males, and caps with consistent quality, accurate threading, and reliable sealing performance for 
            OEMs, dealers, and industrial buyers.
          </p>

          {/* CTA Buttons */}
          <div className={styles.ctaButtons}>
            <a href="https://wa.me/919356854656" className={`${styles.ctaBtn} ${styles.ctaBtnPrimary}`} target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Get Quote on WhatsApp
            </a>
            <a href="tel:+919356854656" className={`${styles.ctaBtn} ${styles.ctaBtnPrimary}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Call for Bulk Rates
            </a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfKElyM_wrT461lyiOAt2eF0M6pgNxAAe-HktFdp73GHUvg0g/viewform?embedded=true" target='_blank' className={`${styles.ctaBtn} ${styles.ctaBtnPrimary}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              Request Catalogue
            </a>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>
          <h2 className={styles.sectionTitle}>Hydraulic Fittings We Manufacture in Ludhiana</h2>
          <p className={styles.sectionText}>
            We supply a complete range of hydraulic fitting components for hydraulic hose assemblies and hydraulic pipelines:
          </p>

          <div className={styles.productsGrid}>
            {products.map((product, index) => (
              <div key={index} className={styles.productCard}>
                <div className={styles.productName}>{product.name}</div>
                <div className={styles.productDescription}>{product.description}</div>
              </div>
            ))}
          </div>

          <div className={styles.additionalServices}>
            <p className={styles.servicesText}>
              <strong>Also available:</strong> bulk supply, repeat orders, dealer pricing, and custom manufacturing 
              as per sample/drawing.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>
          <h2 className={styles.sectionTitle}>Why Steel Craft India</h2>
          <ul className={styles.whyChooseList}>
            <li>Manufacturing-focused quality control for consistent batches</li>
            <li>Accurate threads & sealing surfaces to reduce leakage risk</li>
            <li>Bulk supply readiness for dealers & OEM buyers</li>
            <li>Fast dispatch support (as per stock & order quantity)</li>
            <li>Support for custom requirements based on your application</li>
          </ul>
        </div>
      </section>

      {/* Applications Section */}
      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>
          <h2 className={styles.sectionTitle}>Applications of Our Hydraulic Fittings</h2>
          <p className={styles.sectionText}>Our hydraulic components are used in:</p>
          <ul className={styles.applicationsList}>
            {applications.map((app, index) => (
              <li key={index}>{app}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>
          <h2 className={styles.sectionTitle}>Serving Ludhiana + Nearby Industrial Areas</h2>
          <p className={styles.sectionText}>We supply across Ludhiana and nearby industrial belts like:</p>
          <div className={styles.serviceAreasGrid}>
            {serviceAreas.map((area, index) => (
              <div key={index} className={styles.areaItem}>{area}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Quote Section */}
      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>
          <h2 className={styles.sectionTitle}>Get a Quote</h2>
          <div className={styles.quoteFormSection}>
            <div className={styles.formTitle}>Share your requirement and we'll respond with pricing and availability:</div>
            <ul className={styles.quoteRequirements}>
              <li>Product: Nuts / Nipples / Males / Caps</li>
              <li>Size/Thread details (or sample)</li>
              <li>Quantity (pcs)</li>
              <li>Delivery location</li>
            </ul>
            <div className={styles.ctaButtons}>
              <a href="tel:+919356854656" className={`${styles.ctaBtn} ${styles.ctaBtnSecondary}`}>
                Call Now
              </a>
              <a href="https://wa.me/919356854656" className={`${styles.ctaBtn} ${styles.ctaBtnSecondary}`} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
              <a href="mailto:steelcraft80@gmail.com" className={`${styles.ctaBtn} ${styles.ctaBtnSecondary}`}>
                Email Us
              </a>
            </div>
          </div>

          {/* FAQ Section */}
          <div className={styles.faqSection}>
            <h3 className={styles.faqTitle}>Frequently Asked Questions</h3>
            <div className={styles.faqList}>
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`${styles.faqItem} ${activeFAQ === index ? styles.active : ''}`}
                >
                  <div
                    className={styles.faqQuestion}
                    onClick={() => toggleFAQ(index)}
                  >
                    <h4 className={styles.questionText}>{faq.question}</h4>
                    <div className={styles.faqIcon}>
                      <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </div>
                  </div>
                  <div className={styles.faqAnswer}>
                    <p className={styles.answerText}>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Internal Links */}
          <div className={styles.internalLinks}>
            <div className={styles.linksTitle}>Learn More About Steel Craft India</div>
            <div className={styles.linksGrid}>
              <Link to="/about" className={styles.internalLink}>About Us</Link>
              <Link to="/industries/manufacturing" className={styles.internalLink}>Manufacturing Industry</Link>
              <Link to="/industries/automotive" className={styles.internalLink}>Automotive Industry</Link>
              <Link to="/contact" className={styles.internalLink}>Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className={styles.mapSection}>
        <div className={styles.mapContainer}>
          <h2 className={styles.mapTitle}>Find Us on Google Maps</h2>
          <iframe
            className={styles.mapFrame}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.642669927318!2d75.85912817542416!3d30.868677874518998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a83a05dcccb9f%3A0xab6c488f6112b51e!2sSteel%20crafts(India)%7C%7CHydraulic%20hose%20Supplier(Hose%20fittings)!5e0!3m2!1sen!2sin!4v1768815926038!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Steel Craft India Location"
          ></iframe>
        </div>
      </section>
    </>
  );
}