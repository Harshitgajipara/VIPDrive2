import React, { useState, useRef } from "react";
import TestimonialProfile from "../components/TestimonialProfile.jsx";
import "../styles/TestimonialsSection.css";

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialSliderRef = useRef(null);

  const testimonials = [
    { 
      name: "Sophia Williams", 
      image: "images/reviewer1.jpg", 
      text: "VIPDrive transformed my travel experience. The luxury and comfort were unparalleled, making every moment memorable." 
    },
    { 
      name: "Mike Walker", 
      image: "images/reviewer1.jpg", 
      text: "From the moment I booked, VIPDrive exceeded my expectations. The service was impeccable and the ride was pure elegance." 
    },
    { 
      name: "Olivia Johnson", 
      image: "images/reviewer5.jpg", 
      text: "I felt like royalty with VIPDrive. The attention to detail and customer care were simply outstanding." 
    },
    { 
      name: "Noah Smith", 
      image: "images/reviewer3.jpg", 
      text: "Absolutely fantastic! VIPDrive offers a seamless blend of luxury and professionalism. Highly recommended!" 
    },
    { 
      name: "Emma Davis", 
      image: "images/reviewer4.jpg", 
      text: "The best car rental experience I've ever had. VIPDrive's commitment to excellence is evident in every detail." 
    },
    { 
      name: "James Wilson", 
      image: "images/reviewer2.jpg", 
      text: "VIPDrive redefines luxury travel. The service was flawless, and the car was a masterpiece of comfort and style." 
    },
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