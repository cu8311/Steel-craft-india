import React from 'react';
import styles from './industries-page.module.css';
import { Link } from 'react-router-dom';

export default function IndustriesPage() {
  const industries = [
    {
      id: 'construction',
      name: 'Construction Industry',
      icon: '🏗️',
      description:
        'Hydraulic solutions for excavators, loaders, cranes, and concrete equipment',
      equipment: ['Excavators', 'Loaders', 'Cranes', 'Concrete Pumps'],
      link: '/industries/construction'
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing Industry',
      icon: '🏭',
      description:
        'Precision fittings for industrial machinery, automation, and production lines',
      equipment: ['CNC Machines', 'Press Systems', 'Assembly Lines', 'Material Handling'],
      link: '/industries/manufacturing'
    },
    {
      id: 'automotive',
      name: 'Automotive Industry',
      icon: '🚗',
      description:
        'High-performance components for testing equipment and assembly systems',
      equipment: ['Testing Rigs', 'Assembly Lines', 'Hydraulic Presses', 'Lifts'],
      link: '/industries/automotive'
    },
    {
      id: 'agriculture',
      name: 'Agriculture Industry',
      icon: '🚜',
      description:
        'Durable hydraulic fittings for tractors, harvesters, and irrigation systems',
      equipment: ['Tractors', 'Harvesters', 'Sprayers', 'Irrigation Systems'],
      link: '/industries/agriculture'
    },
    {
      id: 'hose-pipes',
      name: 'Hose Pipes for Tractors',
      icon: '🔧',
      description:
        'Specialized leak-proof connections for agricultural hydraulic applications',
      equipment: ['Hydraulic Hoses', 'Quick Couplers', 'Adapters', 'Fittings'],
      link: '/industries/hose-pipes'
    },
    {
      id: 'heavy-equipment',
      name: 'Heavy Equipment Industry',
      icon: '⚙️',
      description:
        'Robust fittings for mining, earth-moving, and material handling equipment',
      equipment: ['Mining Equipment', 'Bulldozers', 'Forklifts', 'Conveyors'],
      link: '/industries/heavy-equipment'
    }
  ];

  return (
    <>
      {/* Banner */}
      <div className={styles.industriesBanner}>
        <div className={styles.bannerContent}>
          <div className={styles.bannerTag}>Our Applications</div>
          <h1 className={styles.bannerTitle}>Industries We Serve</h1>
          <p className={styles.bannerDescription}>
            Our hydraulic fittings are used across a wide range of industries and
            applications. At <strong>Steel Craft India</strong>, we design reliable
            and robust hydraulic components that perform consistently under high
            pressure and extreme operating conditions.
          </p>
        </div>
      </div>

      {/* Industries Grid */}
      <section className={styles.industriesSection}>
        <div className={styles.industriesContainer}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTag}>Explore Our Solutions</div>
            <h2 className={styles.sectionTitle}>Industry Applications</h2>
          </div>

          <div className={styles.industriesGrid}>
            {industries.map((industry) => (
              <div key={industry.id} className={styles.industryCard}>
                <div className={styles.industryIcon}>{industry.icon}</div>
                <h3 className={styles.industryName}>{industry.name}</h3>
                <p className={styles.industryDescription}>
                  {industry.description}
                </p>

                <div className={styles.industryEquipment}>
                  {industry.equipment.map((item, idx) => (
                    <span key={idx} className={styles.equipmentTag}>
                      {item}
                    </span>
                  ))}
                </div>

                <Link to={industry.link} className={styles.industryLink}>
                  Learn More
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}