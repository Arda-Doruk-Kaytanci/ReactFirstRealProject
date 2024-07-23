import React from "react"
import Logo from "./images/LittleLemonLogo1.png"

function ContactUS() {
    return (
        <>
            <section className="logoSection">
                <img src={Logo} alt="Logo of Little Lemon Restaurant" className="restaurantLogo" />
            </section>
            <section>
                <ul>
                    <li>Location: XXXX xXXX X X</li>
                    <li>Phone Number: 01234567891</li>
                    <li>Phone Number: 00123456789</li>
                    <li>E-mail: littlelemonrestaurant@gmail.com</li>
                </ul>
            </section>
        </>
    )
}
export default ContactUS