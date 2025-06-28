import React from "react";
import "../styles/SubmitBtn.css";
import { Link } from "react-router-dom";

function SubmitBtn({ link }) {
  return (
    <button class="button-85" role="button">
      <Link to={link} className="read_more_btn">
        Submit
      </Link>
    </button>
  );
}

export default SubmitBtn;
