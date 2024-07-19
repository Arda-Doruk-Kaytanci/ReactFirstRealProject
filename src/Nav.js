import React from "react";
import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import Homepage from "./Homepage";
import Reserve from "./Reserve";
function Nav() {
    return (
        <div>
            <BrowserRouter>
                <nav>
                    <Link to="/">Homepage</Link>
                    <Link to="/Reserve">Reserve</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Homepage />}></Route>
                    <Route path="/Reserve" element={<Reserve />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Nav;