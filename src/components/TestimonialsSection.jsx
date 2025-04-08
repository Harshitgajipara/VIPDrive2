import React from 'react';
import '../styles/TestimonialsSection.css';

function TestimonialsSection() {
  return (
    // <div class="testimonials-wrapper">
    //   <div class="testimonials-title">
    //     <h1>What Our Customers Say</h1>
    //   </div>
    //   <div class="testimonials-content">
    //     <div class="testimonial-card">
    //       <p>"The service was fantastic! I felt like a VIP the entire time."</p>
    //       <h5>- John Doe</h5>
    //     </div>
    //     <div class="testimonial-card">
    //       <p>"A truly luxurious experience. Highly recommend!"</p>
    //       <h5>- Jane Smith</h5>
    //     </div>
    //     <div class="testimonial-card">
    //       <p>"Best car rental service I've ever used. Will definitely be back!"</p>
    //       <h5>- Mark Johnson</h5>
    //     </div>
    //   </div>
    //   <div class="testimonials-button">
    //     <button>See More Testimonials</button>
    //   </div>
    //   <div class="testimonials-image">
    //     <img src="images/reviewer1.jpg" alt="Testimonials" class="testimonials-img"/>
    //   </div>
    //   <div class="testimonials-background">
    //     <img src="images/reviewer2.jpg" alt="Background" class="background-img"/>
    //   </div>
    // </div>



<div class="testimonials-section container mt-5">
        <h2 class="text-center mb-4">Customer Reviews</h2>
        <div class="row">
          <div class="col-md-4">
            <div class="reviewer">
              <img src="images/reviewer1.jpg" alt="Amit & Priya" class="reviewer-img"/>
              <div class="reviewer-info">
                <h5>Amit & Priya</h5>
                <p>⭐ 5.0 on 12 Jan, 2023</p>
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <blockquote class="blockquote">
              <p>"The Rolls-Royce made our wedding feel like a royal affair! Exceptional service!"</p>
            </blockquote>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="reviewer">
              <img src="images/reviewer2.jpg" alt="Rohan M." class="reviewer-img"/>
              <div class="reviewer-info">
                <h5>Rohan M.</h5>
                <p>⭐ 4.8 on 15 Feb, 2023</p>
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <blockquote class="blockquote">
              <p>"Booked an Audi A6 for my brother’s wedding. Smooth process & professional driver."</p>
            </blockquote>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="reviewer">
              <img src="images/reviewer3.jpg" alt="Sneha & Rahul" class="reviewer-img"/>
              <div class="reviewer-info">
                <h5>Sneha & Rahul</h5>
                <p>⭐ 4.9 on 20 Mar, 2023</p>
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <blockquote class="blockquote">
              <p>"The custom décor options were fantastic. Our car looked stunning!"</p>
            </blockquote>
          </div>
        </div>
      </div> 
  );
}

export default TestimonialsSection;
