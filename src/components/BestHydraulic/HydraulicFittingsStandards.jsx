import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './hydraulic-fittings-standards.module.css';

export default function HydraulicFittingsStandards() {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const standards = [
    {
      id: 'din-2353',
      name: 'DIN 2353',
      subtitle: 'Metric Bite Type',
      features: [
        'Metric thread system',
        '24° cone with cutting ring (bite type)',
        'Excellent vibration resistance',
        'High pressure capability'
      ],
      applications: [
        'Industrial hydraulics',
        'Construction equipment',
        'Machine tools',
        'Mobile hydraulics'
      ],
      note: 'Steel Craft India manufactures DIN 2353 hydraulic nuts, nipples, male connectors, and caps with precise tolerances.'
    },
    {
      id: 'iso-8434',
      name: 'ISO 8434',
      subtitle: 'International Standard',
      features: [
        'International compatibility',
        'Metric threads',
        'Multiple sealing styles (cone, O-ring, flare)'
      ],
      applications: [
        'OEM machinery',
        'Export-oriented hydraulic systems',
        'Heavy engineering industries'
      ],
      note: null
    },
    {
      id: 'bsp',
      name: 'BSP',
      subtitle: 'British Standard Pipe',
      features: [
        'BSPP (Parallel) – sealing via bonded seal or O-ring',
        'BSPT (Tapered) – thread sealing',
        'Common in Indian and European systems'
      ],
      applications: [
        'Agricultural machinery',
        'Hydraulic hose assemblies',
        'Power packs'
      ],
      note: 'Steel Craft India supplies BSP hydraulic male connectors, plugs, and caps for leak-free connections.'
    },
    {
      id: 'jic',
      name: 'JIC',
      subtitle: '37° Flare (Joint Industry Council)',
      features: [
        '37° metal-to-metal flare sealing',
        'UNF threads',
        'Reusable and reliable'
      ],
      applications: [
        'Construction machinery',
        'Oil & gas equipment',
        'Mobile hydraulics'
      ],
      note: null
    },
    {
      id: 'orfs',
      name: 'ORFS',
      subtitle: 'O-Ring Face Seal',
      features: [
        'Elastomeric O-ring seal',
        'Superior vibration resistance',
        'Extremely high pressure capability'
      ],
      applications: [
        'Heavy equipment',
        'High vibration environments',
        'Safety-critical hydraulic systems'
      ],
      note: null
    },
    {
      id: 'sae',
      name: 'SAE',
      subtitle: 'Society of Automotive Engineers',
      features: [
        'Consistent global specifications',
        'Interchangeability',
        'High durability'
      ],
      applications: [
        'Automotive hydraulic systems',
        'Industrial hydraulics',
        'Mobile hydraulic equipment'
      ],
      note: null
    }
  ];

  const whyStandardsMatter = [
    'Prevents leakage and system failure',
    'Ensures compatibility across equipment',
    'Improves safety under high pressure',
    'Reduces downtime and maintenance costs'
  ];

  const sciProducts = [
    'Hydraulic nuts',
    'Hydraulic nipples',
    'Hydraulic male connectors',
    'Hydraulic caps & plugs'
  ];

  const faqs = [
    {
      question: 'Which hydraulic fitting standard is most commonly used in India?',
      answer: 'DIN 2353 and BSP standards are most commonly used across Indian industries.'
    },
    {
      question: 'Can different hydraulic standards be mixed?',
      answer: 'Mixing standards is not recommended as it can cause leakage and system failure.'
    },
    {
      question: 'Do you manufacture custom hydraulic fittings as per drawings?',
      answer: 'Yes, Steel Craft India can manufacture fittings as per customer drawings and specifications.'
    }
  ];

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>Hydraulic Fittings Standards – DIN, ISO, BSP, JIC, ORFS | Steel Craft India</title>
        <meta 
          name="description" 
          content="Learn about hydraulic fittings standards including DIN 2353, ISO 8434, BSP, JIC, ORFS & SAE. Steel Craft India manufactures precision hydraulic fittings as per global standards." 
        />
      </Helmet>



      {/* Hero Section */}
      <section className={styles.standardsHero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Hydraulic Fittings Standards – Explained</h1>
          <p className={styles.heroDescription}>
            Hydraulic systems operate under high pressure, making standardisation critical for safety, reliability,
            and interchangeability. Hydraulic fittings standards define thread type, sealing method, pressure rating,
            and dimensional accuracy, ensuring compatibility across machines and industries.
          </p>
          <p className={styles.heroFooter}>
            At Steel Craft India, we manufacture hydraulic fittings strictly adhering to international and Indian
            standards, ensuring leak-proof performance and long service life.
          </p>
        </div>
      </section>

      {/* Standards Grid Section */}
      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>
          <h2 className={styles.sectionTitle}>Global Hydraulic Fittings Standards</h2>

          <div className={styles.standardsGrid}>
            {standards.map((standard) => (
              <div key={standard.id}>
                <div className={styles.standardHeader}>
                  <div className={styles.standardName}>{standard.name}</div>
                  <div className={styles.standardSubtitle}>{standard.subtitle}</div>
                </div>

                <div className={styles.standardContent}>
                  <p>
                    This standard offers {standard.features.join(', ').toLowerCase()}.
                    It is commonly used in {standard.applications.slice(0, -1).join(', ').toLowerCase()} and {standard.applications[standard.applications.length - 1].toLowerCase()}.
                    {standard.note && ` ${standard.note}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Standards Matter Section */}
      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>
          <div className={styles.whyStandards}>
            <h2 className={styles.whyTitle}>Why Standards Matter in Hydraulic Fittings</h2>
            <ul className={styles.whyList}>
              {whyStandardsMatter.map((reason, idx) => (
                <li key={idx}>{reason}</li>
              ))}
            </ul>
            <p className={styles.warningText}>
              <strong>Warning:</strong> Using non-standard fittings can cause thread mismatch, seal failure,
              and catastrophic breakdowns.
            </p>
          </div>
        </div>
      </section>

      {/* SCI Products Section */}
      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>
          <div className={styles.sciProducts}>
            <h2 className={styles.productsTitle}>Steel Craft India – Standard-Compliant Manufacturer</h2>
            <p className={styles.productsIntro}>
              Steel Craft India manufactures hydraulic fittings as per DIN, ISO, BSP, JIC, ORFS, and SAE standards, including:
            </p>
            <div className={styles.productsGrid}>
              {sciProducts.map((product, idx) => (
                <div key={idx} className={styles.productItem}>{product}</div>
              ))}
            </div>
            <p className={styles.qualityText}>
              Each product undergoes dimensional checks, thread inspection, and pressure suitability validation.
            </p>
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
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Need Standard-Compliant Hydraulic Fittings?</h2>
          <p className={styles.ctaText}>
            Contact Steel Craft India for DIN, ISO, BSP, JIC, ORFS, and SAE standard hydraulic fittings
            manufactured with precision and quality assurance.
          </p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfKElyM_wrT461lyiOAt2eF0M6pgNxAAe-HktFdp73GHUvg0g/viewform?embedded=true" target='_blank' className={styles.ctaButton}>
            Request Technical Specifications
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}