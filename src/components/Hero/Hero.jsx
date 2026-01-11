import React, { useState, useEffect } from 'react';
import styles from './hero.module.css';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [imageLoaded, setImageLoaded] = useState({});

  // Flexible slide data structure - easy to add/remove slides
  const slides = [
    {
      id: 1,
      image: '/1.png',
      title: "Precision Hydraulic Fittings",
      subtitle: "Industrial Grade Components",
      description: "Comprehensive range of hydraulic nuts, nipples, and male fittings manufactured with precision machining for superior performance",
      features: ["High-Pressure Rated", "Corrosion Resistant", "ISO Certified"],
      cta: "View Products",
      ctaLink: "#products"
    },
    {
      id: 2,
      image: '/2.png',
      title: "Quality You Can Trust",
      subtitle: "SCI Branded Excellence",
      description: "Every component undergoes rigorous testing and quality inspection to ensure reliability in demanding industrial applications",
      features: ["Pressure Tested", "Leak-Proof Design", "OEM Approved"],
      cta: "Quality Standards",
      ctaLink: "#quality"
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) {
			const timer = setInterval(() => {
				setIsAutoPlaying(true);
			}, 4000);
			
			return () => clearInterval(timer);
		};
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 12000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 12000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 12000);
  };

  const handleImageLoad = (slideId) => {
    setImageLoaded(prev => ({ ...prev, [slideId]: true }));
  };

  return (
    <>
      <div className={styles.heroImageSlider}>
        {/* Slides */}
        <div className={styles.slideContainer}>
          {slides.map((slide, index) => (
            <div 
              key={slide.id} 
              className={`${styles.slide} ${currentSlide === index ? 'active' : ''}`}
            >
              {/* Background Image or Gradient */}
              {slide.image ? (
                <>
                  {!imageLoaded[slide.id] && (
                    <div className={styles.imageLoading}>
                      <div className={styles.loadingSpinner}></div>
                    </div>
                  )}
                  <div 
                    className={styles.slideBackground}
                    style={{
                      backgroundImage: `url(${slide.image})`,
                      opacity: imageLoaded[slide.id] ? 1 : 0
                    }}
                  >
                    <img 
                      src={slide.image} 
                      alt=""
                      style={{ display: 'none' }}
                      onLoad={() => handleImageLoad(slide.id)}
                    />
                  </div>
                </>
              ) : (
                <div className={`${styles.slideBackground} noImage`}></div>
              )}

              {/* Overlay */}
              <div className={styles.slideOverlay}></div>

              {/* Content */}
              <div className={styles.slideContentWrapper}>
                <div className={styles.slideContent}>
                  <div className={styles.slideContentInner}>
                    <h1 className={styles.slideTitle}>{slide.title}</h1>
                    <p className={styles.slideSubtitle}>{slide.subtitle}</p>
                    <p className={styles.slideDescription}>{slide.description}</p>
                    
                    {/* Features */}
                    {slide.features && slide.features.length > 0 && (
                      <div className={styles.slideFeatures}>
                        {slide.features.map((feature, idx) => (
                          <span key={idx} className={styles.featureBadge}>
                            {feature}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* CTA */}
                    <a 
                      href={slide.ctaLink}
                      className={styles.slideCta}
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(slide.ctaLink)?.scrollIntoView({ 
                          behavior: 'smooth' 
                        });
                      }}
                    >
                      {slide.cta}
                      <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrow Controls */}
        <button 
          className={`${styles.sliderArrow} ${styles.prev}`}
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button 
          className={`${styles.sliderArrow} ${styles.next}`}
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        {/* Navigation Indicators */}
        <div className={styles.sliderControls}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.navIndicator} ${currentSlide === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}