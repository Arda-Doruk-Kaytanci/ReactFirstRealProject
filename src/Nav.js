import React from "react";
import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import Homepage from "./Homepage";
import Reserve from "./Reserve";
import ContactUS from "./ContactUs";
import Gobackarrow from "./Gobackarrow";
import MadeReserve from "./MadeReserve";
function Nav() {
    return (
        <div className="navBar">
            <BrowserRouter>
                <hr id="navLine"></hr>
                <nav>
                    <Gobackarrow />
                    <Link to="/" className="link">Homepage</Link>
                    <Link to="reserve" className="link">Reserve</Link>
                    <Link to="contact-us" className="link">Contact Us</Link>
                </nav>
                <hr id="navLine"></hr>
                <Routes>
                    <Route path="/" element={<Homepage />}></Route>
                    <Route path="reserve" element={<Reserve />}></Route>
                    <Route path="reserve/succesful" element={<MadeReserve/>}></Route>
                    <Route path="contact-us" element={<ContactUS />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Nav;