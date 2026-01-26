import React, { useState, useEffect, useRef } from 'react';
import styles from './about-us.module.css';

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState({});
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.dataset.section]: true }));
          }
        });
      },
      { threshold: 0.2 }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const milestones = [
    { year: '2001', title: 'Foundation', description: 'Founded by Ankur Gupta with a vision for excellence' },
    { year: '2010', title: 'Expansion', description: 'Established nationwide distribution network' },
    { year: '2020', title: 'Innovation', description: 'Advanced manufacturing capabilities deployed' },
    { year: '2025', title: 'Global Vision', description: 'Positioning for international market presence' }
  ];

  const values = [
    {
      icon: '⚙️',
      title: 'Precision Engineering',
      description: 'Every fitting manufactured with meticulous attention to detail and quality'
    },
    {
      icon: '🛡️',
      title: 'Quality Commitment',
      description: 'Rigorous testing and quality control ensuring reliability and safety'
    },
    {
      icon: '🤝',
      title: 'Customer Focus',
      description: 'Building long-term relationships through exceptional service and support'
    },
    {
      icon: '🌍',
      title: 'Global Ambition',
      description: 'Expanding reach to position Indian manufacturing on the world stage'
    }
  ];

  const stats = [
    { number: '20+', label: 'Years Experience', suffix: '' },
    { number: '1000', label: 'Happy Clients', suffix: '+' },
    { number: '100', label: 'Product Range', suffix: '+' },
    { number: '30', label: 'States Served', suffix: '+' }
  ];

  return (
    <section className={styles.aboutSection} id="about">
      {/* Hero Section */}
      <div
        className={`${styles.aboutHero} ${isVisible.hero ? styles.visible : ''}`}
        data-section="hero"
      >
        <div className={styles.aboutHeroContent}>
          <div className={styles.sectionLabel}>About Steel Craft India</div>
          <h1 className={styles.aboutHeroTitle}>Crafting Excellence Since 2001</h1>
          <p className={styles.aboutHeroDescription}>
            A trusted manufacturer of precision-engineered hydraulic hose fittings, serving India's transport, industrial, and hydraulic systems sectors with unwavering commitment to quality and reliability.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div
        className={`${styles.statsSection} ${isVisible.stats ? styles.visible : ''}`}
        data-section="stats"
      >
        <div className={styles.statsContainer}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <div className={styles.statNumber}>{stat.number}{stat.suffix}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Story Section */}
      <div
        className={`${styles.storySection} ${isVisible.story ? styles.visible : ''}`}
        data-section="story"
      >
        <div className={styles.storyContainer}>
          <div className={styles.storyContent}>
            <h2 className={styles.storyTitle}>Our Journey</h2>
            <p className={styles.storyText}>
              Founded in 2001 by Ankur Gupta, Steel Craft India began with a clear vision: to manufacture hydraulic hose fittings that set new standards for precision, durability, and performance. What started as a commitment to quality has evolved into a legacy of excellence spanning over two decades.
            </p>
            <p className={styles.storyText}>
              We specialize in producing high-pressure hydraulic pipe fittings that serve as essential components in demanding applications across transport, industrial, and hydraulic systems sectors. Every fitting we manufacture is engineered with meticulous attention to detail, ensuring leak-proof operation and long service life even under the most challenging conditions.
            </p>
            <p className={styles.storyText}>
              Our manufacturing process combines quality-tested raw materials with strict quality control processes, creating products that deliver reliability and safety consistently. This dedication has helped us establish a robust distribution network across India, enabling efficient service to traders, OEMs, and industrial clients nationwide.
            </p>
            <div className={styles.storyHighlight}>
              <p className={styles.storyHighlightText}>
                "Our focus on product quality, timely delivery, and customer satisfaction has helped us build long-term business relationships across the country."
              </p>
            </div>
          </div>

          <div className={styles.storyVisual}>
            <div className={styles.founderCard}>
              <h3 className={styles.founderName}>Ankur Gupta</h3>
              <p className={styles.founderRole}>Founder & Visionary</p>
              <p className={styles.founderQuote}>
                "Our mission extends beyond manufacturing fittings. We're building a legacy of Indian engineering excellence that will resonate globally, positioning Steel Craft India as a recognized name in international markets."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div
        className={`${styles.valuesSection} ${isVisible.values ? styles.visible : ''}`}
        data-section="values"
      >
        <div className={styles.valuesContainer}>
          <div className={styles.valuesHeader}>
            <h2 className={styles.valuesTitle}>Our Core Values</h2>
            <p className={styles.valuesSubtitle}>
              The principles that guide every decision we make and every product we manufacture
            </p>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <span className={styles.valueIcon}>{value.icon}</span>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div
        className={`${styles.timelineSection} ${isVisible.timeline ? styles.visible : ''}`}
        data-section="timeline"
      >
        <div className={styles.timelineContainer}>
          <div className={styles.timelineHeader}>
            <h2 className={styles.timelineTitle}>Our Milestones</h2>
          </div>
          <div className={styles.timelineGrid}>
            {milestones.map((milestone, index) => (
              <div key={index} className={styles.milestone}>
                <div className={styles.milestoneDot}>
                  <span className={styles.milestoneYear}>{milestone.year}</span>
                </div>
                <h3 className={styles.milestoneTitle}>{milestone.title}</h3>
                <p className={styles.milestoneDescription}>{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div
        className={`${styles.aboutCta} ${isVisible.cta ? styles.visible : ''}`}
        data-section="cta"
      >
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Building Global Presence</h2>
          <p className={styles.ctaDescription}>
            As a rapidly growing company, we are continuously expanding our manufacturing capacity and market reach. Our long-term vision is to establish a strong global presence, taking Indian-manufactured hydraulic hose fittings to international markets.
          </p>
          <a href="#contact" className={styles.ctaButton}>
            Partner With Us
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}