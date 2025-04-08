import React from 'react';
import '../styles/Card.css';

function Card({ title, description, imageUrl, link }) {
  return (
    <div className="card custom-card">
      <img src={imageUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={link} className="btn btn-primary">Book Now</a>
      </div>
    </div>
  );
}

export default Card;
