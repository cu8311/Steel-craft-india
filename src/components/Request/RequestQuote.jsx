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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
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

          {/* Main Layout */}
          <div className={styles.quoteLayout}>
            {/* Contact Info */}
            <div className={styles.contactInfo}>
              <h3 className={styles.contactTitle}>Contact Us Directly</h3>
              <p className={styles.contactDescription}>
                Prefer to speak with us directly? Reach out via phone or email for
                immediate assistance with your hydraulic fitting requirements.
              </p>

              <div className={styles.contactMethods}>
                {/* Address */}
                <div className={styles.contactMethod}>
                  <div className={styles.contactIcon}>📍</div>
                  <div className={styles.contactDetails}>
                    <div className={styles.contactLabel}>Address</div>
                    <div className={styles.contactValue}>
                      <a>B-21, Janta Nagar (Shimlapuri / Street No-4, Guru Nanak Street), Gill Road,
                        Ludhiana, Punjab 141003, India</a>
                    </div>
                    <div className={styles.contactAction}>Monday to Saturday: 8:00 AM – 9:00 PM</div>
                  </div>
                </div>

                {/* Phone */}
                <div className={styles.contactMethod}>
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
                <div className={styles.contactMethod}>
                  <div className={styles.contactIcon}>📧</div>
                  <div className={styles.contactDetails}>
                    <div className={styles.contactLabel}>Email Us</div>
                    <div className={styles.contactValue}>
                      <a href="mailto:steelcraft80@gmail.com">steelcraft80@gmail.com</a>
                    </div>
                    <div className={styles.contactAction}>Send your requirements or drawings</div>
                  </div>
                </div>

                {/* Map */}
                <div className={styles.contactMethod}>
                  <div className={styles.contactIcon}>🗺️</div>
                  <div className={styles.contactDetails}>
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
                </div>
              </div>
            </div>

            {/* Form */}
            <div className={styles.formSection}>
              <h3 className={styles.formTitle}>Send Your Requirements</h3>

              <form className={styles.quoteForm} onSubmit={handleSubmit}>
                {/* Name & Email */}
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Name <span className={styles.required}>*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      className={styles.formInput}
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Email <span className={styles.required}>*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      className={styles.formInput}
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                {/* Phone & Company */}
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Phone <span className={styles.required}>*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className={styles.formInput}
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXXXXXXX"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Company Name</label>
                    <input
                      type="text"
                      name="company"
                      className={styles.formInput}
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company"
                    />
                  </div>
                </div>

                {/* Product & Quantity */}
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Product Type <span className={styles.required}>*</span>
                    </label>
                    <select
                      name="product"
                      className={styles.formSelect}
                      value={formData.product}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select product type</option>
                      <option value="hydraulic-adapter">Hydraulic Adapter</option>
                      <option value="bend-fittings">Bend Fittings</option>
                      <option value="fitting-sets">Fitting Sets</option>
                      <option value="nipples">Hydraulic Nipples</option>
                      <option value="nuts">Hydraulic Nuts</option>
                      <option value="caps">Hydraulic Caps</option>
                      <option value="custom">Custom Product</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Quantity</label>
                    <input
                      type="text"
                      name="quantity"
                      className={styles.formInput}
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder="e.g., 500 pieces"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>
                    Requirements / Message <span className={styles.required}>*</span>
                  </label>
                  <textarea
                    name="message"
                    className={styles.formTextarea}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe your requirements, specifications, or attach technical drawings..."
                    required
                  ></textarea>
                </div>

                {/* Submit */}
                <button type="submit" className={styles.formSubmit}>
                  Submit Request
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>

                <p className={styles.formNote}>
                  * We'll respond to your inquiry within 24 hours with a detailed quotation and rate list.
                </p>
              </form>
            </div>
          </div>

          {/* Additional Info */}
          <div className={styles.additionalInfo}>
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
      </section>
    </>
  );
}