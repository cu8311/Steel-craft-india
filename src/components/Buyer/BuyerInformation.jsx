import React, { useState, useEffect } from 'react';
import styles from './buyer-information.module.css';

export default function BuyerInformation() {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.dataset.section]: true }));
          }
        });
      },
      { threshold: 0 }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const processSteps = [
    {
      id: 1,
      number: "01",
      title: "Share Requirements",
      description: "Share your hydraulic fitting requirement or technical drawing with specifications"
    },
    {
      id: 2,
      number: "02",
      title: "Receive Quotation",
      description: "Receive the hydraulic fittings rate list and detailed quotation for your review"
    },
    {
      id: 3,
      number: "03",
      title: "Sample Approval",
      description: "Sample approval process (if required) to ensure quality and specifications"
    },
    {
      id: 4,
      number: "04",
      title: "Bulk Manufacturing",
      description: "Bulk manufacturing and dispatch with quality assurance at every stage"
    }
  ];

  const features = [
    {
      icon: "🎨",
      title: "Fully Customizable",
      description: "All hydraulic fittings are fully customizable as per drawings or specifications provided by the buyer"
    },
    {
      icon: "🏭",
      title: "High-Grade Material",
      description: "Manufactured using high-grade MS steel, ensuring strength, durability, and pressure resistance"
    },
    {
      icon: "🌍",
      title: "Global Supply",
      description: "We offer global supply of hydraulic hose fittings with buyer-arranged transportation options"
    },
    {
      icon: "✓",
      title: "Sample Approval",
      description: "Samples available for approval prior to bulk production to ensure compliance"
    },
    {
      icon: "📋",
      title: "Transparent Pricing",
      description: "Complete rate list shared before order confirmation for transparency and ease of selection"
    },
    {
      icon: "✨",
      title: "Plating Options",
      description: "Fittings available in plated and non-plated finishes based on application requirements"
    }
  ];

  return (
    <>

      <section className={styles.buyerSection} id="buyer-information">
        {/* Hero */}
        <div className={styles.buyerHero}>
          <div className={styles.heroContent}>
            <div className={styles.heroLabel}>For Traders & Manufacturers</div>
            <h1 className={styles.heroTitle}>Buyer Information</h1>
            <p className={styles.heroSubtitle}>
              Steel Craft is a reliable manufacturer and supplier of hydraulic hose fittings,
              catering to traders, hose manufacturers, and bulk buyers across India and worldwide.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className={`${styles.featuresSection} ${isVisible['features'] ? 'visible' : ''}`}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionLabel}>Why Choose Steel Craft</div>
            <h2 className={styles.sectionTitle}>Our Capabilities</h2>
            <p className={styles.sectionDescription}>
              Comprehensive manufacturing solutions tailored to your specific requirements
            </p>
          </div>

          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div
                key={index}
                className={styles.featureCard}
                data-section="features"
              >
                <span className={styles.featureIcon}>{feature.icon}</span>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className={`${styles.processSection} ${isVisible['process'] ? 'visible' : ''}`}>
          <div className={styles.processContainer}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionLabel}>Simple & Transparent</div>
              <h2 className={styles.sectionTitle}>Buying Process</h2>
              <p className={styles.sectionDescription}>
                Four easy steps from inquiry to delivery
              </p>
            </div>

            <div className={styles.processSteps}>
              {processSteps.map((step) => (
                <div
                  key={step.id}
                  className={styles.processStep}
                  data-section="process"
                >
                  <div className={styles.stepNumber}>{step.number}</div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Distributor CTA */}
        <div className={styles.distributorCta}>
          <div className={styles.distributorContent}>
            <h2 className={styles.distributorTitle}>Become a Distributor</h2>
            <p className={styles.distributorDescription}>
              Steel Craft invites serious partners to become authorized distributors of hydraulic
              hose fittings, enabling long-term business collaboration and growth opportunities.
            </p>
            <div className={styles.ctaButtons}>
              <a
                href="tel:+919368654656"
                className={`${styles.ctaButton} ${styles.primary}`}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Call Now
              </a>
              <a
                href="mailto:steelcraft80@gmail.com"
                className={`${styles.ctaButton} ${styles.secondary}`}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}