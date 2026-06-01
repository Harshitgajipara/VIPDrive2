import React from "react";
import { Link } from "react-router-dom";
import "../../styles/landing-page/Card.css";

function Card({ title, description, imageUrl, link, external }) {
  return (
    <div className="solution_card">
      <div className="hover_color_bubble"></div>
      
      <div className="card__image-container">
        <img className="card__image" src={imageUrl} alt={title} loading="lazy" />
      </div>
      
      <svg className="card__svg" viewBox="0 0 800 500" aria-hidden="true">
        <path 
          d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" 
          stroke="transparent" 
          fill="#12151f" 
          className="card__svg-path"
        />
        <path 
          className="card__line" 
          d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" 
          stroke="#c9a84c" 
          strokeWidth="4" 
          fill="transparent"
        />
      </svg>
    
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        <p className="card__desc">{description}</p>
        {external ? (
          <a href={link} className="read_more_btn">
            <span>BOOK NOW</span>
          </a>
        ) : (
          <Link to={link} className="read_more_btn" prefetch="intent">
            <span>BOOK NOW</span>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Card;
