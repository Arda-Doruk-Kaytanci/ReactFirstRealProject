import React, { useEffect, useState } from "react";
import { isValidPhoneNumber } from "libphonenumber-js";
import fakeAPI from "./fakeAPI";
import { useNavigate } from "react-router";

function Reserve() {
    var navigator = useNavigate();
    const OptionGenerator = () => {
        return (
            <>
                {avaiableTimes.map((item, index) => (
                    <option key={index}>{item}</option>
                ))}
            </>
        )
    }
    const TableGenerator = () => {
        switch (place) {
            case ("Near Toilet"):
                return (
                    <>
                        <option>A1</option>
                        <option>B2</option>
                    </>
                )
            case ("Near Window"):
                return (
                    <>
                        <option>B3</option>
                        <option>C1</option>
                        <option>A2</option>
                        <option>A3</option>
                    </>
                )
                case ("Near Playground"):
                    return (
                        <>
                            <option>B1</option>
                            <option>C2</option>
                            <option>C3</option>
                        </>
                    )
                case ("Near Exit"):
                    return (
                        <>
                            <option>D1</option>
                            <option>D2</option>
                        </>
                    )
                default: return <></>
        }
    }
    var validator = require("email-validator")
    const [diners, setDiners] = useState(1)
    const [table, setTable] = useState("")
    const [place, setPlace] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [date, setDate] = useState("")
    const [avaiableTimes, setAvaiableTimes] = useState([])
    const [time, setTime] = useState()
    const clearForm = () => {
        setFirstName("")
        setLastName("")
        setDate("")
        setDiners(1)
        setEmail("")
        setPhoneNumber("")
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        fakeAPI.gatherAPI(time, table)
        navigator("succesful")
        clearForm();
    }
    useEffect(() => {
        console.log(date.split("-"))
        setAvaiableTimes(fakeAPI.fetchAPI(date))
    }, [date])
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
                                console.log(avaiableTimes)
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
                    <label htmlFor="timeSelect">Time*:<br></br>
                        <select id="timeSelect" required onChange={(e) => { setTime(e.target.value); console.log(place) }} value={time}>
                            <OptionGenerator></OptionGenerator>
                        </select>
                    </label>
                    <label htmlFor="tableorder">Table*:<br></br>
                        <select id="tableorder" required onChange={(e) => { setPlace(e.target.value); }} value={place}>
                            <option>--- Select Place ---</option>
                            <option>Near Window</option>
                            <option>Near Toilet</option>
                            <option>Near Playground</option>
                            <option>Near Exit</option>
                        </select>
                    </label>
                    <label>
                        <select id="table" required onChange={(e) => { setTable(e.target.value) }} value={table}>
                            <option value={""}>--- Select Table ---</option>
                            <TableGenerator></TableGenerator>
                        </select>
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