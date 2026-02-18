import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styles from "./hydraulic-fittings-standards.module.css";

export default function HydraulicFittingsStandards() {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const toggle = (i) => setActiveFAQ(activeFAQ === i ? null : i);

  const standards = [
    { id: 'din-2353', name: 'DIN 2353', subtitle: 'Metric Bite Type', features: ['Metric thread system', '24° cone with cutting ring (bite type)', 'Excellent vibration resistance', 'High pressure capability'], applications: ['Industrial hydraulics', 'Construction equipment', 'Machine tools', 'Mobile hydraulics'], note: 'Steel Craft India manufactures DIN 2353 hydraulic nuts, nipples, male connectors, and caps with precise tolerances.' },
    { id: 'iso-8434', name: 'ISO 8434', subtitle: 'International Standard', features: ['International compatibility', 'Metric threads', 'Multiple sealing styles (cone, O-ring, flare)'], applications: ['OEM machinery', 'Export-oriented hydraulic systems', 'Heavy engineering industries'], note: null },
    { id: 'bsp', name: 'BSP', subtitle: 'British Standard Pipe', features: ['BSPP (Parallel) – sealing via bonded seal or O-ring', 'BSPT (Tapered) – thread sealing', 'Common in Indian and European systems'], applications: ['Agricultural machinery', 'Hydraulic hose assemblies', 'Power packs'], note: 'Steel Craft India supplies BSP hydraulic male connectors, plugs, and caps for leak-free connections.' },
    { id: 'jic', name: 'JIC', subtitle: '37° Flare (Joint Industry Council)', features: ['37° metal-to-metal flare sealing', 'UNF threads', 'Reusable and reliable'], applications: ['Construction machinery', 'Oil & gas equipment', 'Mobile hydraulics'], note: null },
    { id: 'orfs', name: 'ORFS', subtitle: 'O-Ring Face Seal', features: ['Elastomeric O-ring seal', 'Superior vibration resistance', 'Extremely high pressure capability'], applications: ['Heavy equipment', 'High vibration environments', 'Safety-critical hydraulic systems'], note: null },
    { id: 'sae', name: 'SAE', subtitle: 'Society of Automotive Engineers', features: ['Consistent global specifications', 'Interchangeability', 'High durability'], applications: ['Automotive hydraulic systems', 'Industrial hydraulics', 'Mobile hydraulic equipment'], note: null },
  ];

  const whyMatter = ['Prevents leakage and system failure', 'Ensures compatibility across equipment', 'Improves safety under high pressure', 'Reduces downtime and maintenance costs'];
  const sciProducts = ['Hydraulic nuts', 'Hydraulic nipples', 'Hydraulic male connectors', 'Hydraulic caps & plugs'];
  const faqs = [
    { q: 'Which hydraulic fitting standard is most commonly used in India?', a: 'DIN 2353 and BSP standards are most commonly used across Indian industries.' },
    { q: 'Can different hydraulic standards be mixed?', a: 'Mixing standards is not recommended as it can cause leakage and system failure.' },
    { q: 'Do you manufacture custom hydraulic fittings as per drawings?', a: 'Yes, Steel Craft India can manufacture fittings as per customer drawings and specifications.' },
  ];

  return (
    <>
      <Helmet>
        <title>Hydraulic Fittings Standards – DIN, ISO, BSP, JIC, ORFS | Steel Craft India</title>
        <meta name="description" content="Learn about hydraulic fittings standards including DIN 2353, ISO 8434, BSP, JIC, ORFS & SAE. Steel Craft India manufactures precision hydraulic fittings as per global standards." />
      </Helmet>

      <section className={styles.blogBanner}>
        <div className={styles.blogBannerInner}>
          <div className={styles.blogTag}>Knowledge Base</div>
          <h1 className={styles.blogH1}>
            Hydraulic Fittings Standards –<br />DIN, ISO, BSP, JIC, ORFS & SAE
          </h1>
          <p className={styles.blogBannerDesc}>
            Hydraulic systems operate under high pressure, making standardisation critical for safety, reliability, and interchangeability. Standards define thread type, sealing method, pressure rating, and dimensional accuracy, ensuring compatibility across machines and industries.
          </p>
          <p className={styles.blogBannerNote}>
            At Steel Craft India, we manufacture hydraulic fittings strictly adhering to international and Indian standards, ensuring leak-proof performance and long service life.
          </p>
        </div>
      </section>

      <div className={styles.blogBody}>
        <div className={styles.blogInner}>

          {/* Overview table */}
          <div className={styles.blogBlock}>
            <h2 className={styles.blogH2}>Global Hydraulic Fittings Standards</h2>
            <p className={styles.blogP}>
              A quick reference table of the most common standards used in India and globally:
            </p>

            <table className={styles.stdTable}>
              <thead>
                <tr>
                  <th>Standard</th>
                  <th>Type</th>
                  <th>Key Features</th>
                  <th>Applications</th>
                </tr>
              </thead>

              <tbody>
                {standards.map((s) => (
                  <React.Fragment key={s.id}>
                    <tr>
                      <td>{s.name}</td>

                      <td style={{ fontStyle: 'italic', color: '#555' }}>
                        {s.subtitle}
                      </td>

                      <td>{s.features.join('; ')}</td>

                      <td>{s.applications.join(', ')}</td>
                    </tr>

                    {s.note && (
                      <tr className={styles.noteRow}>
                        <td colSpan={4}>📌 {s.note}</td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          <hr className={styles.blogDivider} />

          {/* Each standard detailed */}
          <div className={styles.blogBlock}>
            <h2 className={styles.blogH2}>
              Each Standard – Explained in Detail
            </h2>

            {standards.map((s) => (
              <div key={s.id} className={styles.stdDetail}>

                <div className={styles.stdNameRow}>
                  <span className={styles.stdName}>{s.name}</span>

                  <span className={styles.stdSubtitle}>
                    — {s.subtitle}
                  </span>
                </div>

                <div className={styles.stdTwoCol}>

                  <div>
                    <div className={styles.blogSubhead}>
                      Key Features
                    </div>

                    <ul className={styles.rowList}>
                      {s.features.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className={styles.blogSubhead}>
                      Applications
                    </div>

                    <ul className={styles.rowList}>
                      {s.applications.map((a, i) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>
                  </div>

                </div>

                {s.note && (
                  <div className={styles.notePanel}>
                    <p>📌 {s.note}</p>
                  </div>
                )}

              </div>
            ))}
          </div>

          <hr className={styles.blogDivider} />

          {/* Why standards matter */}
          <div className={styles.blogBlock}>

            <h2 className={styles.blogH2}>
              Why Standards Matter in Hydraulic Fittings
            </h2>

            <p className={styles.blogP}>
              Standardisation ensures components from different manufacturers work together safely and reliably.
            </p>

            <ul className={styles.rowList}>
              {whyMatter.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>

            <div className={styles.warnBlock}>
              <p>
                ⚠ <strong>Warning:</strong> Using non-standard fittings can cause thread mismatch, seal failure, and catastrophic breakdowns. Always confirm the thread standard before ordering or installing hydraulic fittings.
              </p>
            </div>

          </div>

          <hr className={styles.blogDivider} />

          {/* SCI + FAQ */}
          <div className={styles.blogBlock}>

            <h2 className={styles.blogH2}>
              Steel Craft India – Standard-Compliant Manufacturer
            </h2>

            <p className={styles.blogP}>
              Steel Craft India manufactures hydraulic fittings as per DIN, ISO, BSP, JIC, ORFS, and SAE standards. Each product undergoes dimensional checks, thread inspection, and pressure suitability validation.
            </p>

            <div className={styles.sciBox}>

              <div className={styles.sciBoxTitle}>
                Products We Manufacture
              </div>

              <div className={styles.sciTwoCol}>

                <div>

                  <div className={styles.sciColHead}>
                    Product Range
                  </div>

                  <ul className={styles.checkList}>
                    {sciProducts.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>

                </div>

                <div>

                  <div className={styles.sciColHead}>
                    Quality Process
                  </div>

                  <ul className={styles.checkList}>
                    <li>Dimensional checks on every batch</li>
                    <li>Thread inspection and gauging</li>
                    <li>Pressure suitability validation</li>
                    <li>Surface and finish evaluation</li>
                  </ul>

                </div>

              </div>

            </div>

            <h3 className={styles.blogH3}>
              Frequently Asked Questions
            </h3>

            {faqs.map((faq, i) => (

              <div key={i} className={styles.faqItem}>
                <div
                  className={styles.faqQ}
                  onClick={() => toggle(i)}
                >
                  <span className={styles.faqQText}>
                    {faq.q}
                  </span>
                  <div
                    className={`${styles.faqIcon} ${activeFAQ === i ? styles.active : ''
                      }`}
                  >
                    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </div>
                </div>
                <div className={`${styles.faqAnswer} ${activeFAQ === i ? styles.faqAnswerActive : ''
                      }`}>
                  <p className={styles.faqAText}>
                    {faq.a}
                  </p>
                </div>
              </div>

            ))}

          </div>

        </div>
      </div>

      <section className={styles.blogCta}>

        <h2 className={styles.blogCtaTitle}>
          Need Standard-Compliant Hydraulic Fittings?
        </h2>

        <p className={styles.blogCtaText}>
          Contact Steel Craft India for DIN, ISO, BSP, JIC, ORFS, and SAE standard hydraulic fittings manufactured with precision and quality assurance.
        </p>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfKElyM_wrT461lyiOAt2eF0M6pgNxAAe-HktFdp73GHUvg0g/viewform?embedded=true"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.blogCtaBtn}
        >

          Request Technical Specifications

          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>

        </a>

      </section>
    </>
  );
}
