import React, { useState } from "react";
import { isValidPhoneNumber } from "libphonenumber-js";
function Reserve() {
    var validator = require("email-validator")
    const [diners, setDiners] = useState(1)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("9:00 - 11.00")
    const clearForm = () => {
        setFirstName("")
        setLastName("")
        setDate("")
        setDiners(1)
        setEmail("")
        setPhoneNumber("")
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Reservation Made")
        clearForm();
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor="FirstNameInput">First Name*:<br></br>
                        <input
                            id="FirstNameInput"
                            type="text"
                            value={firstName}
                            autoComplete="on"
                            placeholder="First Name"
                            required
                            onChange={(e) => {
                                setFirstName(e.target.value)
                            }}
                        >
                        </input>
                    </label>
                    <label htmlFor="LastNameInput">Last Name*:<br></br>
                        <input
                            id="LastNameInput"
                            type="text"
                            value={lastName}
                            autoComplete="on"
                            required
                            placeholder="Last Name"
                            onChange={(e) => {
                                setLastName(e.target.value)
                            }}
                        >
                        </input>
                    </label>
                    <label htmlFor="Email">E-mail*:<br></br>
                        <input
                            id="Email"
                            type="text"
                            autoComplete="on"
                            placeholder="E-mail"
                            value={email}
                            required
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            onBlur={() => {
                                if (!validator.validate(email) && email !== "") {
                                    setEmail("");
                                    return alert("Please enter a valid email")
                                }
                            }}
                        >
                        </input>
                    </label>
                    <label htmlFor="PhoneNumber">Phone Number*:<br></br>
                        <input
                            id="PhoneNumber"
                            placeholder="Phone Number"
                            type="tel"
                            autoComplete="on"
                            value={phoneNumber}
                            required
                            onChange={(e) => {
                                setPhoneNumber(e.target.value)
                            }}
                            onBlur={() => {
                                if (!isValidPhoneNumber(phoneNumber) && phoneNumber !== "") {
                                    setPhoneNumber("")
                                    return alert("Please enter a valid phone number with country specifier with plus.")
                                }
                            }}
                        >
                        </input>
                    </label>
                    <label htmlFor="Diners">Number of Diners* {diners}:<br></br>
                        <input
                            id="Diners"
                            type="range"
                            max={10}
                            autoComplete="on"
                            min={1}
                            value={diners}
                            required
                            onChange={(e) => {
                                setDiners(e.target.value);
                            }}
                        >
                        </input>
                    </label>
                    <label htmlFor="timeSelect">Time*:<br></br>
                        <select id="timeSelect" required onChange={(e) => { setTime(e.target.value) }} value={time}>
                            <option>9:00 - 11.00</option>
                            <option>12:00 - 14:00</option>
                            <option>15:00 - 17:00</option>
                            <option>18:00 - 20:00</option>
                        </select>
                    </label>
                    <label htmlFor="Date">Date*:<br></br>
                        <input
                            id="Date"
                            type="date"
                            autoComplete="off"
                            value={date}
                            required
                            onChange={(e) => {
                                setDate(e.target.value);
                            }}
                            onBlur={() => {
                                let dateObj = new Date();
                                let dateArray = [
                                    dateObj.getFullYear(),
                                    dateObj.getMonth() + 1,
                                    dateObj.getDate()
                                ];
                                let datearr = date.split("-")
                                for (let i = 0; i < 3; i++) {
                                    let diffrence = dateArray[i] - datearr[i]
                                    if (diffrence > 0) {
                                        setDate("");
                                        return alert("Please enter a valid date.")
                                    }
                                    else if (diffrence < 0) { return true }
                                }
                            }}
                        >
                        </input>
                    </label>
                    <br></br>
                    <button
                        className="submitBtn"
                        type="submit"
                    >Submit
                    </button>
                </fieldset>
            </form>
        </>
    )
}
export default Reserve;