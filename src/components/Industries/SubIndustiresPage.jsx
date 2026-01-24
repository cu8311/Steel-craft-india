import { useEffect, useState } from "react";
import styles from "./sub-industries-page.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { IndustryData } from "./industryData";

export default function SubIndustriesPage() {
  const {id} = useParams();
  const navigate = useNavigate()
  const [equipment, setEquipment] = useState([]);

  useEffect(() => {
    const industry = IndustryData.find(industry => industry.id === id)
    if(industry) {
      setEquipment(industry.equipment);
    } else {
      setEquipment(null)
    }
  }, [id])
  
  if (equipment === null) {
    navigate("/not-found")
  }

  return (
    <>
      {/* Banner */}
      <div className={styles.constructionBanner}>
        <div className={styles.bannerContent}>
          <div className={styles.bannerBreadcrumb}>
            <a href="/industries">Industries</a> / Construction Industry
          </div>
          <h1 className={styles.bannerTitle}>Construction Industry</h1>
          <p className={styles.bannerDescription}>
            Mission-critical hydraulic solutions for heavy construction equipment
            operating under extreme loads, vibration, dust, heat, and continuous motion.
          </p>
        </div>
      </div>

      {/* Introduction */}
      <section className={styles.introSection}>
        <div className={styles.introContainer}>
          <p className={styles.introText}>
            Hydraulic hoses play a <strong>mission-critical role</strong> in the
            construction industry, acting as the lifeline of heavy machinery by
            transmitting high-pressure hydraulic fluid between components.
          </p>
        </div>
      </section>

      {/* Equipment */}
      <section className={styles.equipmentSection}>
        <div className={styles.equipmentContainer}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTag}>Applications</div>
            <h2 className={styles.sectionTitle}>
              Where Hydraulic Hoses Are Used
            </h2>
          </div>

          <div className={styles.equipmentGrid}>
            {equipment.map((item) => (
              <div key={item.id} className={styles.equipmentCard}>
                <div className={styles.equipmentHeader}>
                  <div className={styles.equipmentIcon}>{item.icon}</div>
                  <div className={styles.equipmentInfo}>
                    <h3>{item.name}</h3>
                    <div className={styles.equipmentQuantity}>
                      {item.hosesUsed}
                    </div>
                  </div>
                </div>

                <div className={styles.equipmentSubsection}>
                  <div className={styles.subsectionTitle}>Applications:</div>
                  <ul className={styles.equipmentList}>
                    {item.applications.map((app, idx) => (
                      <li key={idx}>{app}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.equipmentUsage}>{item.usage}</div>

                <div className={styles.subsectionTitle}>Efficiency Impact:</div>
                <ul className={styles.efficiencyList}>
                  {item.efficiency.map((eff, idx) => (
                    <li key={idx}>{eff}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className={styles.benefitsSection}>
        <div className={styles.benefitsContainer}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTag}>Performance</div>
            <h2 className={styles.sectionTitle}>
              How Quality Improves Efficiency
            </h2>
          </div>

          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitTitle}>Higher Pressure Handling</div>
              <div className={styles.benefitDescription}>
                Premium hoses withstand extreme hydraulic pressure without failure.
              </div>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitTitle}>Reduced Downtime</div>
              <div className={styles.benefitDescription}>
                Durable construction minimizes failures and machine idle time.
              </div>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitTitle}>Improved Fuel Efficiency</div>
              <div className={styles.benefitDescription}>
                Reduced pressure loss lowers pump load and fuel consumption.
              </div>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitTitle}>Longer Service Life</div>
              <div className={styles.benefitDescription}>
                Resistance to heat, oil, and abrasion lowers maintenance costs.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Need Hydraulic Solutions?</h2>
          <p className={styles.ctaText}>
            Choosing the right hydraulic hose solutions ensures maximum output and
            long-term reliability.
          </p>
          <a href="#request-quote" className={styles.ctaButton}>
            Request a Quote
          </a>
        </div>
      </section>
    </>
  );
}