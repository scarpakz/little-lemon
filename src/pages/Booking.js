import React, { useState } from 'react';
import BookingForm from "../components/BookingForm";

const Booking = () => {
    const [availableTimes] = useState([
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00'
    ]);

    return (
        <>
            <h1>Welcome to our Booking</h1>
            <BookingForm availableTimes={availableTimes}/>
        </>
    )
}
export default Booking;