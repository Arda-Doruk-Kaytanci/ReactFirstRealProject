import React from "react";
import Logo from "./images/LittleLemonLogo1.png"
import Dish1 from "./images/salad1.jpg"
import Dish2 from "./images/fish.jpg"
import Dish3 from "./images/dish2.jpg"
import Dish4 from "./images/pasta.jpg"
import AdImg from "./images/AdImg.jpg"
function Homepage() {
    return (
        <div className="Homepage">
            <section className="logoSection">
                <img src={Logo} alt="Logo of Little Lemon Restaurant" className="restaurantLogo" id="restaurantlogoo" />
            </section>
            <section className="adSection">
                <hr className="hpLine"></hr>
                <img src={AdImg} alt="A man holding plate with food on top of it" className="adImg" />
                <p className="adTextp">Welcome to Little Lemon Restaurants little website. Ordering feature is under development but you can still reserve a table. We wish you a great time</p>
                <hr className="hpLine"></hr>
            </section>
            <label id="dishFotoLabel" htmlFor="dishFotoHolder">Featured Items:
                <section id="dishFotoHolder">
                    <img src={Dish1} alt="A popular dish" />
                    <img src={Dish2} alt="A popular dish" />
                    <img src={Dish3} alt="A popular dish" />
                    <img src={Dish4} alt="A popular dish" />
                </section>
            </label>
        </div>
    )
}
export default Homepage;