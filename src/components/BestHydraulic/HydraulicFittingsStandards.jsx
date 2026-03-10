import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

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
        <link rel="canonical" href="https://www.steelcraftsindia.in/hydraulic-fittings-standards" />
        <meta property="og:title" content="Hydraulic Fittings Standards – DIN, ISO, BSP, JIC, ORFS | Steel Craft India" />
        <meta property="og:type" content="article" />
      </Helmet>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&display=swap');

        :root {
          --primary-color: #2d5016;
          --secondary-color: #1a4d2e;
          --accent-color: #8ce24a;
          --text-primary: #ffffff;
          --text-color: #000000;
          --text-light: #bfbfbf;
          --background-primary: #f0f8f0;
          --background-secondary: #ffffff;
          --background-dark: #0f2814;
          --overlay-dark: rgba(13, 40, 20, 0.9);
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        /* Page Banner */
        .page-banner {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
          padding: 5rem 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .page-banner::before {
          content: '';
          position: absolute;
          inset: 0;
          background: url('/mnt/user-data/uploads/footer-bg.jpeg') center/cover;
          opacity: 0.1;
        }
        .banner-inner {
          position: relative;
          z-index: 1;
          max-width: 1100px;
          margin: 0 auto;
        }
        .banner-tag {
          font-family: 'Work Sans', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--accent-color);
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }
        .banner-h1 {
          font-family: 'Work Sans', sans-serif;
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.3;
          margin-bottom: 1.5rem;
        }
        .banner-desc {
          font-family: 'Work Sans', sans-serif;
          font-size: 1.05rem;
          color: rgba(255,255,255,0.85);
          line-height: 1.8;
          margin-bottom: 1rem;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }
        .banner-note {
          font-family: 'Work Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--accent-color);
          line-height: 1.7;
        }

        /* Main Content */
        .content-wrapper {
          background: var(--background-secondary);
          padding: 5rem 2rem;
        }
        .content-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Professional Two-Column Section */
        .prof-section {
          background: var(--background-secondary);
          margin-bottom: 4rem;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
        }
        .prof-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
        }

        /* Left Content */
        .prof-content {
          padding: 4rem 4rem 4rem 3.5rem;
          background: var(--background-secondary);
        }
        .prof-intro {
          font-family: 'Work Sans', sans-serif;
          font-size: 1rem;
          font-weight: 400;
          color: #2a2a2a;
          line-height: 1.85;
          margin-bottom: 2rem;
        }
        .prof-subhead {
          font-family: 'Work Sans', sans-serif;
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-color);
          margin-bottom: 1.25rem;
          margin-top: 0;
        }
        .prof-list {
          list-style: none;
          padding: 0;
          margin: 0 0 2rem 0;
        }
        .prof-list li {
          font-family: 'Work Sans', sans-serif;
          font-size: 0.92rem;
          font-weight: 400;
          color: #3a3a3a;
          line-height: 1.7;
          padding-left: 1.35rem;
          position: relative;
          margin-bottom: 0.85rem;
        }
        .prof-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--primary-color);
          font-weight: bold;
          font-size: 1.1rem;
        }
        .prof-note {
          font-family: 'Work Sans', sans-serif;
          font-size: 0.9rem;
          font-weight: 400;
          color: #4a4a4a;
          line-height: 1.7;
          margin-top: 2rem;
          font-style: italic;
          padding-left: 1rem;
          border-left: 3px solid var(--accent-color);
        }

        /* Right Image */
        .prof-image {
          background: linear-gradient(to bottom, #e8f2ed, #f5f9f7);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3rem 2.5rem 4.5rem;
          position: relative;
        }
        .prof-image img {
          width: 100%;
          max-width: 420px;
          height: auto;
          object-fit: contain;
          display: block;
        }

        /* Contact Box at bottom of image column */
        .contact-box {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: var(--background-secondary);
          padding: 1.5rem 2rem;
          border-top: 1px solid #e0e0e0;
        }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.65rem;
          font-family: 'Work Sans', sans-serif;
          font-size: 0.85rem;
          color: #3a3a3a;
        }
        .contact-item:last-child { margin-bottom: 0; }
        .contact-icon {
          width: 16px;
          height: 16px;
          flex-shrink: 0;
        }
        .contact-icon.web { color: #4a90e2; }
        .contact-icon.email { color: #e67e22; }
        .contact-icon.phone { color: var(--primary-color); }
        .contact-link {
          color: #3a3a3a;
          text-decoration: none;
          font-weight: 500;
        }
        .contact-link:hover { color: var(--primary-color); }

        /* Standards Grid */
        .standards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin: 3rem 0;
        }
        .standard-card {
          background: var(--background-primary);
          padding: 2rem;
          border-left: 4px solid var(--primary-color);
        }
        .standard-name {
          font-family: 'Work Sans', sans-serif;
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--primary-color);
          margin-bottom: 0.35rem;
        }
        .standard-subtitle {
          font-family: 'Work Sans', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          color: #666;
          font-style: italic;
          margin-bottom: 1.25rem;
        }
        .standard-label {
          font-family: 'Work Sans', sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--primary-color);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 0.5rem;
          margin-top: 1.25rem;
        }
        .standard-label:first-of-type { margin-top: 0; }

        /* Section divider */
        .section-divider {
          height: 1px;
          background: var(--background-primary);
          margin: 4rem 0;
        }

        /* SCI Box */
        .sci-box {
          background: var(--background-primary);
          padding: 3rem;
          margin: 3rem 0;
        }
        .sci-title {
          font-family: 'Work Sans', sans-serif;
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--primary-color);
          margin-bottom: 2rem;
        }
        .sci-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }
        .sci-col-head {
          font-family: 'Work Sans', sans-serif;
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--primary-color);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1rem;
        }
        .check-list {
          list-style: none;
          padding: 0;
        }
        .check-list li {
          font-family: 'Work Sans', sans-serif;
          font-size: 0.95rem;
          color: #3a3a3a;
          line-height: 1.75;
          padding-left: 1.35rem;
          position: relative;
          margin-bottom: 0.5rem;
        }
        .check-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--primary-color);
          font-weight: bold;
        }

        /* FAQ */
        .faq-section { margin-top: 3rem; }
        .faq-heading {
          font-family: 'Work Sans', sans-serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-color);
          margin-bottom: 1.5rem;
        }
        .faq-item {
          border-bottom: 1px solid #e0e0e0;
        }
        .faq-q {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
          padding: 1.25rem 0;
          cursor: pointer;
        }
        .faq-q-text {
          font-family: 'Work Sans', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-color);
          flex: 1;
        }
        .faq-icon {
          width: 28px;
          height: 28px;
          background: var(--primary-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }
        .faq-icon.active {
          background: var(--accent-color);
          transform: rotate(45deg);
        }
        .faq-icon svg {
          width: 13px;
          height: 13px;
          stroke: #fff;
          stroke-width: 3;
        }
        .faq-answer {
          font-family: 'Work Sans', sans-serif;
          font-size: 0.95rem;
          color: #555;
          line-height: 1.75;
          padding-bottom: 1.25rem;
        }

        /* CTA */
        .cta-section {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
          padding: 4.5rem 2rem;
          text-align: center;
        }
        .cta-title {
          font-family: 'Work Sans', sans-serif;
          font-size: 2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }
        .cta-text {
          font-family: 'Work Sans', sans-serif;
          font-size: 1.05rem;
          color: rgba(255,255,255,0.8);
          line-height: 1.75;
          margin-bottom: 2.25rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }
        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.85rem;
          font-family: 'Work Sans', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          color: var(--background-dark);
          background: var(--accent-color);
          padding: 1.15rem 2.75rem;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .cta-btn:hover {
          background: #7dd13a;
          transform: translateY(-2px);
        }
        .cta-btn svg {
          width: 18px;
          height: 18px;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .prof-grid { grid-template-columns: 1fr; }
          .prof-content { padding: 3rem 2.5rem; }
          .prof-image { padding: 2.5rem 2rem 5rem; }
          .standards-grid { grid-template-columns: 1fr; }
          .sci-grid { grid-template-columns: 1fr; gap: 2rem; }
        }
        @media (max-width: 768px) {
          .banner-h1 { font-size: 2rem; }
          .content-wrapper { padding: 3.5rem 1.5rem; }
          .prof-content { padding: 2.5rem 1.75rem; }
          .prof-image { padding: 2rem 1.5rem 5rem; }
          .sci-box { padding: 2rem 1.5rem; }
        }
        @media (max-width: 640px) {
          .banner-h1 { font-size: 1.65rem; }
          .cta-btn { width: 100%; justify-content: center; padding: 1.15rem 2rem; }
        }
      `}</style>

      {/* Banner */}
      <section className="page-banner">
        <div className="banner-inner">
          <div className="banner-tag">Knowledge Base</div>
          <h1 className="banner-h1">Hydraulic Fittings Standards –<br />DIN, ISO, BSP, JIC, ORFS & SAE</h1>
          <p className="banner-desc">Hydraulic systems operate under high pressure, making standardisation critical for safety, reliability, and interchangeability. Standards define thread type, sealing method, pressure rating, and dimensional accuracy, ensuring compatibility across machines and industries.</p>
          <p className="banner-note">At Steel Craft India, we manufacture hydraulic fittings strictly adhering to international and Indian standards, ensuring leak-proof performance and long service life.</p>
        </div>
      </section>

      {/* Content */}
      <div className="content-wrapper">
        <div className="content-container">

          {/* Professional Section - Each Standard */}
          {standards.map((std, idx) => (
            <div key={std.id} className="prof-section">
              <div className="prof-grid">
                
                {/* Left: Content */}
                <div className="prof-content">
                  <p className="prof-intro">
                    <strong>{std.name}</strong> ({std.subtitle}) is a widely recognized hydraulic fitting standard used across multiple industries. Steel Craft India manufactures precision-engineered fittings engineered for demanding industrial applications. We partner with leading manufacturers to deliver precision-machined components that meet exacting tolerances and ensure reliable operation across extreme temperatures and pressures.
                  </p>

                  <div className="prof-subhead">Key Capabilities</div>
                  <ul className="prof-list">
                    {std.features.map((f, i) => <li key={i}>{f}</li>)}
                  </ul>

                  <div className="prof-subhead">Common Applications</div>
                  <ul className="prof-list">
                    {std.applications.map((a, i) => <li key={i}>{a}</li>)}
                  </ul>

                  {std.note && (
                    <p className="prof-note">📌 {std.note}</p>
                  )}
                </div>

                {/* Right: Image + Contact */}
                <div className="prof-image">
                  <img src="/mnt/user-data/uploads/1771763443132_image.png" alt={`${std.name} Hydraulic Fittings`} />
                  
                  <div className="contact-box">
                    <div className="contact-item">
                      <svg className="contact-icon web" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                      <a href="https://www.steelcraftsindia.in" className="contact-link">www.steelcraftsindia.in</a>
                    </div>
                    <div className="contact-item">
                      <svg className="contact-icon email" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                      <a href="mailto:steelcraft80@gmail.com" className="contact-link">steelcraft80@gmail.com</a>
                    </div>
                    <div className="contact-item">
                      <svg className="contact-icon phone" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                      <a href="tel:+919356854656" className="contact-link">+91 9356854656</a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}

          <div className="section-divider"></div>

          {/* SCI Box */}
          <div className="sci-box">
            <div className="sci-title">Steel Craft India – Standard-Compliant Manufacturer</div>
            <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: '1rem', color: '#3a3a3a', lineHeight: 1.75, marginBottom: '2rem' }}>Steel Craft India manufactures hydraulic fittings as per DIN, ISO, BSP, JIC, ORFS, and SAE standards. Each product undergoes dimensional checks, thread inspection, and pressure suitability validation.</p>
            
            <div className="sci-grid">
              <div>
                <div className="sci-col-head">Product Range</div>
                <ul className="check-list">
                  <li>Hydraulic nuts</li>
                  <li>Hydraulic nipples</li>
                  <li>Hydraulic male connectors</li>
                  <li>Hydraulic caps & plugs</li>
                </ul>
              </div>
              <div>
                <div className="sci-col-head">Quality Process</div>
                <ul className="check-list">
                  <li>Dimensional checks on every batch</li>
                  <li>Thread inspection and gauging</li>
                  <li>Pressure suitability validation</li>
                  <li>Surface and finish evaluation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="faq-section">
            <h3 className="faq-heading">Frequently Asked Questions</h3>
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <div className="faq-q" onClick={() => toggle(i)}>
                  <span className="faq-q-text">{faq.q}</span>
                  <div className={`faq-icon${activeFAQ === i ? ' active' : ''}`}>
                    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                  </div>
                </div>
                {activeFAQ === i && <p className="faq-answer">{faq.a}</p>}
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* CTA */}
      <section className="cta-section">
        <h2 className="cta-title">Need Standard-Compliant Hydraulic Fittings?</h2>
        <p className="cta-text">Contact Steel Craft India for DIN, ISO, BSP, JIC, ORFS, and SAE standard hydraulic fittings manufactured with precision and quality assurance.</p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfKElyM_wrT461lyiOAt2eF0M6pgNxAAe-HktFdp73GHUvg0g/viewform?embedded=true" target="_blank" rel="noopener noreferrer" className="cta-btn">
          Request Technical Specifications
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
      </section>
    </>
  );
}