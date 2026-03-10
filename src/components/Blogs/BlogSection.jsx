import React from 'react';
import { Link } from 'react-router-dom';
import styles from './blog-section.module.css';

export default function BlogSection() {
  const blogs = [
    {
      id: 'how-to-choose-hydraulic-fitting',
      title: 'How to Choose the Right Hydraulic Hose Fitting',
      excerpt: 'Selecting the correct hydraulic hose fitting is critical for system performance and safety. Learn about thread types, pressure ratings, and application considerations.',
      date: 'March 10, 2026',
      readTime: '5 min read',
      category: 'Technical Guide',
    },
    {
      id: 'hydraulic-fittings-materials',
      title: 'Hydraulic Fittings Materials: Steel vs Stainless Steel vs Brass',
      excerpt: 'Understanding material differences helps businesses choose the right fittings for performance, durability, and safety. Compare carbon steel, stainless steel, and brass.',
      date: 'March 8, 2026',
      readTime: '6 min read',
      category: 'Material Guide',
    },
    {
      id: 'hydraulic-manufacturing-india',
      title: 'Hydraulic Hose Fittings Manufacturing in India: Market & Growth',
      excerpt: 'India has become an important manufacturing hub for hydraulic components. Explore market size, major cities, and industry growth projections.',
      date: 'March 5, 2026',
      readTime: '8 min read',
      category: 'Industry Insights',
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.sectionTag}>Knowledge Base</div>
          <h2 className={styles.sectionTitle}>Latest Insights & Technical Guides</h2>
          <p className={styles.sectionDesc}>
              Expert insights on hydraulic fittings, materials, standards, and industry trends to help you make informed decisions.
            </p>
          </div>

        {/* Blog Grid */}
        <div className={styles.grid}>
          {blogs.map((blog) => (
            <article key={blog.id} className={styles.card}>
              <div className={styles.cardContent}>
                <div className={styles.meta}>
                  <span className={styles.category}>{blog.category}</span>
                  <span className={styles.date}>{blog.date}</span>
                </div>

                <h3 className={styles.cardTitle}>{blog.title}</h3>
                <p className={styles.cardExcerpt}>{blog.excerpt}</p>

                <div className={styles.cardFooter}>
                  <span className={styles.readTime}>{blog.readTime}</span>
                  <Link to={`/blog/${blog.id}`} className={styles.cardLink}>
                      Read Article
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

        {/* View All CTA */}
        {/* <div className={styles.cta}>
          <Link to="/blog" className={styles.viewAll}>
              View All Articles
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
          </Link>
        </div> */}
      </div>
    </section>
  );
}