import React from "react";
import "../styles/CarList.css";

function CarList() {
  return (
    <div className="carlist-wrapper">
      {/* Mobile phone frame container */}
      <div
        className="phone-frame d-block d-md-none"
        role="region"
        aria-label="Mobile car rental app view"
      >
        <div className="phone-content position-relative">
          <div className="top-icons" aria-hidden="true">
            {/* calendar icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-calendar3"
              viewBox="0 0 16 16"
            >
              <path d="M14 3h-1V1.5a.5.5 0 0 0-1 0V3H4V1.5a.5.5 0 0 0-1 0V3H2a2 2 0 0 0-2
                2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM0 5.5A.5.5 0 0 1 .5 5H15a.5.5 0 0 1
                .5.5v1H0v-1z"
              />
            </svg>
            {/* location icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 
                10zM8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
              />
            </svg>
          </div>

          <h2 className="location-header">Los Angeles, CA</h2>
          <p className="availability-text">200+ cars available</p>

          {/* Car 1 */}
          <article
            className="car-card"
            tabIndex="0"
            aria-label="Tesla Model S 2022, rated 4.95 stars with 175 reviews, 11.5 miles away, renting for 103 dollars per day, total estimated 820 dollars."
          >
            <div className="image-wrapper">
              <img
                className="car-image"
                src="https://tesla-cdn.thron.com/delivery/public/image/tesla/1db393ed-8cb3-4ed6-927f-2073e89aac54/bvlatuR/std/2880x1800/_25-Hero-D"
                alt="Tesla Model S 2022"
              />
            </div>
            <section className="car-info">
              <h3 className="car-title">Tesla Model S 2022</h3>
              <p className="distance" aria-label="Distance 11.5 miles">
                11.5 mi
              </p>
              <div className="rating" aria-label="Rating 4.95 stars">
                4.95
                <span className="star" aria-hidden="true">
                  ★
                </span>
                <span className="reviews">(175 reviews)</span>
              </div>
              <p
                className="price-day"
                aria-label="Price one hundred and three dollars per day"
              >
                $103/day
              </p>
              <a
                href="#"
                className="price-estimate"
                aria-label="Estimated total eight hundred twenty dollars"
              >
                $820 est. total
              </a>
            </section>
          </article>

          {/* Car 2 */}
          <article
            className="car-card"
            tabIndex="0"
            aria-label="Nissan GT-R 2020, top rated, rated 4.99 stars with 271 reviews, 17 miles away, renting for 420 dollars per day, total estimated 3550 dollars."
          >
            <div className="image-wrapper" style={{ position: "relative" }}>
              <span className="top-rated-badge">Top Rated</span>
              <img
                className="car-image"
                src="https://cdn.motor1.com/images/mgl/o1kzO/s1/nissan-gt-r-nismo-2020.webp"
                alt="Nissan GT-R 2020"
              />
            </div>
            <section className="car-info">
              <h3 className="car-title">Nissan GT-R 2020</h3>
              <p className="distance" aria-label="Distance 17 miles">
                17 mi
              </p>
              <div className="rating" aria-label="Rating 4.99 stars">
                4.99
                <span className="star" aria-hidden="true">
                  ★
                </span>
                <span className="reviews">(271 reviews)</span>
              </div>
              <p
                className="price-day"
                aria-label="Price four hundred twenty dollars per day"
              >
                $420/day
              </p>
              <a
                href="#"
                className="price-estimate"
                aria-label="Estimated total three thousand five hundred fifty dollars"
              >
                $3,550 est. total
              </a>
            </section>
          </article>
        </div>
      </div>

      {/* Desktop view container (shown on md and up) */}
      <div className="container d-none d-md-block" style={{ maxWidth: 900 }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h1 className="fw-bold mb-0" style={{ fontSize: "2.5rem" }}>
              Los Angeles, CA
            </h1>
            <small className="text-muted" style={{ fontSize: "1.2rem" }}>
              200+ cars available
            </small>
          </div>
          <div
            className="d-flex gap-4 fs-4 text-secondary align-items-center"
            aria-hidden="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="currentColor"
              className="bi bi-calendar3"
              viewBox="0 0 16 16"
            >
              <path d="M14 3h-1V1.5a.5.5 0 0 0-1 0V3H4V1.5a.5.5 0 0 0-1
                0V3H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM0 5.5A.5.5 0 0 1
                .5 5H15a.5.5 0 0 1 .5.5v1H0v-1z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="currentColor"
              className="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zM8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
            </svg>
          </div>
        </div>

        {/* Tesla Card */}
        <article
          className="car-card d-flex"
          tabIndex="0"
          aria-label="Tesla Model S 2022, rated 4.95 stars with 175 reviews, 11.5 miles away, renting for 103 dollars per day, total estimated 820 dollars."
        >
          <div
            className="image-wrapper"
            style={{ flex: "1 0 45%", height: "280px", borderRadius: "16px 0 0 16px", overflow: "hidden" }}
          >
            <img
              src="https://tesla-cdn.thron.com/delivery/public/image/tesla/1db393ed-8cb3-4ed6-927f-2073e89aac54/bvlatuR/std/2880x1800/_25-Hero-D"
              alt="Tesla Model S 2022"
              className="car-image"
            />
          </div>
          <section className="car-info position-relative" style={{ flex: "1 0 55%", padding: "30px 40px" }}>
            <h3 className="car-title fs-3">Tesla Model S 2022</h3>
            <p
              className="distance"
              aria-label="Distance 11.5 miles"
              style={{ position: "absolute", top: 28, right: 40, fontSize: "1.1rem" }}
            >
              11.5 mi
            </p>
            <div
              className="rating"
              aria-label="Rating 4.95 stars"
              style={{ fontSize: "1.1rem", color: "#0033cc", fontWeight: 700 }}
            >
              4.95
              <span
                className="star"
                aria-hidden="true"
                style={{ color: "#ffc107", fontSize: "1.3rem", marginLeft: 6 }}
              >
                ★
              </span>
              <span className="reviews" style={{ color: "#444", fontWeight: 500, marginLeft: 6 }}>
                (175 reviews)
              </span>
            </div>
            <p
              className="price-day"
              aria-label="Price one hundred and three dollars per day"
              style={{ position: "absolute", right: 40, bottom: 56, fontSize: "1.3rem", fontWeight: 700, margin: 0 }}
            >
              $103/day
            </p>
            <a
              href="#"
              className="price-estimate"
              aria-label="Estimated total eight hundred twenty dollars"
              style={{ position: "absolute", right: 40, bottom: 26, fontSize: "1rem", fontWeight: 600, color: "#007bff", textDecoration: "underline" }}
            >
              $820 est. total
            </a>
          </section>
        </article>

        {/* Nissan Card */}
        <article
          className="car-card d-flex"
          tabIndex="0"
          aria-label="Nissan GT-R 2020, top rated, rated 4.99 stars with 271 reviews, 17 miles away, renting for 420 dollars per day, total estimated 3550 dollars."
        >
          <div
            className="image-wrapper position-relative"
            style={{ flex: "1 0 45%", height: "280px", borderRadius: "16px 0 0 16px", overflow: "hidden" }}
          >
            <span className="top-rated-badge">Top Rated</span>
            <img
              src="https://cdn.motor1.com/images/mgl/o1kzO/s1/nissan-gt-r-nismo-2020.webp"
              alt="Nissan GT-R 2020"
              className="car-image"
            />
          </div>
          <section className="car-info position-relative" style={{ flex: "1 0 55%", padding: "30px 40px" }}>
            <h3 className="car-title fs-3">Nissan GT-R 2020</h3>
            <p
              className="distance"
              aria-label="Distance 17 miles"
              style={{ position: "absolute", top: 28, right: 40, fontSize: "1.1rem" }}
            >
              17 mi
            </p>
            <div
              className="rating"
              aria-label="Rating 4.99 stars"
              style={{ fontSize: "1.1rem", color: "#0033cc", fontWeight: 700 }}
            >
              4.99
              <span
                className="star"
                aria-hidden="true"
                style={{ color: "#ffc107", fontSize: "1.3rem", marginLeft: 6 }}
              >
                ★
              </span>
              <span className="reviews" style={{ color: "#444", fontWeight: 500, marginLeft: 6 }}>
                (271 reviews)
              </span>
            </div>
            <p
              className="price-day"
              aria-label="Price four hundred twenty dollars per day"
              style={{ position: "absolute", right: 40, bottom: 56, fontSize: "1.3rem", fontWeight: 700, margin: 0 }}
            >
              $420/day
            </p>
            <a
              href="#"
              className="price-estimate"
              aria-label="Estimated total three thousand five hundred fifty dollars"
              style={{ position: "absolute", right: 40, bottom: 26, fontSize: "1rem", fontWeight: 600, color: "#007bff", textDecoration: "underline" }}
            >
              $3,550 est. total
            </a>
          </section>
        </article>
      </div>
    </div>
  );
}

export default CarList;