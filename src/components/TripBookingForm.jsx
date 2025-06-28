import React from "react";
import "../styles/TripBookingForm.css";
import SubmitBtn from "../components/SubmitBtn";

function TripBookingForm() {
  return (
    <div class="outer-form-container py-5">
      <div class="form-container">
        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="firstName" class="form-label">
                Full Name
              </label>
              <input
                type="text"
                class="form-control creative-input"
                id="firstName"
                placeholder="First"
              />
            </div>
            <div class="form-group col-md-6">
              <input
                type="text"
                class="form-control creative-input"
                placeholder="Last"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="email" class="form-label">
              Email Address
            </label>
            <input
              type="email"
              class="form-control creative-input"
              id="email"
            />
          </div>
          <div class="form-group">
            <label for="phone" class="form-label">
              Phone Number
            </label>
            <input
              type="text"
              class="form-control creative-input"
              id="phone"
              placeholder="### ### ####"
            />
          </div>
          <h3>Travel Details</h3>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="departureDate" class="form-label">
                Departure Date
              </label>
              <input
                type="date"
                class="form-control creative-input"
                id="departureDate"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="returnDate" class="form-label">
                Return Date
              </label>
              <input
                type="date"
                class="form-control creative-input"
                id="returnDate"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="departureTime" class="form-label">
                Preferred Departure Time
              </label>
              <input
                type="time"
                class="form-control creative-input"
                id="departureTime"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="returnTime" class="form-label">
                Preferred Return Time
              </label>
              <input
                type="time"
                class="form-control creative-input"
                id="returnTime"
              />
            </div>
          </div>
          <h3>Destination Details</h3>
          <div class="form-group">
            <label for="destination" class="form-label">
              Destination City/Country
            </label>
            <input
              type="text"
              class="form-control creative-input"
              id="destination"
            />
          </div>
          <div class="form-group">
            <label for="hotelPreference" class="form-label">
              Hotel/Resort Preference
            </label>
            <input
              type="text"
              class="form-control creative-input"
              id="hotelPreference"
            />
          </div>
          <div class="sbmt-btn">
            <SubmitBtn link="/car-list" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default TripBookingForm;
