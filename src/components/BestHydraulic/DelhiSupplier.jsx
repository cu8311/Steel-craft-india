import React from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './delhi-supplier.module.css';
import { Link } from 'react-router-dom';

export default function DelhiSupplier() {
  const products = [
    "Hydraulic Hose Nuts",
    "Hydraulic Nipples",
    "Hydraulic Male Fittings",
    "Hydraulic Caps",
    "Custom hydraulic fittings (on request)"
  ];

  const whyChoose = [
    "Supplying to prominent dealers across Delhi",
    "DIN & OEM-grade hydraulic fittings",
    "Strong manufacturing quality control",
    "Suitable for high-pressure hydraulic applications",
    "Trusted by traders and industrial buyers",
    "Smooth logistics support for Delhi NCR"
  ];

  const benefits = [
    {
      title: "Consistent Quality",
      description: "Every batch meets our manufacturing standards"
    },
    {
      title: "Bulk Supply Capability",
      description: "Ready to support dealer and OEM requirements"
    },
    {
      title: "Competitive Pricing",
      description: "Fair pricing for long-term partnerships"
    },
    {
      title: "Reliable Dispatch",
      description: "Timely delivery across Delhi NCR region"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Hydraulic Hose Fittings Supplier in Delhi | SCI – Trusted Dealer Network</title>
        <meta 
          name="description" 
          content="SCI is a leading hydraulic hose fittings supplier in Delhi, supplying to prominent dealers across the region. Contact us for DIN, OEM hydraulic fittings with assured quality." 
        />
      </Helmet>


      {/* Hero Section */}
      <section className={styles.delhiHero}>
        <div className={styles.heroContent}>
          <div className={styles.heroMain}>
            <h1 className={styles.heroTitle}>Hydraulic Hose Fittings Supplier in Delhi</h1>

            <p className={styles.heroIntro}>
              <strong>Steel Craft India (SCI)</strong> supplies premium hydraulic fittings to Delhi's leading dealers and industrial buyers.
              Our DIN & OEM-grade nuts, nipples, caps, and male fittings serve construction machinery, agricultural equipment,
              heavy vehicles, and industrial hydraulics across Delhi NCR.
            </p>

            <div className={styles.heroGrid}>
              <div className={styles.heroBenefits}>
                <h3 className={styles.heroBenefitsTitle}>Why Choose SCI in Delhi?</h3>
                <ul className={styles.heroBenefitsList}>
                  <li>✓ Consistent quality standards</li>
                  <li>✓ Bulk supply capability</li>
                  <li>✓ Competitive pricing</li>
                  <li>✓ Reliable dispatch</li>
                </ul>
              </div>

              <div className={styles.heroCTA}>
                <p className={styles.heroCTAText}>
                  Already supplying established dealers across Delhi.{" "}
                  <Link to={"/contact"} className={styles.heroLink}>Contact us today</Link> for hydraulic fittings that deliver quality and performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>
          <h2 className={styles.sectionTitle}>Why Choose SCI for Hydraulic Hose Fittings in Delhi?</h2>

          <div className={styles.whyChooseGrid}>
            {whyChoose.map((item, index) => (
              <div key={index} className={styles.whyChooseItem}>
                <div className={styles.whyChooseText}>{item}</div>
              </div>
            ))}
          </div>

          <div className={styles.dealerNetwork}>
            <h3 className={styles.dealerTitle}>Expanding Dealer Network in Delhi</h3>
            <p className={styles.dealerText}>
              We are actively expanding our dealer network across Delhi NCR. If you are an established dealer
              or distributor looking for a <strong>reliable hydraulic fittings manufacturer</strong>, contact SCI
              for partnership opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>
          <h2 className={styles.sectionTitle}>Products Supplied in Delhi</h2>

          <div className={styles.productsList}>
            {products.map((product, index) => (
              <div key={index} className={styles.productItem}>
                <div className={styles.productName}>{product}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>
          <h2 className={styles.sectionTitle}>What We Offer Dealers & Buyers</h2>

          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitCard}>
                <div className={styles.benefitTitle}>{benefit.title}</div>
                <div className={styles.benefitDescription}>{benefit.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Looking for Hydraulic Hose Fittings in Delhi?</h2>
          <p className={styles.ctaText}>
            Contact SCI now to get pricing, availability, and dealership opportunities in Delhi.
          </p>

          <div className={styles.ctaButtons}>
            <a href="tel:+919356854656" className={styles.ctaButton}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Call Now
            </a>
            <a href="https://wa.me/919356854656" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </a>
            <a href="mailto:steelcraft80@gmail.com" className={`${styles.ctaButton} ${styles.ctaButtonSecondary}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              Email Us
            </a>
          </div>

          <div className={styles.contactInfo}>
            <div className={styles.contactGrid}>
              <div className={styles.contactItem}>
                <div className={styles.contactLabel}>Phone</div>
                <div className={styles.contactValue}>
                  <a href="tel:+919356854656">+91 9356854656</a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactLabel}>Email</div>
                <div className={styles.contactValue}>
                  <a href="mailto:steelcraft80@gmail.com">steelcraft80@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}