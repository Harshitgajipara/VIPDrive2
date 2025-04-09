import React from "react";
import "../styles/TestimonialProfile.css";

const TestimonialProfile = ({ name, image, text }) => {
  return (
    <div className="testimonial-profile">
      <div className="profile-img">
        <img src={image} alt={name} />
      </div>
      <div className="testimonial-text">
        <p>"{text}"</p>
        <h4>- {name}</h4>
      </div>
    </div>
  );
};

export default TestimonialProfile;
