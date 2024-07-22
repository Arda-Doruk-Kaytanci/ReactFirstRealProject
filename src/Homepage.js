import React from "react";
import Logo from "./images/LittleLemonLogo1.png"
import AdImg from "./images/AdImg.jpg"
function Homepage() {
    return (
        <div className="Homepage">
            <section>
                <img src={Logo} alt="Logo of Little Lemon Restaurant" className="restaurantLogo" />
            </section>
            <section>
                <img src={AdImg} alt="A man holding plate with food on top of it" className="adImg" />
                <p className="adTextp">Very Nice Paragraf For Place Holding Yuppi</p>
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