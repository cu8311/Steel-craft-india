import React, { useState, useEffect } from 'react';
import styles from './certificate.module.css'

export default function CertificatesSection() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('[data-certificates-section]');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Flexible certificate data structure - easy to add/remove certificates
  const certificates = [
    {
      id: 1,
      title: "MSME Competitive (LEAN) Scheme",
      subtitle: "MCLS Pledge Certificate",
      issuer: "Ministry of Micro, Small & Medium Enterprises",
      year: "2024",
      description: "Commitment to environmentally sound and socially responsible processes with safe and high-quality products.",
      image: "/certificate1.jpg",
      alt: "ISO certification for hydraulic fittings manufacturer",
      badge: "MCLS"
    },
    {
      id: 2,
      title: "ZED Bronze Certification",
      subtitle: "MSME Sustainable (ZED) Certification",
      issuer: "Ministry of Micro, Small & Medium Enterprises",
      year: "2025",
      description: "Awarded under MSME Sustainable (ZED) Certification Scheme for excellence in manufacturing and sustainability.",
      image: "/certificate2.jpg",
      alt: "ZED",
      badge: "ZED Bronze"
    }
  ];

  const openCertificate = (certificate) => {
    setSelectedCertificate(certificate);
    document.body.style.overflow = 'hidden';
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section
      className={`${styles.certificatesSection} ${isVisible ? 'visible' : ''}`}
      data-certificates-section
      id="certificates"
    >
      <div className={styles.certificatesContainer}>
        {/* Header */}
        <div className={styles.certificatesHeader}>
          <div className={styles.sectionLabel}>Quality Certifications</div>
          <h2 className={styles.certificatesTitle}>Certified Excellence</h2>
          <p className={styles.certificatesSubtitle}>
            Our commitment to quality and sustainability is recognized by leading certification bodies,
            ensuring the highest standards in manufacturing and business practices.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className={styles.certificatesGrid}>
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className={styles.certificateCard}
              onClick={() => openCertificate(certificate)}
            >
              <div className={styles.certificateImageWrapper}>
                <div className={styles.certificateBadge}>{certificate.badge}</div>
                <img
                  src={certificate.image}
                  alt={certificate.alt}
                  className={styles.certificateImage}
                />
                <div className={styles.certificateOverlay}>
                  <p className={styles.overlayText}>Click to view full certificate</p>
                </div>
              </div>

              <div className={styles.certificateInfo}>
                <div className={styles.certificateYear}>{certificate.year}</div>
                <h3 className={styles.certificateCardTitle}>{certificate.title}</h3>
                <p className={styles.certificateCardSubtitle}>{certificate.subtitle}</p>
                <div className={styles.certificateIssuer}>
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                  {certificate.issuer}
                </div>
                <button className={styles.viewCertificateBtn}>
                  View Certificate
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCertificate && (
        <div
          className={`${styles.certificateModal} ${styles.certificateModalOpen}`}
          onClick={closeCertificate}
        >
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={closeCertificate}>
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              className={styles.modalImage}
            />
            <div className={styles.modalInfo}>
              <h3 className={styles.modalTitle}>{selectedCertificate.title}</h3>
              <p className={styles.modalSubtitle}>{selectedCertificate.subtitle}</p>
              <p className={styles.modalDescription}>{selectedCertificate.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}