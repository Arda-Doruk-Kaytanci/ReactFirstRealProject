import React from "react";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import Homepage from "./Homepage";
function Nav(){
    return 
    (
    <>
    <nav>
        <Link to="/">Homepage</Link>
    </nav>
    <Routes>
        <Route path="/" element={<Homepage />}></Route>
    </Routes>
    </>
    );
}
export default Nav;