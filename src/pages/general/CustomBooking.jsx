import React, { useEffect } from 'react';
import TripBookingForm from '../../components/landing-page/TripBookingForm';

function CustomBooking() {
  useEffect(() => {
    document.title = 'Custom Package Booking | VIPDrive';
  }, []);

  return <TripBookingForm />;
}

export default CustomBooking;
