import React, { useState, useRef } from 'react';
import TestimonialProfile from './TestimonialProfile.jsx';
import '../../styles/landing-page/TestimonialsSection.css';

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialSliderRef = useRef(null);
  const isTransitioningRef = useRef(false);

  const testimonials = [
    {
      name: "Sophia Williams",
      image: "images/reviewer1.webp",
      text: "VIPDrive transformed my travel experience. The luxury and comfort were unparalleled, making every moment memorable."
    },
    {
      name: "Mike Walker",
      image: "images/reviewer1.webp",
      text: "From the moment I booked, VIPDrive exceeded my expectations. The service was impeccable and the ride was pure elegance."
    },
    {
      name: "Olivia Johnson",
      image: "images/reviewer5.webp",
      text: "I felt like royalty with VIPDrive. The attention to detail and customer care were simply outstanding."
    },
    {
      name: "Noah Smith",
      image: "images/reviewer3.webp",
      text: "Absolutely fantastic! VIPDrive offers a seamless blend of luxury and professionalism. Highly recommended!"
    },
    {
      name: "Emma Davis",
      image: "images/reviewer4.webp",
      text: "The best car rental experience I've ever had. VIPDrive's commitment to excellence is evident in every detail."
    },
    {
      name: "James Wilson",
      image: "images/reviewer2.webp",
      text: "VIPDrive redefines luxury travel. The service was flawless, and the car was a masterpiece of comfort and style."
    },
  ];

  // Clone 3 testimonials at the beginning and 3 at the end to enable seamless infinite scrolling
  const displayTestimonials = [
    ...testimonials.slice(-3),
    ...testimonials,
    ...testimonials.slice(0, 3)
  ];

  // Handle arrow clicks to scroll horizontally with true seamless infinite looping
  const scroll = (direction) => {
    if (isTransitioningRef.current) return;
    
    const slider = testimonialSliderRef.current;
    if (!slider) return;

    isTransitioningRef.current = true;

    let targetActiveIndex;
    if (direction === "left") {
      targetActiveIndex = activeIndex - 1;
    } else {
      targetActiveIndex = activeIndex + 1;
    }

    const targetRenderIndex = targetActiveIndex + 3;
    const cards = slider.children;
    
    if (cards && cards[targetRenderIndex]) {
      const activeCard = cards[targetRenderIndex];
      const cardOffsetLeft = activeCard.offsetLeft;
      const cardWidth = activeCard.clientWidth;
      const sliderWidth = slider.clientWidth;
      const targetScroll = cardOffsetLeft - (sliderWidth - cardWidth) / 2;

      slider.scrollTo({
        left: Math.max(0, targetScroll),
        behavior: "smooth"
      });

      // Update activeIndex immediately for UI class updates
      let finalActiveIndex = targetActiveIndex;
      if (targetActiveIndex < 0) {
        finalActiveIndex = testimonials.length - 1;
      } else if (targetActiveIndex >= testimonials.length) {
        finalActiveIndex = 0;
      }
      setActiveIndex(finalActiveIndex);

      // Wait for the smooth scroll transition to complete, then instantly jump back to original slide
      setTimeout(() => {
        if (targetActiveIndex < 0 || targetActiveIndex >= testimonials.length) {
          const originalRenderIndex = finalActiveIndex + 3;
          if (cards[originalRenderIndex]) {
            const origCard = cards[originalRenderIndex];
            const origOffsetLeft = origCard.offsetLeft;
            const origWidth = origCard.clientWidth;
            const origTargetScroll = origOffsetLeft - (sliderWidth - origWidth) / 2;
            
            slider.scrollTo({
              left: Math.max(0, origTargetScroll),
              behavior: "auto" // Instant jump, visually completely seamless!
            });
          }
        }
        isTransitioningRef.current = false;
      }, 500);
    } else {
      isTransitioningRef.current = false;
    }
  };

  // Align initially on mount
  React.useEffect(() => {
    const alignInitial = () => {
      const slider = testimonialSliderRef.current;
      if (!slider) return;
      const cards = slider.children;
      const initialRenderIndex = 3;
      if (cards && cards[initialRenderIndex]) {
        const activeCard = cards[initialRenderIndex];
        const cardOffsetLeft = activeCard.offsetLeft;
        const cardWidth = activeCard.clientWidth;
        const sliderWidth = slider.clientWidth;
        const targetScroll = cardOffsetLeft - (sliderWidth - cardWidth) / 2;

        slider.scrollTo({
          left: Math.max(0, targetScroll),
          behavior: "auto"
        });
      }
    };
    const timer = setTimeout(alignInitial, 150);
    return () => clearTimeout(timer);
  }, []);

  // Align on window resize
  React.useEffect(() => {
    const handleResize = () => {
      const slider = testimonialSliderRef.current;
      if (!slider) return;
      const cards = slider.children;
      const currentRenderIndex = activeIndex + 3;
      if (cards && cards[currentRenderIndex]) {
        const activeCard = cards[currentRenderIndex];
        const cardOffsetLeft = activeCard.offsetLeft;
        const cardWidth = activeCard.clientWidth;
        const sliderWidth = slider.clientWidth;
        const targetScroll = cardOffsetLeft - (sliderWidth - cardWidth) / 2;

        slider.scrollTo({
          left: Math.max(0, targetScroll),
          behavior: "auto"
        });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex]);

  return (
    <section className="testimonial-section" id="testimonial-section">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-slider" ref={testimonialSliderRef}>
        {displayTestimonials.map((testimonial, index) => {
          const isCenter = index === activeIndex + 3;
          const isLeft = index === activeIndex + 2;
          const isRight = index === activeIndex + 4;

          return (
            <TestimonialProfile
              key={index}
              name={testimonial.name}
              image={testimonial.image}
              text={testimonial.text}
              className={
                isCenter
                  ? 'testimonial-profile center'
                  : isLeft
                  ? 'testimonial-profile left'
                  : isRight
                  ? 'testimonial-profile right'
                  : 'testimonial-profile'
              }
            />
          );
        })}
      </div>

      <button
        className="arrow arrow-left"
        onClick={() => scroll('left')}
        aria-label="Previous testimonial"
      >
        &#8249;
      </button>
      <button
        className="arrow arrow-right"
        onClick={() => scroll('right')}
        aria-label="Next testimonial"
      >
        &#8250;
      </button>
    </section>
  );
};

export default TestimonialSection;