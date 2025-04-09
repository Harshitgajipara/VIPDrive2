import React from "react";
import "../styles/Title.css";

const Title = () => {
    return (
        <svg viewBox="0 0 1800 600">
          <symbol id="s-text">
            <text textAnchor="middle" x="50%" y="35%" className="webcoderskull">
                Arrive in Style, Leave in Luxury!
            </text>
            <text textAnchor="middle" x="50%" y="68%" className="text--line">
                Book Your Dream Car Now
            </text>
          </symbol>
    
          <g className="g-ants">
            <use xlinkHref="#s-text" className="webcoderskull-1"></use>
            <use xlinkHref="#s-text" className="webcoderskull-2"></use>
            <use xlinkHref="#s-text" className="webcoderskull-3"></use>
            <use xlinkHref="#s-text" className="webcoderskull-4"></use>
            <use xlinkHref="#s-text" className="webcoderskull-5"></use>
          </g>
        </svg>
      );
};

export default Title;
