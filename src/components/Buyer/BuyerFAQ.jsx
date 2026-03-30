import React, { useState } from 'react';
import styles from './buyer-faq.module.css';
import { Helmet } from 'react-helmet-async';

export default function BuyerFAQ() {
	const [activeIndex, setActiveIndex] = useState(null);

	const faqs = [
		{
			question: "What types of hydraulic fittings does Steel Craft India manufacture?",
			answer:
				"Steel Craft India manufactures hydraulic hose end fittings, hydraulic pipe fittings, and custom high-pressure hydraulic fittings used in industrial, transport, and hydraulic system applications.",
		},
		{
			question: "Do you accept bulk and custom hydraulic fittings orders?",
			answer:
				"Yes, we accept bulk orders as well as custom manufacturing based on samples or technical drawings. Our team ensures precise dimensions and compliance with industry standards.",
		},
		{
			question: "What is the minimum order quantity for hydraulic fittings?",
			answer:
				"Minimum order quantity depends on the product type and specifications. Please contact our team with your requirements for accurate MOQ details.",
		},
		{
			question: "How is quality ensured during hydraulic fittings manufacturing?",
			answer:
				"All hydraulic fittings undergo strict quality inspection, including dimensional checks and material verification, to ensure durability, leak-proof performance, and safety.",
		},
		{
			question: "Which industries use your hydraulic fittings?",
			answer:
				"Our hydraulic fittings are widely used in construction equipment, manufacturing machinery, transport vehicles, agricultural machinery, and industrial hydraulic systems.",
		},
		{
			question: "How can I place an order or enquire about products?",
			answer:
				"You can place an enquiry through our contact page or fill out the product enquiry form. Our team will respond promptly with pricing and technical details.",
		},
	];

	const toggleFAQ = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	// JSON-LD schema (must MATCH visible FAQs)
	const faqSchema = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": faqs.map((faq) => ({
			"@type": "Question",
			"name": faq.question,
			"acceptedAnswer": {
				"@type": "Answer",
				"text": faq.answer
			}
		}))
	};

	return (
		<>
			{/* JSON-LD for Google */}
			<Helmet>
				<script type="application/ld+json">
					{JSON.stringify(faqSchema)}
				</script>
			</Helmet>

			<section className={styles.faqSection}>
				<div className={styles.faqContainer}>
					{/* Header */}
					<div className={styles.faqHeader}>
						<div className={styles.faqTag}>Got Questions?</div>
						<h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
						<p className={styles.faqSubtitle}>
							Find answers to common questions about our hydraulic fittings,
							manufacturing process, and ordering procedures.
						</p>
					</div>

					{/* FAQ List */}
					<div className={styles.faqList}>
						{faqs.map((faq, index) => (
							<div
								key={index}
								className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''
									}`}
							>
								<div
									className={styles.faqQuestion}
									onClick={() => toggleFAQ(index)}
								>
									<h3 className={styles.questionText}>{faq.question}</h3>

									<div className={styles.faqIcon}>
										<svg
											viewBox="0 0 24 24"
											fill="none"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<line x1="12" y1="5" x2="12" y2="19" />
											<line x1="5" y1="12" x2="19" y2="12" />
										</svg>
									</div>
								</div>

								<div className={styles.faqAnswer}>
									<p className={styles.answerText}>{faq.answer}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}