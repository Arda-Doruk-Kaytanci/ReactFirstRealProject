import React from "react";
import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import Homepage from "./Homepage";
import Reserve from "./Reserve";
import ContactUS from "./ContactUs";
import GoBackArrow from "./GoBackArrow";
function Nav() {
    return (
        <div className="navBar">
            <BrowserRouter>
                <nav>
                    <Link to="/">Homepage</Link>
                    <Link to="/Reserve">Reserve</Link>
                    <Link to="/ContactUS">Contact Us</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Homepage />}></Route>
                    <Route path="/Reserve" element={<Reserve />}></Route>
                    <Route path="/ContactUs" element={<ContactUS />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Nav;