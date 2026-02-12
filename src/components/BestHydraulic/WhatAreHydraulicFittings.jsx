import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import styles from './what-are-hydraulic-fittings.module.css';

export default function WhatAreHydraulicFittings() {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const faqs = [
    {
      question: 'What are hydraulic fittings used for?',
      answer: 'Hydraulic fittings are used to connect hoses, pipes, and tubes in hydraulic systems to allow fluid flow under pressure.'
    },
    {
      question: 'Which hydraulic fitting standard is most commonly used in India?',
      answer: 'DIN 2353 and BSP standards are the most commonly used in India.'
    },
    {
      question: 'Can different hydraulic fitting standards be mixed?',
      answer: 'No. Mixing different standards can cause leakage and system failure.'
    }
  ];

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>What Are Hydraulic Fittings? Types, Uses & Standards | Steel Craft India</title>
        <meta
          name="description"
          content="Hydraulic fittings connect hoses, pipes and tubes in hydraulic systems. Learn types of hydraulic fittings, standards, uses and applications in India."
        />
      </Helmet>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Work+Sans:wght@300;400;500;600&display=swap');

        :root {
          --primary-color: #2d5016;
          --secondary-color: #1a4d2e;
          --accent-color: #8ce24a;
          --text-primary: #ffffff;
          --text-color: #929792;
          --text-light: #c1dcc7;
          --background-primary: #f0f8f0;
          --background-secondary: #ffffff;
          --background-dark: #0f2814;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        /* Hero */
        .page-hero {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
          padding: 6rem 2rem;
          position: relative;
          overflow: hidden;
          text-align: center;
        }

        .page-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: url('/mnt/user-data/uploads/footer-bg.jpeg') center/cover;
          opacity: 0.1;
        }

        .hero-inner {
          position: relative;
          z-index: 1;
          max-width: 1100px;
          margin: 0 auto;
        }

        .hero-tag {
          font-family: 'Oswald', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--accent-color);
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 1.25rem;
        }

        .hero-title {
          font-family: 'Oswald', sans-serif;
          font-size: 3.5rem;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: 2px;
          text-transform: uppercase;
          line-height: 1.2;
          margin-bottom: 2rem;
        }

        .hero-intro {
          font-family: 'Work Sans', sans-serif;
          font-size: 1.2rem;
          color: var(--text-light);
          line-height: 1.9;
          margin-bottom: 1.5rem;
        }

        .hero-note {
          font-family: 'Work Sans', sans-serif;
          font-size: 1.05rem;
          font-weight: 500;
          color: var(--accent-color);
        }

        /* Page Body */
        .page-body {
          background: var(--background-secondary);
          padding: 6rem 2rem;
        }

        .page-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        /* Article Sections */
        .article-section {
          margin-bottom: 5rem;
        }

        .article-section:last-child {
          margin-bottom: 0;
        }

        .article-h2 {
          font-family: 'Oswald', sans-serif;
          font-size: 2.2rem;
          font-weight: 600;
          color: var(--primary-color);
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 3px solid var(--accent-color);
        }

        .article-h3 {
          font-family: 'Oswald', sans-serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--primary-color);
          letter-spacing: 0.5px;
          text-transform: uppercase;
          margin-bottom: 1rem;
          margin-top: 2.5rem;
        }

        .article-p {
          font-family: 'Work Sans', sans-serif;
          font-size: 1.1rem;
          color: var(--text-color);
          line-height: 1.9;
          margin-bottom: 1.5rem;
        }

        .article-p strong {
          color: var(--primary-color);
          font-weight: 600;
        }

        /* Info Panel */
        .info-panel {
          background: var(--background-primary);
          padding: 2.5rem 3rem;
          margin: 2.5rem 0;
          border-left: 5px solid var(--accent-color);
        }

        .info-panel-title {
          font-family: 'Oswald', sans-serif;
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--primary-color);
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 1.25rem;
        }

        .info-panel ul {
          list-style: none;
        }

        .info-panel ul li {
          font-family: 'Work Sans', sans-serif;
          font-size: 1.05rem;
          color: var(--text-color);
          line-height: 1.8;
          padding-left: 1.75rem;
          position: relative;
          margin-bottom: 0.75rem;
        }

        .info-panel ul li::before {
          content: '▸';
          position: absolute;
          left: 0;
          color: var(--accent-color);
          font-weight: bold;
          font-size: 1.1rem;
        }

        /* Warning Panel */
        .warning-panel {
          background: #fff8e1;
          border-left: 5px solid #e8a43f;
          padding: 2rem 2.5rem;
          margin: 2.5rem 0;
        }

        .warning-panel p {
          font-family: 'Work Sans', sans-serif;
          font-size: 1.05rem;
          color: #5a4000;
          line-height: 1.8;
        }

        .warning-panel strong {
          font-weight: 700;
        }

        /* Note Panel */
        .note-panel {
          background: var(--background-primary);
          border-left: 5px solid var(--primary-color);
          padding: 2rem 2.5rem;
          margin: 2.5rem 0;
        }

        .note-panel p {
          font-family: 'Work Sans', sans-serif;
          font-size: 1.05rem;
          color: var(--text-color);
          line-height: 1.8;
          font-style: italic;
        }

        .note-panel strong {
          color: var(--primary-color);
          font-style: normal;
          font-weight: 600;
        }

        /* Contextual Link */
        .contextual-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Work Sans', sans-serif;
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--primary-color);
          text-decoration: none;
          border-bottom: 2px solid var(--accent-color);
          padding-bottom: 1px;
          transition: all 0.2s ease;
        }

        .contextual-link:hover {
          color: var(--secondary-color);
          border-bottom-color: var(--primary-color);
        }

        .contextual-link svg {
          width: 16px;
          height: 16px;
          flex-shrink: 0;
        }

        /* Standards Quick Reference */
        .standards-ref {
          margin: 2.5rem 0;
        }

        .standard-row {
          display: grid;
          grid-template-columns: 120px 1fr;
          gap: 2rem;
          padding: 2rem 0;
          border-bottom: 1px solid #e8f0e8;
          align-items: start;
        }

        .standard-row:last-child {
          border-bottom: none;
        }

        .standard-badge {
          font-family: 'Oswald', sans-serif;
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text-primary);
          background: var(--primary-color);
          padding: 0.75rem 1rem;
          text-align: center;
          letter-spacing: 1px;
        }

        .standard-detail h4 {
          font-family: 'Oswald', sans-serif;
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--primary-color);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 0.5rem;
        }

        .standard-detail p {
          font-family: 'Work Sans', sans-serif;
          font-size: 1rem;
          color: var(--text-color);
          line-height: 1.7;
        }

        /* Materials Panel */
        .materials-panel {
          background: var(--background-primary);
          padding: 2.5rem 3rem;
          margin: 2.5rem 0;
        }

        .material-row {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 1.5rem;
          padding: 1.25rem 0;
          border-bottom: 1px solid #dde8dd;
          align-items: start;
        }

        .material-row:last-child {
          border-bottom: none;
        }

        .material-name {
          font-family: 'Oswald', sans-serif;
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--primary-color);
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .material-desc {
          font-family: 'Work Sans', sans-serif;
          font-size: 1rem;
          color: var(--text-color);
          line-height: 1.7;
        }

        /* Checklist Panel */
        .checklist-panel {
          background: var(--background-primary);
          border-left: 5px solid var(--accent-color);
          padding: 2.5rem 3rem;
          margin: 2.5rem 0;
        }

        .checklist-panel ol {
          list-style: none;
          counter-reset: checklist;
        }

        .checklist-panel ol li {
          font-family: 'Work Sans', sans-serif;
          font-size: 1.05rem;
          color: var(--text-color);
          line-height: 1.8;
          padding-left: 3rem;
          position: relative;
          margin-bottom: 1rem;
          counter-increment: checklist;
        }

        .checklist-panel ol li::before {
          content: counter(checklist);
          position: absolute;
          left: 0;
          width: 2rem;
          height: 2rem;
          background: var(--primary-color);
          color: var(--text-primary);
          font-family: 'Oswald', sans-serif;
          font-weight: 600;
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          top: 2px;
        }

        .checklist-panel ol li strong {
          color: var(--primary-color);
          font-weight: 600;
        }

        /* SCI Panel */
        .sci-panel {
          background: var(--background-primary);
          padding: 3rem;
          margin: 2.5rem 0;
          border-top: 4px solid var(--primary-color);
          border-bottom: 4px solid var(--accent-color);
        }

        .sci-panel-title {
          font-family: 'Oswald', sans-serif;
          font-size: 1.6rem;
          font-weight: 600;
          color: var(--primary-color);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
        }

        .sci-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }

        .sci-col-title {
          font-family: 'Oswald', sans-serif;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--primary-color);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 1rem;
        }

        .sci-list {
          list-style: none;
        }

        .sci-list li {
          font-family: 'Work Sans', sans-serif;
          font-size: 1.05rem;
          color: var(--text-color);
          line-height: 1.8;
          padding-left: 1.75rem;
          position: relative;
          margin-bottom: 0.75rem;
        }

        .sci-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--accent-color);
          font-weight: bold;
          font-size: 1.2rem;
        }

        .sci-note {
          font-family: 'Work Sans', sans-serif;
          font-size: 1.05rem;
          color: var(--text-color);
          line-height: 1.8;
          margin-top: 2rem;
        }

        /* Divider */
        .section-divider {
          height: 2px;
          background: linear-gradient(90deg, var(--accent-color), transparent);
          margin: 5rem 0;
          opacity: 0.5;
        }

        /* FAQ Section */
        .faq-section {
          margin-top: 2.5rem;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .faq-item {
          border-left: 4px solid var(--primary-color);
          background: var(--background-primary);
          transition: all 0.3s ease;
        }

        .faq-item.active {
          border-left-color: var(--accent-color);
        }

        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
          padding: 1.5rem 2rem;
          cursor: pointer;
        }

        .faq-question:hover {
          background: #e8f5e8;
        }

        .question-text {
          font-family: 'Oswald', sans-serif;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--primary-color);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          flex: 1;
        }

        .faq-icon {
          width: 32px;
          height: 32px;
          background: var(--primary-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .faq-item.active .faq-icon {
          background: var(--accent-color);
          transform: rotate(45deg);
        }

        .faq-icon svg {
          width: 16px;
          height: 16px;
          stroke: var(--text-primary);
          stroke-width: 3;
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease, padding 0.3s ease;
        }

        .faq-item.active .faq-answer {
          max-height: 200px;
          padding: 0 2rem 1.5rem 2rem;
        }

        .answer-text {
          font-family: 'Work Sans', sans-serif;
          font-size: 1.05rem;
          color: var(--text-color);
          line-height: 1.8;
        }

        /* CTA Section */
        .cta-section {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
          padding: 5rem 2rem;
          text-align: center;
        }

        .cta-inner {
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-title {
          font-family: 'Oswald', sans-serif;
          font-size: 2.5rem;
          font-weight: 600;
          color: var(--text-primary);
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
        }

        .cta-text {
          font-family: 'Work Sans', sans-serif;
          font-size: 1.1rem;
          color: var(--text-light);
          line-height: 1.8;
          margin-bottom: 2.5rem;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          font-family: 'Oswald', sans-serif;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--background-dark);
          background: var(--accent-color);
          padding: 1.4rem 3.5rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          background: #7dd13a;
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(140, 226, 74, 0.4);
        }

        .cta-button svg {
          width: 22px;
          height: 22px;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .sci-two-col {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .standard-row {
            grid-template-columns: 90px 1fr;
            gap: 1.5rem;
          }

          .material-row {
            grid-template-columns: 1fr;
            gap: 0.5rem;
          }
        }

        @media (max-width: 768px) {
          .page-hero {
            padding: 5rem 2rem;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .page-body {
            padding: 5rem 2rem;
          }

          .article-h2 {
            font-size: 2rem;
          }

          .info-panel,
          .checklist-panel,
          .sci-panel,
          .materials-panel {
            padding: 2rem;
          }
        }

        @media (max-width: 640px) {
          .hero-title {
            font-size: 2rem;
          }

          .article-h2 {
            font-size: 1.8rem;
          }

          .standard-row {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .standard-badge {
            width: fit-content;
            padding: 0.5rem 1.25rem;
          }

          .faq-question {
            padding: 1.25rem 1.5rem;
          }

          .question-text {
            font-size: 1rem;
          }
        }
      `}</style>

      {/* Hero */}
      <section className={styles.pageHero}>
        <div className={styles.heroInner}>
          <div className={styles.heroTag}>Knowledge Base</div>
          <h1 className={styles.heroTitle}>What Are Hydraulic Fittings?</h1>
          <p className={styles.heroIntro}>
            Hydraulic fittings are mechanical components used to connect hydraulic hoses, pipes, and tubes 
            within a hydraulic system. Their main purpose is to allow hydraulic fluid to flow safely under 
            high pressure while ensuring a strong, leak-free connection.
          </p>
          <p className={styles.heroNote}>
            Steel Craft India manufactures precision hydraulic fittings designed to perform reliably in 
            high-pressure and heavy-duty applications.
          </p>
        </div>
      </section>

      {/* Page Body */}
      <div className={styles.pageBody}>
        <div className={styles.pageContainer}>

          {/* Section 1 - Why Important */}
          <article className={styles.articleSection}>
            <h2 className={styles.articleH2}>Why Hydraulic Fittings Are Important</h2>
            <p className={styles.articleP}>
              Hydraulic fittings are a critical part of hydraulic systems used in manufacturing plants, 
              construction machinery, agricultural equipment, automobiles, and industrial power systems. 
              A properly selected hydraulic fitting ensures <strong>system safety, efficiency, and long service life</strong>.
            </p>
            <p className={styles.articleP}>
              Hydraulic systems operate under extremely high pressure. Even a small failure in a fitting can result in:
            </p>
            <div className={styles.infoPanel}>
              <div className={styles.infoPanelTitle}>Consequences of Fitting Failure</div>
              <ul>
                <li>Hydraulic oil leakage</li>
                <li>Pressure loss</li>
                <li>Equipment breakdown</li>
                <li>Machine downtime</li>
                <li>Safety hazards on site</li>
              </ul>
            </div>
            <p className={styles.articleP}>Using the correct hydraulic fittings helps in:</p>
            <div className={styles.infoPanel}>
              <div className={styles.infoPanelTitle}>Benefits of Correct Fitting Selection</div>
              <ul>
                <li>Maintaining proper pressure across the hydraulic circuit</li>
                <li>Preventing leakage and fluid loss</li>
                <li>Ensuring smooth and uninterrupted machine operation</li>
                <li>Reducing maintenance costs over the equipment's lifecycle</li>
              </ul>
            </div>
            <div className={styles.notePanel}>
              <p>For any hydraulic system, <strong>fittings are as important as hoses and pumps</strong>. 
              They must be selected for the right standard, thread type, and pressure rating.</p>
            </div>
          </article>

          <div className={styles.sectionDivider}></div>

          {/* Section 2 - Types */}
          <article className={styles.articleSection}>
            <h2 className={styles.articleH2}>Types of Hydraulic Fittings</h2>

            <h3 className={styles.articleH3}>Hydraulic Hose Fittings</h3>
            <p className={styles.articleP}>
              Hydraulic hose fittings are used to connect flexible hydraulic hoses to components such as 
              pumps, valves, cylinders, and motors. These are among the most widely used fitting types 
              across Indian industries.
            </p>
            <div className={styles.infoPanel}>
              <div className={styles.infoPanelTitle}>Commonly Used In</div>
              <ul>
                <li>Construction machinery</li>
                <li>Tractors and agricultural equipment</li>
                <li>Earth-moving and mining machines</li>
              </ul>
            </div>

            <h3 className={styles.articleH3}>Hydraulic Pipe and Tube Fittings</h3>
            <p className={styles.articleP}>
              Hydraulic pipe and tube fittings are used for rigid connections where higher strength and 
              stability are required. Unlike hose fittings, pipe fittings are used in fixed, hard-line 
              hydraulic circuits.
            </p>
            <div className={styles.infoPanel}>
              <div className={styles.infoPanelTitle}>Widely Used In</div>
              <ul>
                <li>Industrial hydraulic systems</li>
                <li>Power packs</li>
                <li>Manufacturing and processing plants</li>
              </ul>
            </div>

            <h3 className={styles.articleH3}>Male and Female Hydraulic Fittings</h3>
            <p className={styles.articleP}>
              Hydraulic fittings are classified based on thread type. Male fittings have external threads, 
              while female fittings have internal threads. Correct matching of male and female fittings is 
              essential to avoid leakage and thread damage.
            </p>

            <h3 className={styles.articleH3}>Hydraulic Nuts, Nipples, Caps and Plugs</h3>
            <p className={styles.articleP}>
              These components play an important role in assembly and protection of hydraulic circuits:
            </p>
            <div className={styles.infoPanel}>
              <ul>
                <li><strong>Hydraulic nuts</strong> – secure hose fittings to connectors</li>
                <li><strong>Hydraulic nipples</strong> – connect two fittings in series</li>
                <li><strong>Hydraulic caps</strong> – seal open female ports from contamination</li>
                <li><strong>Hydraulic plugs</strong> – protect open male ports from dust and moisture</li>
              </ul>
            </div>
            <div className={styles.notePanel}>
              <p>
                <strong>Steel Craft India</strong> manufactures all these components — hydraulic nuts, nipples, 
                caps, and plugs — with accurate dimensions and consistent quality for high-pressure applications.
              </p>
            </div>
          </article>

          <div className={styles.sectionDivider}></div>

          {/* Section 3 - Standards */}
          <article className={styles.articleSection}>
            <h2 className={styles.articleH2}>Hydraulic Fittings Standards Used in India</h2>
            <p className={styles.articleP}>
              Hydraulic fittings are manufactured according to international standards to ensure 
              compatibility, safety, and performance. Using the correct standard is essential to 
              avoid thread mismatch, leakage, and system failure.
            </p>

            <div className={styles.standardsRef}>
              <div className={styles.standardRow}>
                <div className={styles.standardBadge}>DIN 2353</div>
                <div className={styles.standardDetail}>
                  <h4>Metric Bite Type (Most Common in India)</h4>
                  <p>Metric bite-type fittings with 24° cone and cutting ring. Widely used in industrial and mobile hydraulics. Excellent vibration resistance and high-pressure capability.</p>
                </div>
              </div>
              <div className={styles.standardRow}>
                <div className={styles.standardBadge}>BSP</div>
                <div className={styles.standardDetail}>
                  <h4>British Standard Pipe</h4>
                  <p>Includes BSPP (parallel, sealed via O-ring or bonded seal) and BSPT (tapered, thread sealing). Widely used in India, Europe, and agricultural machinery.</p>
                </div>
              </div>
              <div className={styles.standardRow}>
                <div className={styles.standardBadge}>JIC</div>
                <div className={styles.standardDetail}>
                  <h4>37° Flare – Joint Industry Council</h4>
                  <p>Metal-to-metal 37° flare sealing with UNF threads. Used in high-pressure applications including construction machinery and oil & gas equipment.</p>
                </div>
              </div>
              <div className={styles.standardRow}>
                <div className={styles.standardBadge}>ORFS</div>
                <div className={styles.standardDetail}>
                  <h4>O-Ring Face Seal – Zero Leak</h4>
                  <p>Elastomeric O-ring face seal for extremely high-pressure and high-vibration environments. Preferred in safety-critical and heavy equipment hydraulic systems.</p>
                </div>
              </div>
              <div className={styles.standardRow}>
                <div className={styles.standardBadge}>ISO / SAE</div>
                <div className={styles.standardDetail}>
                  <h4>International & Automotive Standards</h4>
                  <p>Used globally for standardised hydraulic system compatibility across automotive, industrial, and mobile applications.</p>
                </div>
              </div>
            </div>

            <div className={styles.notePanel} style={{marginTop: '2rem'}}>
              <p>
                For a complete breakdown of each standard including dimensions, thread types, and applications, read our dedicated guide:&nbsp;
                <Link to="/hydraulic-fittings-standards" className={styles.contextualLink}>
                  DIN 2353, BSP, JIC and ORFS – Hydraulic Fittings Standards Explained
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </p>
            </div>

            <div className={styles.warningPanel}>
              <p>
                <strong>⚠ Important:</strong> Using non-standard or mismatched fittings can cause thread damage, 
                seal failure, hydraulic leakage, and catastrophic equipment breakdown. Always confirm the standard 
                before ordering.
              </p>
            </div>
          </article>

          <div className={styles.sectionDivider}></div>

          {/* Section 4 - Materials */}
          <article className={styles.articleSection}>
            <h2 className={styles.articleH2}>Materials Used in Hydraulic Fittings</h2>
            <p className={styles.articleP}>
              Hydraulic fittings are manufactured using materials that can withstand pressure, vibration, 
              and environmental conditions. Material selection depends on pressure rating, working conditions, 
              and fluid type.
            </p>
            <div className={styles.materialsPanel}>
              <div className={styles.materialRow}>
                <div className={styles.materialName}>Carbon Steel</div>
                <div className={styles.materialDesc}>High strength and durability. Suitable for heavy-duty industrial and mobile hydraulic applications with high working pressures.</div>
              </div>
              <div className={styles.materialRow}>
                <div className={styles.materialName}>Mild Steel (MS)</div>
                <div className={styles.materialDesc}>Widely used in industrial applications. Cost-effective with good machinability and adequate strength for standard hydraulic systems.</div>
              </div>
              <div className={styles.materialRow}>
                <div className={styles.materialName}>Stainless Steel (SS)</div>
                <div className={styles.materialDesc}>Corrosion resistance for harsh environments, chemical exposure, and food-grade or marine hydraulic systems.</div>
              </div>
              <div className={styles.materialRow}>
                <div className={styles.materialName}>Zinc-Plated Steel</div>
                <div className={styles.materialDesc}>Improved rust protection for outdoor and agricultural applications exposed to moisture and environmental elements.</div>
              </div>
            </div>
          </article>

          <div className={styles.sectionDivider}></div>

          {/* Section 5 - Applications */}
          <article className={styles.articleSection}>
            <h2 className={styles.articleH2}>Applications of Hydraulic Fittings</h2>
            <p className={styles.articleP}>
              Hydraulic fittings are used across many industries in India. Each application requires 
              fittings designed for specific pressure, load, and operating conditions.
            </p>
            <div className={styles.infoPanel}>
              <ul>
                <li>Agriculture and tractors</li>
                <li>Construction and earth-moving equipment</li>
                <li>Manufacturing and industrial machinery</li>
                <li>Automotive and transport systems</li>
                <li>Hydraulic power packs and presses</li>
              </ul>
            </div>
          </article>

          <div className={styles.sectionDivider}></div>

          {/* Section 6 - How to Choose */}
          <article className={styles.articleSection}>
            <h2 className={styles.articleH2}>How to Choose the Right Hydraulic Fitting</h2>
            <p className={styles.articleP}>
              Selecting the wrong fitting can lead to leakage, reduced performance, and safety risks. 
              Before selecting a hydraulic fitting, consider the following factors:
            </p>
            <div className={styles.checklistPanel}>
              <ol>
                <li><strong>Operating pressure</strong> of the system – ensure the fitting is rated for your working pressure</li>
                <li><strong>Hose, pipe, or tube size</strong> – confirm the correct bore and outside diameter</li>
                <li><strong>Thread type and standard</strong> – match DIN, BSP, JIC, ORFS, or SAE as required</li>
                <li><strong>Material compatibility</strong> – select steel type appropriate for your fluid and environment</li>
                <li><strong>Environmental and operating conditions</strong> – consider vibration, heat, and exposure</li>
              </ol>
            </div>
          </article>

          <div className="section-divider"></div>

          {/* Section 7 - Why SCI */}
          <article className="article-section">
            <h2 className="article-h2">Why Choose Steel Craft India for Hydraulic Fittings?</h2>
            <p className="article-p">
              Steel Craft India is a reliable hydraulic fittings manufacturer in India, supplying 
              high-quality components to various industries.
            </p>
            <div className="sci-panel">
              <div className="sci-panel-title">Steel Craft India at a Glance</div>
              <div className="sci-two-col">
                <div>
                  <div className="sci-col-title">Our Strengths</div>
                  <ul className="sci-list">
                    <li>Precision-machined hydraulic fittings</li>
                    <li>DIN, BSP, JIC, ISO, and SAE standards</li>
                    <li>Consistent quality and dimensional accuracy</li>
                    <li>Supply across India</li>
                    <li>Bulk supply and custom manufacturing</li>
                  </ul>
                </div>
                <div>
                  <div className="sci-col-title">Product Range</div>
                  <ul className="sci-list">
                    <li>Hydraulic nuts</li>
                    <li>Hydraulic nipples</li>
                    <li>Hydraulic male connectors</li>
                    <li>Hydraulic caps and plugs</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="faq-section">
              <h3 className="article-h3">Frequently Asked Questions</h3>
              <div className="faq-list">
                {faqs.map((faq, index) => (
                  <div key={index} className={`faq-item ${activeFAQ === index ? 'active' : ''}`}>
                    <div className="faq-question" onClick={() => toggleFAQ(index)}>
                      <h4 className="question-text">{faq.question}</h4>
                      <div className="faq-icon">
                        <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      </div>
                    </div>
                    <div className="faq-answer">
                      <p className="answer-text">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>

        </div>
      </div>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-inner">
          <h2 className="cta-title">Need Hydraulic Fittings for Your Application?</h2>
          <p className="cta-text">
            Contact Steel Craft India for precision hydraulic fittings that meet your pressure ratings, 
            standards, and application requirements.
          </p>
          <Link to="/contact" className="cta-button">
            Get in Touch
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}