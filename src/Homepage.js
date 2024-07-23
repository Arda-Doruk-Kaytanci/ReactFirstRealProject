import React from "react";
import Logo from "./images/LittleLemonLogo1.png"
import AdImg from "./images/AdImg.jpg"
function Homepage() {
    return (
        <div className="Homepage">
            <section className="logoSection">
                <img src={Logo} alt="Logo of Little Lemon Restaurant" className="restaurantLogo" />
            </section>
            <section className="adSection">
                <img src={AdImg} alt="A man holding plate with food on top of it" className="adImg" />
                <p className="adTextp">Welcome to Little Lemon Restaurants little website. Ordering feature is under development but you can still reserve a table. We wish you a great time</p>
            </section>
            <label id="dishFotoLabel" htmlFor="dishFotoHolder">Featured Items:
                <section id="dishFotoHolder">
                    <img src={Logo} alt="A popular dish" />
                    <img src={Logo} alt="A popular dish" />
                    <img src={Logo} alt="A popular dish" />
                    <img src={Logo} alt="A popular dish" />
                </section>
            </label>
        </div>
    )
}
export default Homepage;