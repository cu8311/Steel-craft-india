import React, { useState, useEffect } from 'react';
import styles from './product-section.module.css';
import { useNavigate } from 'react-router-dom';

export default function ProductsSection() {
  const navigate = useNavigate();
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [selectedSize, setSelectedSize] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
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

    const section = document.querySelector('[data-products-section]');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Filter options
  const materials = ['All Materials', 'MS Steel'];
  const sizes = ['All Sizes', '1/8"', '1/4"', '3/8"', '1/2"', '3/4"', '1"', '1 1/4"', '1 1/2"', '2"'];

  // Products data
  const products = [
    {
      id: 1,
      name: "Hydraulic Adapter",
      material: "MS Steel",
      size: "Multiple Sizes",
      shortDescription: "High-precision hydraulic adapter with dual threading for secure connections",
      description: "Premium hydraulic adapter manufactured from 316L stainless steel, featuring precision-machined dual threading for reliable, leak-proof connections. Designed for high-pressure applications with superior corrosion resistance and long service life.",
      image: "/hydraulic-adapter.png",
      features: [
        "MS Steel Construction",
        "Dual Thread Design",
        "High-Pressure Rated",
        "Corrosion Resistant"
      ],
      specifications: {
        "Material": "MS Steel",
        "Pressure Rating": "Up to 12,000 PSI",
        "Thread Type": "NPT/BSP/Metric Available",
        "Size Range": "1/8\" to 2\"",
        "Finish": "Polished/Zinc Plated"
      },
      applications: ["Industrial Hydraulics", "Marine Systems", "Chemical Processing", "High-Pressure Lines"],
      availableSizes: ['1/8"', '1/4"', '3/8"', '1/2"', '3/4"', '1"', '1 1/4"', '1 1/2"', '2"']
    },
    {
      id: 2,
      name: "Hydraulic Bend Fittings",
      material: "MS Steel",
      size: "1/4\" to 2\"",
      shortDescription: "Precision-engineered bend fittings for optimal fluid flow direction",
      description: "Our hydraulic bend fittings are designed for applications requiring precise directional changes in hydraulic lines. Manufactured with premium materials and featuring brass inserts for enhanced durability.",
      image: "/hydraulic-bend.jpeg",
      features: [
        "90-degree precision angles",
        "Brass reinforced design",
        "High-pressure rated",
        "Corrosion resistant finish"
      ],
      specifications: {
        "Material": "MS Steel with Brass Insert",
        "Pressure Rating": "Up to 10,000 PSI",
        "Thread Type": "NPT/BSP Available",
        "Size Range": "1/4\" to 2\""
      },
      applications: ["Industrial Machinery", "Construction Equipment", "Hydraulic Systems", "Transport Vehicles"],
      availableSizes: ['1/4"', '3/8"', '1/2"', '3/4"', '1"', '1 1/2"', '2"']
    },
    {
      id: 3,
      name: "Hydraulic Hose Nipple",
      material: "MS Steel",
      size: "1/4\" to 2\"",
      shortDescription: "Precision hydraulic hose nipple for secure hose connections",
      description: "Hydraulic hose nipples designed for strong, leak-proof hose connections in high-pressure systems. Compatible with multiple international thread standards.",
      image: "/hydraulic-hose-nipple.jpeg",
      features: [
        "Multiple thread options",
        "High-pressure rated",
        "Precision machined",
        "Corrosion resistant"
      ],
      specifications: {
        "Material": "MS Steel",
        "Thread Types": "UNF / BSP / NPT / ORFS",
        "Pressure Rating": "Up to 10,000 PSI",
        "Size Range": "1/4\" to 2\""
      },
      applications: [
        "Hydraulic Hose Assemblies",
        "Industrial Machinery",
        "Fluid Transfer Systems"
      ],
      availableSizes: ['1/4"', '3/8"', '1/2"', '3/4"', '1"', '1 1/4"', '1 1/2"', '2"']
    },
    {
      id: 4,
      name: "Hydraulic Male Nipple with Hose Tail",
      material: "MS Steel",
      size: "1/4\" to 2\"",
      shortDescription: "Male threaded nipple with hose tail for flexible hose connections",
      description: "Male hydraulic nipple with integrated hose tail, engineered for secure and durable hose fittings in high-pressure hydraulic applications.",
      image: "/hydraulic-male-nipple.jpeg",
      features: [
        "Integrated hose tail",
        "Strong grip design",
        "High tensile strength",
        "Leak-proof connection"
      ],
      specifications: {
        "Material": "MS Steel",
        "Thread Type": "BSP / NPT / UNF",
        "Pressure Rating": "Up to 10,000 PSI",
        "Finish": "Zinc Plated"
      },
      applications: [
        "Hydraulic Hoses",
        "Oil & Gas Systems",
        "Industrial Equipment"
      ],
      availableSizes: ['1/4"', '3/8"', '1/2"', '3/4"', '1"', '1 1/4"', '1 1/2"', '2"']
    },
    {
      id: 5,
      name: "Hydraulic Cap",
      material: "MS Steel",
      size: "1/4\" to 2\"",
      shortDescription: "Protective hydraulic caps for sealing open ports",
      description: "Durable hydraulic caps designed to protect open hydraulic ports from dust, moisture, and damage during storage or transport.",
      image: "/hydraulic-cap.jpeg",
      features: [
        "Port protection",
        "Reusable design",
        "Easy installation",
        "Corrosion resistant"
      ],
      specifications: {
        "Material": "MS Steel",
        "Thread Type": "BSP / NPT / Metric",
        "Finish": "Zinc Plated"
      },
      applications: [
        "Port Protection",
        "System Maintenance",
        "Transport Safety"
      ],
      availableSizes: ['1/4"', '3/8"', '1/2"', '3/4"', '1"', '1 1/2"', '2"']
    },
    {
      id: 6,
      name: "Hydraulic Hose Pipe",
      material: "Rubber with Steel Reinforcement",
      size: "1/4\" to 2\"",
      shortDescription: "High-pressure hydraulic hose pipe for fluid transfer",
      description: "Heavy-duty hydraulic hose pipes designed for high-pressure fluid transfer applications with excellent flexibility and durability.",
      image: "/hydraulic-hose-pipe.png",
      features: [
        "Steel wire reinforced",
        "High flexibility",
        "Abrasion resistant",
        "High-pressure compatible"
      ],
      specifications: {
        "Working Pressure": "Up to 6,000 PSI",
        "Temperature Range": "-40°C to +100°C",
        "Standards": "SAE / EN Compliant"
      },
      applications: [
        "Hydraulic Systems",
        "Construction Equipment",
        "Industrial Machinery"
      ],
      availableSizes: ['1/4"', '3/8"', '1/2"', '3/4"', '1"', '1 1/4"', '1 1/2"', '2"']
    },
    {
      id: 7,
      name: "Banjo Tee Fitting",
      material: "MS Steel",
      size: "1/4\" to 2\"",
      shortDescription: "Compact banjo tee fitting for multi-line hydraulic connections",
      description: "Banjo tee fittings designed for compact hydraulic installations where space is limited, allowing multiple fluid paths from a single point.",
      image: "/banjo-tee.jpeg",
      features: [
        "Compact design",
        "Multi-directional flow",
        "High-pressure rated",
        "Precision machined"
      ],
      specifications: {
        "Material": "MS Steel",
        "Thread Type": "BSP / NPT",
        "Pressure Rating": "Up to 8,000 PSI"
      },
      applications: [
        "Compact Hydraulic Systems",
        "Automotive Hydraulics",
        "Industrial Equipment"
      ],
      availableSizes: ['1/4"', '3/8"', '1/2"', '3/4"', '1"', '1 1/2"', '2"']
    },
    {
      id: 8,
      name: "Hydraulic Nut",
      material: "Mild Steel (MS)",
      size: "1/8\" to 1\"",
      shortDescription: "High-strength hydraulic nut for secure pipe and fitting connections",
      description: "Hydraulic nuts manufactured from mild steel, suitable for low, high, and extra high pressure hydraulic applications. Designed for precise threading and long service life.",
      image: "/hydraulic-nut.jpeg",
      features: [
        "Precision threaded",
        "High torque capacity",
        "Vibration resistant",
        "Corrosion resistant finish"
      ],
      specifications: {
        "Material": "Mild Steel (MS)",
        "Thread Type": "BSP / NPT / UNF",
        "Pressure Rating": "Low / High / Extra High Pressure"
      },
      applications: [
        "Hydraulic Pipe Connections",
        "Industrial Machinery",
        "High-Pressure Systems"
      ],
      availableSizes: ['1/8"', '1/4"', '3/8"', '1/2"', '3/4"', '1"', 'Custom Size']
    }

  ];

  // Filter products
  const filteredProducts = products.filter(product => {
    const materialMatch = selectedMaterial === 'all' || selectedMaterial === 'All Materials' || product.material === selectedMaterial;
    const sizeMatch = selectedSize === 'all' || selectedSize === 'All Sizes' || product.availableSizes?.includes(selectedSize);
    return materialMatch && sizeMatch;
  });

  const clearFilters = () => {
    setSelectedMaterial('all');
    setSelectedSize('all');
  };

  const openProductModal = (product) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden';
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <style>{`

      `}</style>

      <section
        className={`${styles.productsSection} ${isVisible ? 'visible' : ''}`}
        data-products-section
        id="products"
      >
        <div className={styles.productsContainer}>
          {/* Header */}
          <div className={styles.productsHeader}>
            <div className={styles.sectionLabel}>Our Product Range</div>
            <h2 className={styles.productsTitle}>Hydraulic Components</h2>
            <p className={styles.productsSubtitle}>
              Precision-engineered hydraulic fittings, connectors, and accessories designed
              for high-pressure applications and built to deliver reliable, leak-proof performance.
            </p>
          </div>

          {/* Filters */}
          <div className={styles.filtersContainer}>
            {/* Material */}
            <div className={styles.filterGroup}>
              <div className={styles.filterHeader}>
                <div className={styles.filterLabel}>
                  <svg className={styles.filterIcon} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                  Material:
                </div>
                <button className={styles.clearButton} onClick={clearFilters}>clear all</button>
              </div>
              <div className={styles.filterOptions}>
                {materials.map((material) => (
                  <button
                    key={material}
                    className={`${styles.filterOption} ${(selectedMaterial === material || (material === 'All Materials' && selectedMaterial === 'all')) ? styles.active : ''}`}
                    onClick={() => setSelectedMaterial(material === 'All Materials' ? 'all' : material)}
                  >
                    {material}
                  </button>
                ))}
              </div>
            </div>

            {/* Size */}
            <div className={styles.filterGroup}>
              <div className={styles.filterHeader}>
                <div className={styles.filterLabel}>
                  <svg className={styles.filterIcon} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                  Size:
                </div>
              </div>
              <div className={styles.filterOptions}>
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`${styles.filterOption} ${(selectedSize === size || (size === 'All Sizes' && selectedSize === 'all')) ? styles.active : ''}`}
                    onClick={() => setSelectedSize(size === 'All Sizes' ? 'all' : size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className={styles.resultsInfo}>
            Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </div>

          {/* Grid */}
          <div className={styles.productsGrid}>
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className={styles.productCard}
                onClick={() => openProductModal(product)}
              >
                <div className={styles.productImageWrapper}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className={styles.productImage}
                  />
                  <div className={styles.productOverlay}>
                    <button className={styles.overlayButton}>View Details</button>
                  </div>
                </div>

                <div className={styles.productInfo}>
                  <h3 className={styles.productName}>{product.name}</h3>
                  <p className={styles.productShortDescription}>{product.shortDescription}</p>

                  <div className={styles.productMeta}>
                    <div className={styles.metaItem}>
                      <span className={styles.metaLabel}>Material:</span>
                      <span>{product.material}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <span className={styles.metaLabel}>Size:</span>
                      <span>{product.size}</span>
                    </div>
                  </div>

                  <div className={styles.productFeaturesPreview}>
                    {product.features.slice(0, 2).map((feature, idx) => (
                      <span key={idx} className={styles.featureTag}>{feature}</span>
                    ))}
                  </div>

                  <button className={styles.viewDetailsBtn}>
                    Learn More
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
        {selectedProduct && (
          <div
            className={`${styles.productModal} ${selectedProduct ? styles.productModalOpen : ''}`}
            onClick={closeProductModal}
          >
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.modalClose} onClick={closeProductModal}>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <div className={styles.modalLayout}>
                <div className={styles.modalImageSection}>
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className={styles.modalImage}
                  />
                </div>

                <div className={styles.modalDetailsSection}>
                  <h3 className={styles.modalTitle}>{selectedProduct.name}</h3>
                  <p className={styles.modalDescription}>{selectedProduct.description}</p>

                  <div className={styles.modalSection}>
                    <h4 className={styles.modalSectionTitle}>Key Features</h4>
                    <ul className={styles.featuresList}>
                      {selectedProduct.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.modalSection}>
                    <h4 className={styles.modalSectionTitle}>Specifications</h4>
                    <div className={styles.specificationsGrid}>
                      {Object.entries(selectedProduct.specifications).map(([key, value]) => (
                        <div key={key} className={styles.specItem}>
                          <div className={styles.specLabel}>{key}</div>
                          <div className={styles.specValue}>{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={styles.modalSection}>
                    <h4 className={styles.modalSectionTitle}>Applications</h4>
                    <div className={styles.applicationsTags}>
                      {selectedProduct.applications.map((app, idx) => (
                        <span key={idx} className={styles.applicationTag}>{app}</span>
                      ))}
                    </div>
                  </div>

                  <div className={styles.modalCta}>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfKElyM_wrT461lyiOAt2eF0M6pgNxAAe-HktFdp73GHUvg0g/viewform?embedded=true" target='_blank'>
                      <button
                        className={`${styles.modalButton} ${styles.primary}`}>
                        Request Quote
                      </button>
                    </a>
                    <button
                      className={`${styles.modalButton} ${styles.secondary}`}
                      onClick={() => navigate("/contact")}
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}