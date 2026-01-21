import React, { useState } from 'react';
import styles from './request-quote.module.css';

export default function RequestQuote() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: '',
    quantity: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://steelcraft80.getform.com/xgnl2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '', email: '', phone: '', company: '',
          product: '', quantity: '', message: ''
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className={styles.quoteSection} id="request-quote">
        <div className={styles.quoteContainer}>
          {/* Header */}
          <div className={styles.quoteHeader}>
            <div className={styles.sectionLabel}>Get Started Today</div>
            <h2 className={styles.quoteTitle}>Contact Us</h2>
            <p className={styles.quoteSubtitle}>
              Fill out the form below or contact us directly for custom hydraulic fitting solutions
              tailored to your specific requirements.
            </p>
          </div>

          {/* Compact Layout Grid */}
          <div className={styles.compactLayout}>
            {/* Left Column - Contact Info */}
            <div className={styles.contactColumn}>
              <h3 className={styles.contactTitle}>Contact Us Directly</h3>
              <p className={styles.contactDescription}>
                Prefer to speak with us directly? Reach out via phone or email for
                immediate assistance with your hydraulic fitting requirements.
              </p>

              <div className={styles.contactGrid}>
                {/* Address */}
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>📍</div>
                  <div className={styles.contactDetails}>
                    <div className={styles.contactLabel}>Address</div>
                    <div className={styles.contactValue}>
                      <a>B-21, Janta Nagar (Shimlapuri / Street No-4, Guru Nanak Street), Gill Road,
                        Ludhiana, Punjab 141003, India</a>
                    </div>
                    <div className={styles.contactAction}>Mon-Sat: 8:00 AM – 9:00 PM</div>
                  </div>
                </div>

                {/* Phone */}
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>📞</div>
                  <div className={styles.contactDetails}>
                    <div className={styles.contactLabel}>Call / Message Us</div>
                    <div className={styles.contactValue}>
                      <a href="tel:+919368654656">9368654656</a>
                    </div>
                    <div className={styles.contactAction}>Available for calls and WhatsApp</div>
                  </div>
                </div>

                {/* Email */}
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>📧</div>
                  <div className={styles.contactDetails}>
                    <div className={styles.contactLabel}>Email Us</div>
                    <div className={styles.contactValue}>
                      <a href="mailto:steelcraft80@gmail.com">steelcraft80@gmail.com</a>
                    </div>
                    <div className={styles.contactAction}>Send your requirements or drawings</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Map and Info */}
            <div className={styles.mapColumn}>
              {/* Map */}
              <div className={styles.mapSection}>
                <div className={styles.contactLabel}>Location Map</div>
                <div className={styles.mapContainer}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.642669927318!2d75.85912817542416!3d30.868677874518998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a83a05dcccb9f%3A0xab6c488f6112b51e!2sSteel%20crafts(India)%7C%7CHydraulic%20hose%20Supplier(Hose%20fittings)!5e0!3m2!1sen!2sin!4v1768815926038!5m2!1sen!2sin"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className={styles.mapIframe}
                  ></iframe>
                </div>
                <div className={styles.contactAction}>
                  <a href="https://maps.app.goo.gl/eBuTXTggj1efAEL77?g_st=ic" target="_blank" rel="noopener noreferrer">
                    View on Google Maps
                  </a>
                </div>
              </div>

              {/* Additional Info */}
              <div className={styles.infoSection}>
                <h3 className={styles.infoTitle}>What Happens Next?</h3>
                <p className={styles.infoDescription}>
                  After submitting your request, our team will review your requirements and
                  provide a comprehensive quotation including product specifications, pricing,
                  and delivery timeline.
                </p>

                <div className={styles.infoFeatures}>
                  <div className={styles.infoFeature}>
                    <div className={styles.infoIcon}>✓</div>
                    <span className={styles.infoText}>24-Hour Response</span>
                  </div>
                  <div className={styles.infoFeature}>
                    <div className={styles.infoIcon}>✓</div>
                    <span className={styles.infoText}>Custom Solutions</span>
                  </div>
                  <div className={styles.infoFeature}>
                    <div className={styles.infoIcon}>✓</div>
                    <span className={styles.infoText}>Sample Available</span>
                  </div>
                  <div className={styles.infoFeature}>
                    <div className={styles.infoIcon}>✓</div>
                    <span className={styles.infoText}>Bulk Discounts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}