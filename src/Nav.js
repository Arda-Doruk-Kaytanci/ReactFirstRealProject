import React from "react";
import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import Homepage from "./Homepage";
import Reserve from "./Reserve";
import ContactUS from "./ContactUs";
import Gobackarrow from "./Gobackarrow";
function Nav() {
    return (
        <div className="navBar">
            <BrowserRouter>
                <hr id="navLine"></hr>
                <nav>
                    <Gobackarrow />
                    <Link to="/" className="link">Homepage</Link>
                    <Link to="/reserve" className="link">Reserve</Link>
                    <Link to="/contactUS" className="link">Contact Us</Link>
                </nav>
                <hr id="navLine"></hr>
                <Routes>
                    <Route path="/" element={<Homepage />}></Route>
                    <Route path="/reserve" element={<Reserve />}></Route>
                    <Route path="/contactUs" element={<ContactUS />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Nav;