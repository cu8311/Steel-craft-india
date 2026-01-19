import React, { useState, useEffect } from 'react';
import styles from './industries.module.css';
import { useNavigate } from 'react-router-dom';

export default function IndustriesSection() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.dataset.industry]: true }));
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll('[data-industry]');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const industries = [
    {
      id: 1,
      icon: "🏗️",
      title: "Construction Industry",
      description: "Supplying robust hydraulic fittings used in construction machinery such as excavators, loaders, cranes, and concrete equipment, designed to withstand high pressure and harsh site conditions.",
      highlights: ["Excavators", "Loaders", "Cranes", "Concrete Equipment"]
    },
    {
      id: 2,
      icon: "🏭",
      title: "Manufacturing Industry",
      description: "Providing precision-engineered hydraulic nuts, nipples, males, and caps for industrial machinery, automation systems, and production lines where accuracy and reliability are critical.",
      highlights: ["Industrial Machinery", "Automation Systems", "Production Lines"]
    },
    {
      id: 3,
      icon: "🚗",
      title: "Automotive Industry",
      description: "Supporting automotive manufacturing and service applications with hydraulic components used in testing equipment, assembly lines, and specialized hydraulic systems.",
      highlights: ["Testing Equipment", "Assembly Lines", "Hydraulic Systems"]
    },
    {
      id: 4,
      icon: "🌾",
      title: "Agriculture Industry",
      description: "Delivering dependable hydraulic solutions for agricultural machinery including tractors, harvesters, and irrigation equipment, ensuring smooth operation in demanding environments.",
      highlights: ["Tractors", "Harvesters", "Irrigation Equipment"]
    },
    {
      id: 5,
      icon: "🔧",
      title: "Hose Pipes for Tractors",
      description: "Manufacturing and supplying hydraulic hose fittings specifically designed for tractor applications, ensuring leak-proof connections and long service life in agricultural use.",
      highlights: ["Leak-Proof Design", "Long Service Life", "Agricultural Use"]
    },
    {
      id: 6,
      icon: "⚙️",
      title: "Heavy Equipment Industry",
      description: "Catering to heavy-duty machinery used in mining, earth-moving, material handling, and infrastructure projects with high-strength hydraulic components built for extreme workloads.",
      highlights: ["Mining", "Earth-Moving", "Material Handling"]
    }
  ];

  return (
    <>
      <section className={styles.industriesSection} id="industries">
        <div className={styles.industriesContainer}>
          {/* Header */}
          <div className={styles.industriesHeader}>
            <div className={styles.sectionLabel}>Our Expertise</div>
            <h2 className={styles.industriesTitle}>Industries We Serve</h2>
            <p className={styles.industriesSubtitle}>
              Precision-engineered hydraulic solutions across multiple industries,
              delivering durability, reliability, and high-performance components
            </p>
          </div>

          {/* Industries Grid */}
          <div className={styles.industriesGrid}>
            {industries.map((industry) => (
              <div
                key={industry.id}
                className={`${styles.industryCard} ${isVisible[industry.id] ? 'visible' : ''}`}
                data-industry={industry.id}
              >
                <div className={styles.iconBox} data-icon={industry.icon}></div>
                <h3 className={styles.industryTitle}>{industry.title}</h3>
                <p className={styles.industryDescription}>{industry.description}</p>
                <div className={styles.industryHighlights}>
                  {industry.highlights.map((highlight, idx) => (
                    <span key={idx} className={styles.highlightTag}>{highlight}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className={styles.industriesCta}>
            <h3 className={styles.ctaTitle}>Looking for Industry-Specific Solutions?</h3>
            <p className={styles.ctaDescription}>
              Our engineering team can develop custom hydraulic fittings tailored to your
              industry's unique requirements. Contact us to discuss your specific needs.
            </p>
            <a
              href="#contact"
              className={styles.ctaButton}
              onClick={() => navigate("/contact")}
            >
              Get Industry Solutions
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}