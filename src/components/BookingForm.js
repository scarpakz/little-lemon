import React, {useState} from 'react';

const BookingForm = ({availableTimes}) => {
    const [date, setDate] = useState();
    const [occasionOptions] = useState([
        'Birthday',
        'Anniversary'
    ])

    const [selectedTime, setSelectedTime] = useState("");
    const [guests, setGuests] = useState();
    const [selectedOccasion, setSelectedOccasion] = useState();

    const handleTime = (e) => {
        setSelectedTime(e.target.value);
    }
    const handleOccasion = (e) => {
        setSelectedOccasion(e.target.value);
    }
    const handleDate = (e) => { 
        setDate(e.target.value);
    }

    return (
        <>
            <form style={{display: 'grid', maxWidth: '200px', gap: '20px'}}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={date} onChange={handleDate}/>
                <label htmlFor="res-time">Choose time</label>
                <select value={selectedTime} onChange={handleTime} id="res-time" multiple={false}>
                    {
                        availableTimes.map((time, index) => (
                            <option key={index}>{time}</option>
                        ))
                    }
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" value={guests} placeholder="1" min="1" max="10" id="guests" />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={selectedOccasion} onChange={handleOccasion}>
                    {
                        occasionOptions.map((occasion, index) => (
                            <option key={index}>{occasion}</option>
                        ))
                    }
                </select>
                <input type="submit" value="Make Your reservation" />
            </form>
        </>
    )
}

export default BookingForm;