import React from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './india-manufacturer.module.css';
import { Link } from 'react-router-dom';

export default function IndiaManufacturer() {
  return (
    <>
      <Helmet>
        <title>Best Hydraulic Hose Manufacturer in India | Steel Craft India</title>
        <meta 
          name="description" 
          content="Steel Craft India is among the best hydraulic hose manufacturers in India, delivering high-pressure hydraulic hoses and fittings for agriculture, construction & industry." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className={styles.manufacturerHero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Best Hydraulic Hose Manufacturer in India</h1>
          <p className={styles.heroDescription}>
            Steel Craft India is recognized as one of the best hydraulic hose manufacturers in India,
            offering reliable, high-performance hydraulic hose solutions for demanding industrial applications.
            Our products are designed to handle extreme pressure, temperature variations, and tough operating conditions.
          </p>
          <p className={styles.heroSubdescription}>
            With a focus on quality, consistency, and long-term performance, we serve OEMs, distributors,
            and industrial buyers across India.
          </p>
        </div>
      </section>

      {/* What Makes Us Best */}
      <section className={styles.contentSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>What Makes Steel Craft India One of the Best Hydraulic Hose Manufacturers?</h2>
          <p className={styles.sectionDescription}>
            Being the best hydraulic hose manufacturer in India is not about volume alone — it's about <strong>reliability,
            precision, and performance</strong>. At Steel Craft India, we follow a manufacturing-first approach backed by
            strict quality control.
          </p>
          <p className={styles.sectionDescription}><strong>Key strengths include:</strong></p>
          <ul className={styles.strengthsList}>
            <li>High-pressure hydraulic hose compatibility</li>
            <li>Precision manufacturing standards</li>
            <li>Long service life under continuous operation</li>
            <li>Consistent quality across batches</li>
          </ul>
          <p className={styles.sectionDescription}>
            Our hoses and fittings are trusted in critical hydraulic systems where failure is not an option.
          </p>
        </div>
      </section>

      {/* Built for Indian Conditions */}
      <section className={styles.contentSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Hydraulic Hoses Built for Indian Industrial Conditions</h2>
          <p className={styles.sectionDescription}>
            Indian operating environments demand hydraulic hoses that can withstand:
          </p>
          <ul className={styles.conditionsList}>
            <li>Heavy loads</li>
            <li>Dust and moisture</li>
            <li>Continuous vibration</li>
            <li>High working pressure</li>
          </ul>
          <p className={styles.sectionDescription}>
            Our hydraulic hoses are engineered to perform reliably in agriculture machinery, construction equipment,
            and industrial hydraulic systems, making us a preferred choice among buyers looking for the <strong>best
            hydraulic hose manufacturer in India</strong>.
          </p>
        </div>
      </section>

      {/* Applications */}
      <section className={styles.contentSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Applications of Our Hydraulic Hoses</h2>
          <p className={styles.sectionDescription}>Our hydraulic hoses are widely used in:</p>

          <div className={styles.applicationsGrid}>
            <div className={styles.applicationItem}>
              <div className={styles.applicationTitle}>Agriculture Equipment</div>
              <div className={styles.applicationDescription}>
                Tractors, harvesters, hydraulic pumps
              </div>
            </div>
            <div className={styles.applicationItem}>
              <div className={styles.applicationTitle}>Construction Machinery</div>
              <div className={styles.applicationDescription}>
                Excavators, loaders, cranes
              </div>
            </div>
            <div className={styles.applicationItem}>
              <div className={styles.applicationTitle}>Industrial Machinery</div>
              <div className={styles.applicationDescription}>
                Presses, power units, automation systems
              </div>
            </div>
            <div className={styles.applicationItem}>
              <div className={styles.applicationTitle}>Earth-Moving Equipment</div>
              <div className={styles.applicationDescription}>
                Bulldozers, graders, material handling
              </div>
            </div>
            <div className={styles.applicationItem}>
              <div className={styles.applicationTitle}>Hydraulic Power Transmission</div>
              <div className={styles.applicationDescription}>
                Power units, transmission systems
              </div>
            </div>
          </div>

          <p className={styles.sectionDescription}>
            Each application demands <strong>safety and durability</strong> — which is where our products stand out.
          </p>
        </div>
      </section>

      {/* Quality Control */}
      <section className={styles.contentSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Quality Control & Manufacturing Excellence</h2>
          <p className={styles.sectionDescription}>
            Quality is the foundation of our manufacturing process. From raw material selection to final inspection,
            every hydraulic hose is produced under strict supervision.
          </p>

          <div className={styles.qualityProcess}>
            <p className={styles.sectionDescription}><strong>Our quality process includes:</strong></p>
            <ul className={styles.processList}>
              <li>Material strength verification</li>
              <li>Pressure resistance checks</li>
              <li>Dimensional accuracy inspection</li>
              <li>Surface and finish evaluation</li>
            </ul>
          </div>

          <p className={styles.sectionDescription}>
            This disciplined approach positions Steel Craft India among the <strong>best hydraulic hose manufacturers
            in India</strong>.
          </p>
        </div>
      </section>

      {/* Pan-India Supply */}
      <section className={styles.contentSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Pan-India Supply & Reliable Support</h2>
          <p className={styles.sectionDescription}>
            We supply hydraulic hoses and related components across major industrial hubs in India, ensuring timely
            delivery and consistent availability. Whether you are sourcing for bulk requirements or long-term supply
            contracts, we support your operations with dependable logistics.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={styles.contentSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Why Customers Choose Steel Craft India</h2>
          <p className={styles.sectionDescription}>Customers choose us because we offer:</p>

          <div className={styles.chooseUsGrid}>
            <div className={styles.chooseUsItem}>Manufacturing-driven quality</div>
            <div className={styles.chooseUsItem}>Competitive pricing</div>
            <div className={styles.chooseUsItem}>Reliable supply chain</div>
            <div className={styles.chooseUsItem}>Industry-focused solutions</div>
            <div className={styles.chooseUsItem}>Long-term partnership approach</div>
          </div>

          <p className={styles.sectionDescription}>
            Our goal is not just to sell hydraulic hoses, but to provide solutions that improve equipment performance
            and reduce downtime.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Contact the Best Hydraulic Hose Manufacturer in India</h2>
          <p className={styles.ctaText}>
            If you are searching for the best hydraulic hose manufacturer in India, Steel Craft India is your trusted partner.
            Get in touch with us today to discuss your requirements, bulk orders, or customized hydraulic solutions.
          </p>
          <Link to="/contact" className={styles.ctaButton}>
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}