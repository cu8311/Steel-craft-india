import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { IndustryData } from './industryData';
import styles from './sub-industries-page.module.css';

export default function SubIndustriesPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [industry, setIndustry] = useState(null);

  useEffect(() => {
    const foundIndustry = IndustryData.find(ind => ind.id === id);
    if (foundIndustry) {
      setIndustry(foundIndustry);
    } else {
      navigate('/not-found');
    }
  }, [id, navigate]);

  if (!industry) return null;

  const firstHalfEquipment = industry.equipment.slice(
    0,
    4
  );
  const secondHalfEquipment = industry.equipment.slice(
    4
  );

  return (
    <article>
      {/* Banner */}
      <div className={styles.industryBanner}>
        <div className={styles.bannerContent}>
          <div className={styles.bannerBreadcrumb}>
            <a href="/industries">Industries</a> / {industry.name}
          </div>
          <h1 className={styles.bannerTitle}>{industry.name}</h1>
          <p className={styles.bannerDescription}>{industry.description}</p>
        </div>
      </div>

      {/* Introduction */}
      <section className={styles.introSection}>
        <div className={styles.introContainer}>
          <p className={styles.introText}>{industry.introText}</p>
        </div>
      </section>

      {/* Top Section */}
      <section className={styles.topContentSection}>
        <div className={styles.topContentContainer}>
          <div className={styles.topContentLayout}>
            {/* Left Content */}
            <div className={styles.leftContent}>
              <div className={styles.sectionHeader}>
                <div className={styles.sectionTag}>{industry.sectionTag}</div>
                <h2 className={styles.sectionTitle}>{industry.sectionTitle}</h2>
                {industry.sectionDescription && (
                  <p className={styles.sectionDescription}>
                    {industry.sectionDescription}
                  </p>
                )}
              </div>

              <div className={styles.equipmentList}>
                {firstHalfEquipment.map(item => (
                  <div key={item.id} className={styles.equipmentItem}>
                    <h3 className={styles.equipmentName}>{item.name}</h3>

                    {item.hosesUsed && (
                      <div className={styles.equipmentQuantity}>
                        {item.hosesUsed}
                      </div>
                    )}

                    {item.applications && (
                      <div className={styles.equipmentSubsection}>
                        <div className={styles.subsectionTitle}>
                          Applications:
                        </div>
                        <ul className={styles.applicationsList}>
                          {item.applications.map((app, idx) => (
                            <li key={idx}>{app}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.usage && (
                      <p className={styles.equipmentUsage}>{item.usage}</p>
                    )}

                    {item.efficiency && (
                      <>
                        <div className={styles.subsectionTitle}>
                          Efficiency Impact:
                        </div>
                        <ul className={styles.efficiencyList}>
                          {item.efficiency.map((eff, idx) => (
                            <li key={idx}>{eff}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Images */}
            <div className={styles.rightImage}>
              {industry.images.map((image, idx) => (
                <div key={idx} className={styles.imageContainer}>
                  <img
                    src={image.image}
                    alt={image.alt}
                    className={styles.industryImage}
                  />
                  <p className={styles.imageCaption}>
                    {image.imageCaption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className={styles.bottomContentSection}>
        <div className={styles.bottomContentContainer}>
          <div className={styles.equipmentList}>
            {secondHalfEquipment.map(item => (
              <div key={item.id} className={styles.equipmentItem}>
                <h3 className={styles.equipmentName}>{item.name}</h3>

                {item.hosesUsed && (
                  <div className={styles.equipmentQuantity}>
                    {item.hosesUsed}
                  </div>
                )}

                {item.applications && (
                  <div className={styles.equipmentSubsection}>
                    <div className={styles.subsectionTitle}>
                      Applications:
                    </div>
                    <ul className={styles.applicationsList}>
                      {item.applications.map((app, idx) => (
                        <li key={idx}>{app}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {item.usage && (
                  <p className={styles.equipmentUsage}>{item.usage}</p>
                )}

                {item.efficiency && (
                  <>
                    <div className={styles.subsectionTitle}>
                      Efficiency Impact:
                    </div>
                    <ul className={styles.efficiencyList}>
                      {item.efficiency.map((eff, idx) => (
                        <li key={idx}>{eff}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      {industry.benefits && (
        <section className={styles.benefitsSection}>
          <div className={styles.benefitsContainer}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionTag}>{industry.benefits.tag}</div>
              <h2 className={styles.sectionTitle}>
                {industry.benefits.title}
              </h2>
            </div>

            {industry.benefits.description && (
              <p className={styles.benefitsText}>
                {industry.benefits.description}
              </p>
            )}

            <ul className={styles.benefitsList}>
              {industry.benefits.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Need Hydraulic Solutions?</h2>
          <p className={styles.ctaText}>
            {industry.ctaText ||
              'Choosing the right hydraulic solutions ensures maximum output, reduced downtime, and long-term reliability.'}
          </p>
          <Link to="/contact" className={styles.ctaButton}>
            Contact Us
          </Link>
        </div>
      </section>
    </article>
  );
}