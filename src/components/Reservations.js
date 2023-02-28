import { useState, useEffect } from "react";



export default function Reservations(props) {

  const finalTime = (
    props.availableTimes.map((times) => (
      <option>{times}</option>))
  );

  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    phonenumber: "",
    time: "",
    date: "",
    numberofguests: "1",
    occasion: "none",
  });


  const handleChange = (event) => {
    setBookingForm({ ...bookingForm, [event.target.name]: event.target.value });
    props.updateTimes({...bookingForm, [event.target.name]: event.target.value}.date);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBookingForm({ name: "", email: "", phonenumber: "", time: "", date: "", numberofguests: "", occasion: "" });
    props.submitForm(bookingForm);
  };

  const [isDateValid, setIsDateValid] = useState(false);

  useEffect(() => {
    setIsDateValid(bookingForm.date ? true : false);
  }, [bookingForm.date]);

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(bookingForm.time ? true : false);
  }, [bookingForm.time]);

  return (
    <div className="form-container">
        <div className="form-header">
          <div className="form-header-text">
          <h3>Reserve a Table</h3>
          <h4>Little Lemon Restaurant Chicago</h4>
          <h5>1441 Tator Patch Road, Chicago, IL 60605</h5>
          <h6><b>Please Note:</b> For group reservations over 15 guests please call (555) 555-5555. Online reservations are for indoor dining only. Reservations will not be held after the 15 minute late arrival grace period.</h6>
          </div>
        </div>
      <form onSubmit={handleSubmit}>
        <div className="Field">
        <p>Date:</p>
        <input
          type="date"
          name="date"
          data-testid="date"
          required
          value={bookingForm.date}
          onChange={handleChange}
        ></input>
        </div>
        <div className={isDateValid ? "field" : "fieldHidden"}>
        <p>Time:</p>
          <select
            type="text"
            name="time"
            data-testid="time"
            required
            value={bookingForm.time}
            onChange={handleChange}>
              <option>{!isValid && <p>Choose a time to continue</p>}</option>
              {finalTime}</select>
        </div>
        <div className={isValid ? "field" : "fieldHidden"}>
        <p>Number of Guests:</p>
          <input
            type="number"
            name="numberofguests"
            required
            min={1}
            max={100}
            value={bookingForm.numberofguests}
            onChange={handleChange}
          />
        </div>
        <div className={isValid ? "field" : "fieldHidden"}>
        <p>Occasion:</p>
          <select
            type="text"
            name="occasion"
            placeholder="None"
            defaultValue="None"
            value={bookingForm.occasion}
            onChange={handleChange}>
            <option value="None">None</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Engagement">Engagement</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className={isValid ? "field" : "fieldHidden"}>
        <p>Name:</p>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={bookingForm.name}
            onChange={handleChange}
          />
        </div>
        <div className={isValid ? "field" : "fieldHidden"}>
        <p>Email:</p>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={bookingForm.email}
            onChange={handleChange}
          />
        </div>
        <div className={isValid ? "field" : "fieldHidden"}>
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
          <button disabled={!isValid}>Make Your Reservation</button>
        </div>
      </form>
    </div>
  );
}