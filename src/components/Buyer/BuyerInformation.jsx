import React from 'react';
import styles from './buyer-information.module.css';

export default function BuyerInformation() {
  return (
    <section className={styles.buyerSection} id="buyer-information">
      <div className={styles.buyerContainer}>

        {/* Header */}
        <div className={styles.buyerHeader}>
          <div className={styles.buyerTag}>For Buyers & Traders</div>
          <h2 className={styles.buyerTitle}>Buying Process</h2>
          <p className={styles.buyerSubtitle}>
            If you want to purchase hydraulic fittings from Steel Craft India, our process is simple, fast, and customer-focused.
          </p>
        </div>

        {/* Process Steps */}
        <div className={styles.processSteps}>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>1</div>
            <h3 className={styles.stepTitle}>Send Us the Sample</h3>
            <p className={styles.stepDescription}>
              Share your physical sample or technical details of the hydraulic fitting you require.
            </p>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <h3 className={styles.stepTitle}>Design & Size Approval</h3>
            <p className={styles.stepDescription}>Our technical team will:</p>
            <div className={styles.stepFeatures}>
              <div className={styles.stepFeature}>Analyze the design</div>
              <div className={styles.stepFeature}>Confirm size and specifications</div>
              <div className={styles.stepFeature}>Discuss custom requirements</div>
            </div>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <h3 className={styles.stepTitle}>Custom Manufacturing</h3>
            <p className={styles.stepDescription}>
              Once approved, we manufacture exactly as per your needs, ensuring:
            </p>
            <div className={styles.stepFeatures}>
              <div className={styles.stepFeature}>High quality</div>
              <div className={styles.stepFeature}>Precise dimensions</div>
              <div className={styles.stepFeature}>Industry standards compliance</div>
            </div>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>4</div>
            <h3 className={styles.stepTitle}>Dispatch</h3>
            <p className={styles.stepDescription}>
              After quality inspection, the products are safely packed and dispatched on time.
            </p>
          </div>
        </div>

        {/* Distributor CTA */}
        <div className={styles.distributorCta}>
          <h3 className={styles.distributorTitle}>Become a Distributor</h3>
          <p className={styles.distributorDescription}>
            Steel Craft India invites serious partners to become authorized distributors of hydraulic hose fittings.
          </p>

          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className={styles.distributorButton}
          >
            Apply Now
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

        {/* Product Enquiry */}
        <div className={styles.enquirySection}>
          <div className={styles.enquiryHeader}>
            <h3 className={styles.enquiryTitle}>Product Enquiry</h3>
            <p className={styles.enquirySubtitle}>
              If you would like to enquire about any product, please fill out the form below.
            </p>
          </div>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfKElyM_wrT461lyiOAt2eF0M6pgNxAAe-HktFdp73GHUvg0g/viewform?embedded=true"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.enquiryButton}
          >
            Fill Enquiry Form
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 11l3 3L22 4" />
              <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
