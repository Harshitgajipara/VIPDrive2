import React from "react";
import { Link } from "react-router-dom";
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
        <Link to={link} className="read_more_btn">
          BOOK NOW
        </Link>
      </div>
    </div>
  );
}

export default Card;
