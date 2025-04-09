import React, { useState, useRef } from "react";
import TestimonialProfile from "../components/TestimonialProfile.jsx";
import "../styles/TestimonialsSection.css";

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialSliderRef = useRef(null);

  const testimonials = [
    { name: "John Doe", image: "images/reviewer1.jpg", text: "This is an amazing product!" },
    { name: "Jane Smith", image: "images/reviewer2.jpg", text: "I had an excellent experience!" },
    { name: "Michael Johnson", image: "images/reviewer3.jpg", text: "I highly recommend this service!" },
    { name: "Emily Davis", image: "images/reviewer3.jpg", text: "Absolutely fantastic!" },
    { name: "John Doe", image: "images/reviewer1.jpg", text: "This is an amazing product!" },
    { name: "Jane Smith", image: "images/reviewer2.jpg", text: "I had an excellent experience!" },
    { name: "Michael Johnson", image: "images/reviewer3.jpg", text: "I highly recommend this service!" },
    { name: "Emily Davis", image: "images/reviewer3.jpg", text: "Absolutely fantastic!" },
  ];

  // Handle arrow clicks to scroll horizontally
  const scroll = (direction) => {
    const slider = testimonialSliderRef.current;
    let newIndex = activeIndex;

    if (direction === "left") {
      newIndex = activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
    } else {
      newIndex = activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1;
    }

    setActiveIndex(newIndex);

    // Calculate the scroll amount based on direction
    const scrollAmount = direction === "left" ? -400 : 400;
    slider.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="testimonial-section">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-slider" ref={testimonialSliderRef}>
        {testimonials.map((testimonial, index) => (
          <TestimonialProfile
            key={index}
            name={testimonial.name}
            image={testimonial.image}
            text={testimonial.text}
            className={
              index === activeIndex
                ? "testimonial-profile center" // This will be the largest
                : index === activeIndex - 1 || (activeIndex === 0 && index === testimonials.length - 1)
                ? "testimonial-profile left" // This will be the smaller profile on the left
                : index === activeIndex + 1 || (activeIndex === testimonials.length - 1 && index === 0)
                ? "testimonial-profile right" // This will be the smaller profile on the right
                : "testimonial-profile"
            }
          />
        ))}
      </div>

      {/* Left Arrow */}
      <div className="arrow arrow-left" onClick={() => scroll("left")}>
        &lt;
      </div>

      {/* Right Arrow */}
      <div className="arrow arrow-right" onClick={() => scroll("right")}>
        &gt;
      </div>
    </div>
  );
};

export default TestimonialSection;
