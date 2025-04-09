import React from "react";
import "../styles/Card.css";

function Card({ title, description, imageUrl, link }) {
  return (
    <div
      className="solution_card"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="hover_color_bubble"></div>

      <div className="solu_title">
        <h3>{title}</h3>
      </div>
      <div className="solu_description">
        <p>{description}</p>
        <button type="button" className="read_more_btn">
          BOOK NOW
        </button>
      </div>
    </div>
  );
}

export default Card;
