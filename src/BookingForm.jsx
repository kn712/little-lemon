import React, { useState } from 'react';

function BookingForm(){
    const[date, setDate] = useState("");
    const[time, setTime] = useState("");
    const[guests, setGuests] =  useState(1);
    const[occasion, setOccasion] = useState("");

    const availableTime = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Reseveration Details: ", {date, time, guests, occasion});
    };
    return (
        <form style="display: grid; max-width: 200px; gap: 20px">
             <label for="res-date">Choose date</label>
             <input type="date" id="res-date" value={date} onChange={(event) => setDate(event.target.value)} />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={(event)=>setTime(event.target.value)}>
                {availableTime.map((availableTime, index) => (
                    <option key={index} value={availableTime}>{availableTime}</option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(event) => setGuests(event.target.value)}/>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(event)=> setOccasion(event.target.value)}>
                <option value="Birthday">Birthday</option>
                <option vaklue="Anniversary">Anniversary</option>
            </select>
            <input type="submit" value="Make Your Reservation"/>

        </form>
    )
}