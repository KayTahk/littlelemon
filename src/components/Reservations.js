import { useState } from "react";



export default function Reservations() {

    const availableTimes = useState({
        dropdownvalue: "17:00"
    });

  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    phonenumber: "",
    date: "",
    time: "",
    numberofguests: "",
    occasion: "",
  });

  const handleChange = (event) => {
    setBookingForm({ ...bookingForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(bookingForm);
    setBookingForm({ name: "", email: "", phonenumber: "",date: "", time: "", numberofguests: "", occasion: "" });
  };

  return (
    <div className="form-container">
        <div className="form-header">
          <h3>Reserve a Table</h3>
          <h4>Little Lemon Restaurant Chicago</h4>
          <h5>1441 Tator Patch Road, Chicago, IL 60605</h5>
          <h6><b>Please Note:</b> For group reservations over 15 guests please call (555) 555-5555. Online reservations are for indoor dining only. Reservations will not be held after the 15 minute late arrival grace period.</h6>
        </div>
      <form onSubmit={handleSubmit}>
        <div className="Field">
        <p>Date:</p>
          <input
            type="date"
            name="date"
            placeholder="Date"
            value={bookingForm.date}
            onChange={handleChange}
          />
        </div>
        <div className="Field">
        <p>Time:</p>
          <select
            type="time"
            name="time"
            placeholder="Time"
            value={bookingForm.time}
            onChange={handleChange}
          >
            {availableTimes.map((time) => (
                <option value={time.dropdownvalue}
                >{time.dropdownvalue}</option>
                ))}</select>
        </div>
        <div className="Field">
        <p>Number of Guests:</p>
          <input
            type="number"
            name="numberofguests"
            placeholder="Number of Guests"
            value={bookingForm.numberofguests}
            onChange={handleChange}
          />
        </div>
        <div className="Field">
        <p>Occasion:</p>
          <select
            type="text"
            name="occasion"
            placeholder="Occasion"
            value={bookingForm.occasion}
            onChange={handleChange}>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Engagement">Engagement</option>
          </select>
        </div>
        <div className="Field">
        <p>Name:</p>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={bookingForm.name}
            onChange={handleChange}
          />
        </div>
        <div className="Field">
        <p>Email:</p>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={bookingForm.email}
            onChange={handleChange}
          />
        </div>
        <div className="Field">
        <p>Phone Number:</p>
          <input
            type="number"
            name="phonenumber"
            placeholder="Phone Number"
            value={bookingForm.phonenumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <button>Make Your Reservation</button>
        </div>
      </form>
    </div>
  );
}