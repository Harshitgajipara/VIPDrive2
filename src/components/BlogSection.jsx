import React from 'react';
import "../styles/BlogSection.css";

function BlogSection() {
  return (
    <div class="blog-section">
      <div class="main-card">
        <div class="main-image">
          <img src="images/blog1.jpg" alt="Blog 1"/>
        </div>
        <div class="main-content">
          <p>December 26, 2021 • Blog</p>
          <h2>Top 5 Luxury Cars for a Wedding</h2>
          <p>Discover the best luxury cars to make your wedding day unforgettable..</p>
          <button>Continue Reading →</button>
        </div>
      </div>
      <div class="sub-cards">
        <div class="sub-card">
          <div class="sub-image">
            <img src="images/blog2.jpg" alt="Blog 2"/>
          </div>
          <div class="sub-content">
            <p>December 26, 2021 • Blog</p>
            <h3>I would like to die on Mars. Just not on impact.</h3>
          </div>
        </div>
        <div class="sub-card">
          <div class="sub-image">
            <img src="images/blog3.jpg" alt="Blog 3"/>
          </div>
          <div class="sub-content">
            <p>December 26, 2021 • Blog</p>
            <h3>How to Choose the Perfect Wedding Car</h3>
          </div>
        </div>
        <div class="sub-card">
          <div class="sub-image">
            <img src="images/blog4.jpg" alt="Blog 4"/>
          </div>
          <div class="sub-content">
            <p>December 26, 2021 • Blog</p>
            <h3>Don't go through life, grow through life.</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogSection;
