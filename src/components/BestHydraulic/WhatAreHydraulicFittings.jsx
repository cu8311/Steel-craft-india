import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import styles from "./what-are-hydraulic-fittings.module.css";

export default function WhatAreHydraulicFittings() {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (i) => {
    setActiveFAQ(activeFAQ === i ? null : i);
  };

  const faqs = [
    {
      question: 'What are hydraulic fittings used for?',
      answer:
        'Hydraulic fittings are used to connect hoses, pipes, and tubes in hydraulic systems to allow fluid flow under pressure.'
    },
    {
      question: 'Which hydraulic fitting standard is most commonly used in India?',
      answer:
        'DIN 2353 and BSP standards are the most commonly used in India.'
    },
    {
      question: 'Can different hydraulic fitting standards be mixed?',
      answer:
        'No. Mixing different standards can cause leakage and system failure.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>
          What Are Hydraulic Fittings? Types, Uses & Standards | Steel Craft India
        </title>
        <meta
          name="description"
          content="Hydraulic fittings connect hoses, pipes and tubes in hydraulic systems. Learn types of hydraulic fittings, standards, uses and applications in India."
        />
      </Helmet>

      {/* Page Banner */}
      <section className={styles.pageBanner}>
        <div className={styles.bannerInner}>
          <div className={styles.bannerTag}>Knowledge Base</div>
          <h1 className={styles.bannerTitle}>
            What Are Hydraulic Fittings?<br />Types, Uses & Standards Explained
          </h1>
          <div className={styles.bannerMeta}>
            Steel Craft India &nbsp;·&nbsp; Hydraulic Components Guide
          </div>
        </div>
      </section>

      {/* Article Body */}
      <div className={styles.articleWrapper}>
        <div className={styles.articleInner}>

          {/* Intro Block with Image */}
          <div className={styles.articleIntro}>
            <div>
              <h2 className={styles.introTitle}>Hydraulic Fittings</h2>
              <p className={styles.introText}>
                Hydraulic fittings are components used to connect hydraulic hoses, tubes, and pipes in hydraulic systems.
                They play a crucial role in ensuring leak-free connections and proper fluid transfer within hydraulic
                machinery and equipment.
              </p>
              <p className={styles.introText}>
                Hydraulic fittings are a critical part of hydraulic systems used in manufacturing plants, construction
                machinery, agricultural equipment, automobiles, and industrial power systems. A properly selected
                hydraulic fitting ensures <strong>system safety, efficiency, and long service life</strong>.
              </p>
              <p className={styles.introText}>
                Steel Craft India manufactures precision hydraulic fittings designed to perform reliably in
                high-pressure and heavy-duty applications.
              </p>
            </div>
          </div>

          <div className={styles.divider}></div>

          {/* Why Important */}
          <div className={styles.articleBlock}>
            <h2 className={styles.sectionH2}>Why Hydraulic Fittings Are Important</h2>
            <p className={styles.sectionText}>
              Hydraulic systems operate under extremely high pressure. Even a small failure in a fitting
              can result in serious consequences for equipment and safety.
            </p>

            <div className={styles.sectionSubhead}>Consequences of Fitting Failure:</div>
            <ul className={styles.rowList}>
              <li>Hydraulic oil leakage</li>
              <li>Pressure loss across the system</li>
              <li>Equipment breakdown and damage</li>
              <li>Machine downtime and lost productivity</li>
              <li>Safety hazards for operators on site</li>
            </ul>

            <div className={styles.sectionSubhead}>Using Correct Fittings Helps In:</div>
            <ul className={styles.rowList}>
              <li>Maintaining proper pressure throughout the hydraulic circuit</li>
              <li>Preventing leakage and hydraulic fluid loss</li>
              <li>Ensuring smooth and uninterrupted machine operation</li>
              <li>Reducing maintenance costs over the equipment's lifecycle</li>
            </ul>
          </div>

          <div className={styles.divider}></div>

          {/* Types */}
          <div className={styles.articleBlock}>
            <h2 className={styles.sectionH2}>Here are some key aspects of hydraulic fittings</h2>

            <div className={styles.sectionSubhead}>Types of Hydraulic Fittings:</div>
            <ul className={styles.rowList}>
              <li><strong>Threaded Fittings:</strong> These fittings have threads on their ends that screw into compatible ports or connectors. Used widely in industrial and mobile hydraulic systems.</li>
              <li><strong>Flared Fittings:</strong> Used with tubing, these fittings have a conical flare at the end that mates with a matching cone on the fitting body. Common in high-pressure fuel and hydraulic lines.</li>
              <li><strong>Crimp Fittings:</strong> Typically used with hoses, these fittings require a crimping tool to compress a ferrule around the hose and fitting to create a secure, leak-proof seal.</li>
              <li><strong>Push-to-Connect Fittings:</strong> These fittings allow for quick assembly without the need for tools, using features like O-rings or gripping mechanisms to seal and secure connections.</li>
            </ul>

            <div className={styles.sectionSubhead}>Materials:</div>
            <ul className={styles.rowList}>
              <li>Hydraulic fittings are commonly made from materials such as <strong>steel, stainless steel, brass, and aluminum</strong>, chosen based on factors like strength, corrosion resistance, and compatibility with hydraulic fluids.</li>
            </ul>

            <div className={styles.sectionSubhead}>Sealing Mechanisms:</div>
            <ul className={styles.rowList}>
              <li>Depending on the type of fitting, sealing can be achieved through <strong>threads</strong> (using O-rings or thread sealants), <strong>compression</strong> (as in flare fittings), or <strong>mechanical grip</strong> (as in push-to-connect fittings).</li>
              <li>Correct sealing is critical in high-pressure hydraulic systems to prevent fluid loss and maintain system efficiency.</li>
            </ul>

            <div className={styles.sectionSubhead}>Hydraulic Nuts, Nipples, Caps and Plugs:</div>
            <ul className={styles.rowList}>
              <li><strong>Hydraulic nuts</strong> – secure hose fittings to connectors and maintain a tight seal under pressure</li>
              <li><strong>Hydraulic nipples</strong> – connect two fittings or hoses in series within the hydraulic circuit</li>
              <li><strong>Hydraulic caps</strong> – seal and protect open female ports from dust, moisture and contamination</li>
              <li><strong>Hydraulic plugs</strong> – protect open male ports during storage, transport, or when ports are unused</li>
            </ul>
          </div>

          <div className={styles.divider}></div>

          {/* Standards */}
          <div className={styles.articleBlock}>
            <h2 className={styles.sectionH2}>Hydraulic Fittings Standards Used in India</h2>
            <p className={styles.sectionText}>
              Hydraulic fittings are manufactured according to international standards to ensure
              compatibility, safety, and performance. Using the correct standard is essential to
              avoid thread mismatch, leakage, and system failure.
            </p>

            <div className={styles.sectionSubhead}>Common Hydraulic Fitting Standards:</div>

            <table className={styles.standardsTable}>
              <thead>
                <tr>
                  <th>Standard</th>
                  <th>Description</th>
                  <th>Common Use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>DIN 2353</td>
                  <td>Metric bite-type fittings with 24° cone and cutting ring. Excellent vibration resistance.</td>
                  <td>Industrial and mobile hydraulics</td>
                </tr>
                <tr>
                  <td>BSP</td>
                  <td>British Standard Pipe. Includes BSPP (parallel) and BSPT (tapered). Widely used in India.</td>
                  <td>Agricultural machinery, power packs</td>
                </tr>
                <tr>
                  <td>JIC (37° Flare)</td>
                  <td>Metal-to-metal 37° flare seal with UNF threads. Reusable and reliable.</td>
                  <td>High-pressure construction and oil & gas</td>
                </tr>
                <tr>
                  <td>ORFS</td>
                  <td>O-Ring Face Seal – elastomeric O-ring for zero-leak, high vibration environments.</td>
                  <td>Heavy equipment, safety-critical systems</td>
                </tr>
                <tr>
                  <td>ISO / SAE</td>
                  <td>International standards for dimensional consistency and global interchangeability.</td>
                  <td>Automotive and industrial hydraulics</td>
                </tr>
              </tbody>
            </table>

            <div className={styles.contextualBanner}>
              <span className={styles.contextualLabel}>Read More →</span>
              <Link to="/hydraulic-fittings-standards" className={styles.contextualLink}>
                DIN 2353, BSP, JIC and ORFS – Hydraulic Fittings Standards Explained in Detail
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>

            <div className={styles.warningBlock}>
              <p>⚠ <strong>Important:</strong> Using non-standard fittings can cause thread mismatch, seal failure, and catastrophic breakdowns. Always confirm the thread standard before ordering or installing hydraulic fittings.</p>
            </div>
          </div>

          <div className={styles.divider}></div>

          {/* Applications */}
          <div className={styles.articleBlock}>
            <h2 className={styles.sectionH2}>Applications of Hydraulic Fittings</h2>
            <p className={styles.sectionText}>
              Hydraulic fittings are used across many industries in India. Each application requires
              fittings designed for specific pressure, load, and operating conditions.
            </p>
            <ul className={styles.rowList}>
              <li>Agriculture and tractors – lift systems, steering, hydraulic pumps</li>
              <li>Construction and earth-moving equipment – excavators, cranes, loaders</li>
              <li>Manufacturing and industrial machinery – presses, power units</li>
              <li>Automotive and transport systems – hydraulic braking, suspension</li>
              <li>Hydraulic power packs and automation systems</li>
            </ul>
          </div>

          <div className={styles.divider}></div>

          {/* How to Choose */}
          <div className={styles.articleBlock}>
            <h2 className={styles.sectionH2}>How to Choose the Right Hydraulic Fitting</h2>
            <p className={styles.sectionText}>
              Selecting the wrong fitting can lead to leakage, reduced performance, and safety risks.
              Before selecting a hydraulic fitting, consider the following:
            </p>
            <ol className={styles.numList}>
              <li><strong>Operating pressure</strong> – ensure the fitting is rated for your system's working pressure</li>
              <li><strong>Hose, pipe, or tube size</strong> – confirm the correct bore and outside diameter</li>
              <li><strong>Thread type and standard</strong> – match DIN, BSP, JIC, ORFS, or SAE as required</li>
              <li><strong>Material compatibility</strong> – select the right steel type for your fluid and environment</li>
              <li><strong>Environmental conditions</strong> – consider vibration, heat, dust, and moisture exposure</li>
            </ol>
          </div>

          <div className={styles.divider}></div>

          {/* Why SCI */}
          <div className={styles.articleBlock}>
            <h2 className={styles.sectionH2}>Why Choose Steel Craft India for Hydraulic Fittings?</h2>
            <p className={styles.sectionText}>
              Steel Craft India is a reliable hydraulic fittings manufacturer in India, supplying
              high-quality components to various industries. Our products undergo dimensional checks,
              thread inspection, and pressure suitability validation before dispatch.
            </p>

            <div className={styles.sciCallout}>
              <div className={styles.sciCalloutTitle}>Steel Craft India – Manufacturer Overview</div>
              <div className={styles.sciTwoCol}>
                <div>
                  <div className={styles.sciColHead}>Our Strengths</div>
                  <ul className={styles.sciList}>
                    <li>Precision-machined hydraulic fittings</li>
                    <li>DIN, BSP, JIC, ISO, SAE standards</li>
                    <li>Consistent quality and dimensional accuracy</li>
                    <li>Pan-India supply capability</li>
                    <li>Custom manufacturing as per sample/drawing</li>
                  </ul>
                </div>
                <div>
                  <div className={styles.sciColHead}>Product Range</div>
                  <ul className={styles.sciList}>
                    <li>Hydraulic nuts</li>
                    <li>Hydraulic nipples</li>
                    <li>Hydraulic male connectors</li>
                    <li>Hydraulic caps and plugs</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className={styles.faqBlock}>
              <h3 className={styles.sectionH3}>
                Frequently Asked Questions
              </h3>

              {faqs.map((faq, i) => (
                <div key={i} className={`${styles.faqItem} ${activeFAQ === i ? styles.faqItemActive : ''}`}>
                  <div className={styles.faqQuestion} onClick={() => toggleFAQ(i)}>
                    <span className={styles.faqQText}>
                      {faq.question}
                    </span>
                    <div className={styles.faqIcon}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </div>
                  </div>
                  <div className={styles.faqAnswer}>
                    <p className={styles.faqAText}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div >

      {/* CTA Section */}
      < section className={styles.ctaSection} >
        <div>
          <h2 className={styles.ctaTitle}>Need Hydraulic Fittings for Your Application?</h2>
          <p className={styles.ctaText}>
            Contact Steel Craft India for precision hydraulic fittings that meet your pressure ratings,
            standards, and application requirements.
          </p>
          <Link to="/contact" className={styles.ctaBtn}>
            Get in Touch
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </section >

    </>
  );
}
