import React, { useState } from 'react';
import '../../styles/landing-page/TripBookingForm.css';
import SubmitBtn from './SubmitBtn';

function TripBookingForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="outer-form-container py-5">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="firstName" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control creative-input"
                id="firstName"
                name="firstName"
                placeholder="First"
                required
              />
            </div>
            <div className="form-group col-md-6">
              <input
                type="text"
                className="form-control creative-input"
                name="lastName"
                placeholder="Last"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control creative-input"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              className="form-control creative-input"
              id="phone"
              name="phone"
              placeholder="### ### ####"
            />
          </div>
          <h3>Travel Details</h3>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="departureDate" className="form-label">
                Departure Date
              </label>
              <input
                type="date"
                className="form-control creative-input"
                id="departureDate"
                name="departureDate"
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="returnDate" className="form-label">
                Return Date
              </label>
              <input
                type="date"
                className="form-control creative-input"
                id="returnDate"
                name="returnDate"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="departureTime" className="form-label">
                Preferred Departure Time
              </label>
              <input
                type="time"
                className="form-control creative-input"
                id="departureTime"
                name="departureTime"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="returnTime" className="form-label">
                Preferred Return Time
              </label>
              <input
                type="time"
                className="form-control creative-input"
                id="returnTime"
                name="returnTime"
              />
            </div>
          </div>
          <h3>Destination Details</h3>
          <div className="form-group">
            <label htmlFor="destination" className="form-label">
              Destination City/Country
            </label>
            <input
              type="text"
              className="form-control creative-input"
              id="destination"
              name="destination"
            />
          </div>
          <div className="form-group">
            <label htmlFor="hotelPreference" className="form-label">
              Hotel/Resort Preference
            </label>
            <input
              type="text"
              className="form-control creative-input"
              id="hotelPreference"
              name="hotelPreference"
            />
          </div>
          {submitted && (
            <p className="form-success-msg" role="alert">
              ✅ Your booking request has been submitted! We&apos;ll contact you shortly.
            </p>
          )}
          <div className="sbmt-btn">
            <SubmitBtn link="/car-list" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default TripBookingForm;
