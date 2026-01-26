import React, { useState, useEffect } from 'react';
import styles from './product-section.module.css';
import { useNavigate } from 'react-router-dom';

export default function ProductsSection() {
  const navigate = useNavigate();
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [selectedThread, setSelectedThread] = useState('all');
  const [selectedPressure, setSelectedPressure] = useState('all');
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
  const threads = ['All Threads' ,'BSP', 'NPT', 'UNF'];
  const pressures = ['All Pressures', 'Low Pressure', 'High Pressure', 'Extra High Pressure'];

  // Products data
  const products = [
    {
      id: 1,
      name: "Hydraulic Adapter",
      material: "MS Steel",
      size: "Multiple Sizes",
      shortDescription: "High-precision hydraulic adapter with dual threading",
      description:
        "Premium hydraulic adapter featuring precision-machined threading for reliable, leak-proof connections.",
      image: "/hydraulic-adapter.png",
      features: [
        "MS Steel Construction",
        "Dual Thread Design",
        "High-Pressure Rated",
        "Corrosion Resistant"
      ],
      specifications: {
        Material: "MS Steel",
        "Thread Type": ["BSP", "NPT"],
        "Pressure Rating": ["High Pressure", "Extra High Pressure"]
      },
      applications: [
        "Industrial Hydraulics",
        "Marine Systems",
        "High-Pressure Lines"
      ],
      availableSizes: ['1/8"', '1/4"', '3/8"', '1/2"', '3/4"', '1"', '2"']
    },
  
    {
      id: 2,
      name: "Hydraulic Bend Fittings",
      material: "MS Steel",
      size: "1/4\" to 2\"",
      shortDescription: "Precision-engineered bend fittings",
      description:
        "Designed for applications requiring precise directional changes in hydraulic lines.",
      image: "/hydraulic-bend.jpeg",
      features: [
        "90-degree precision angles",
        "Brass reinforced",
        "High-pressure rated"
      ],
      specifications: {
        Material: "MS Steel",
        "Thread Type": ["BSP", "NPT"],
        "Pressure Rating": ["High Pressure"]
      },
      applications: [
        "Industrial Machinery",
        "Construction Equipment"
      ],
      availableSizes: ['1/4"', '3/8"', '1/2"', '3/4"', '1"', '2"']
    },
  
    {
      id: 3,
      name: "Hydraulic Hose Nipple",
      material: "MS Steel",
      size: "1/4\" to 2\"",
      shortDescription: "Precision hydraulic hose nipple",
      description:
        "Designed for strong, leak-proof hose connections in high-pressure systems.",
      image: "/hydraulic-hose-nipple.jpeg",
      features: [
        "Multiple thread options",
        "High-pressure rated",
        "Precision machined"
      ],
      specifications: {
        Material: "MS Steel",
        "Thread Type": ["BSP", "NPT", "UNF"],
        "Pressure Rating": ["High Pressure"]
      },
      applications: [
        "Hydraulic Hose Assemblies",
        "Fluid Transfer Systems"
      ],
      availableSizes: ['1/4"', '3/8"', '1/2"', '3/4"', '1"', '2"']
    },
  
    {
      id: 4,
      name: "Hydraulic Male Nipple with Hose Tail",
      material: "MS Steel",
      size: "1/4\" to 2\"",
      shortDescription: "Male threaded nipple with hose tail",
      description:
        "Engineered for secure hose fittings in high-pressure hydraulic applications.",
      image: "/hydraulic-male-nipple.jpeg",
      features: [
        "Integrated hose tail",
        "Strong grip design",
        "Leak-proof connection"
      ],
      specifications: {
        Material: "MS Steel",
        "Thread Type": ["BSP", "NPT", "UNF"],
        "Pressure Rating": ["High Pressure"]
      },
      applications: [
        "Hydraulic Hoses",
        "Oil & Gas Systems"
      ],
      availableSizes: ['1/4"', '3/8"', '1/2"', '3/4"', '1"', '2"']
    },
  
    {
      id: 5,
      name: "Hydraulic Cap",
      material: "MS Steel",
      size: "1/4\" to 2\"",
      shortDescription: "Protective hydraulic caps",
      description:
        "Designed to protect open hydraulic ports during storage and transport.",
      image: "/hydraulic-cap.jpeg",
      features: [
        "Port protection",
        "Reusable",
        "Corrosion resistant"
      ],
      specifications: {
        Material: "MS Steel",
        "Thread Type": ["BSP", "NPT"],
        "Pressure Rating": ["Low Pressure"]
      },
      applications: [
        "Port Protection",
        "System Maintenance"
      ],
      availableSizes: ['1/4"', '3/8"', '1/2"', '3/4"', '1"', '2"']
    },
  
    {
      id: 6,
      name: "Hydraulic Hose Pipe",
      material: "Rubber with Steel Reinforcement",
      size: "1/4\" to 2\"",
      shortDescription: "High-pressure hydraulic hose pipe",
      description:
        "Heavy-duty hose pipes designed for high-pressure fluid transfer.",
      image: "/hydraulic-hose-pipe.png",
      features: [
        "Steel wire reinforced",
        "High flexibility",
        "Abrasion resistant"
      ],
      specifications: {
        Material: "Rubber with Steel Reinforcement",
        "Thread Type": [],
        "Pressure Rating": ["High Pressure"]
      },
      applications: [
        "Hydraulic Systems",
        "Construction Equipment"
      ],
      availableSizes: ['1/4"', '3/8"', '1/2"', '3/4"', '1"', '2"']
    },
  
    {
      id: 7,
      name: "Banjo Tee Fitting",
      material: "MS Steel",
      size: "1/4\" to 2\"",
      shortDescription: "Compact banjo tee fitting",
      description:
        "Designed for compact hydraulic installations where space is limited.",
      image: "/banjo-tee.jpeg",
      features: [
        "Compact design",
        "Multi-directional flow",
        "High-pressure rated"
      ],
      specifications: {
        Material: "MS Steel",
        "Thread Type": ["BSP", "NPT"],
        "Pressure Rating": ["High Pressure"]
      },
      applications: [
        "Automotive Hydraulics",
        "Industrial Equipment"
      ],
      availableSizes: ['1/4"', '3/8"', '1/2"', '3/4"', '1"', '2"']
    },
  
    {
      id: 8,
      name: "Hydraulic Nut",
      material: "Mild Steel (MS)",
      size: "1/8\" to 1\"",
      shortDescription: "High-strength hydraulic nut",
      description:
        "Suitable for low, high, and extra high pressure hydraulic applications.",
      image: "/hydraulic-nut.jpeg",
      features: [
        "Precision threaded",
        "High torque capacity",
        "Vibration resistant"
      ],
      specifications: {
        Material: "Mild Steel (MS)",
        "Thread Type": ["BSP", "NPT", "UNF"],
        "Pressure Rating": ["Low Pressure", "High Pressure", "Extra High Pressure"]
      },
      applications: [
        "Hydraulic Pipe Connections",
        "Industrial Machinery"
      ],
      availableSizes: ['1/8"', '1/4"', '3/8"', '1/2"', '3/4"', '1"', 'Custom Size']
    }
  ];
  

  // Filter products
  const filteredProducts = products.filter(product => {
    const materialMatch = selectedMaterial === 'all' || selectedMaterial === 'All Materials' || product.material === selectedMaterial;
    const sizeMatch = selectedSize === 'all' || selectedSize === 'All Sizes' || product.availableSizes?.includes(selectedSize);
    const threadType = selectedThread === 'all' || selectedThread === 'All Threads' || product.specifications['Thread Type']?.includes(selectedThread);
    const pressureMatch = selectedPressure === 'all' || selectedPressure === 'All Threads' || product.specifications['Pressure Rating']?.includes(selectedPressure);
    return materialMatch && sizeMatch && threadType && pressureMatch;
  });

  const clearFilters = () => {
    setSelectedMaterial('all');
    setSelectedSize('all');
    setSelectedPressure('all');
    setSelectedThread('all');
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
          
          {/* Thread */}
          <div className={styles.filterGroup}>
            <div className={styles.filterHeader}>
              <div className={styles.filterLabel}>
                <svg className={styles.filterIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                Thread Type:
              </div>
            </div>
            <div className={styles.filterOptions}>
              {threads.map((thread) => (
                <button
                  key={thread}
                  className={`${styles.filterOption} ${(selectedThread === thread || (thread === 'All Threads' && selectedThread === 'all')) ? styles.active : ''}`}
                  onClick={() => setSelectedThread(thread === 'All Threads' ? 'all' : thread)}
                >
                  {thread}
                </button>
              ))}
            </div>
          </div>
          
          {/* Pressure */}
          <div className={styles.filterGroup}>
            <div className={styles.filterHeader}>
              <div className={styles.filterLabel}>
                <svg className={styles.filterIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                Pressure:
              </div>
            </div>
            <div className={styles.filterOptions}>
              {pressures.map((pressure) => (
                <button
                  key={pressure}
                  className={`${styles.filterOption} ${(selectedPressure === pressure || (pressure === 'All Pressures' && selectedPressure === 'all')) ? styles.active : ''}`}
                  onClick={() => setSelectedPressure(pressure === 'All Pressures' ? 'all' : pressure)}
                >
                  {pressure}
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
                {/* <p className={styles.productShortDescription}>{product.shortDescription}</p> */}

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

                {/* <div className={styles.productFeaturesPreview}>
                  {product.features.slice(0, 2).map((feature, idx) => (
                    <span key={idx} className={styles.featureTag}>{feature}</span>
                  ))}
                </div> */}

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
                    onClick={() => {
                      navigate("/contact");
                      closeProductModal()
                    }}
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
  );
}