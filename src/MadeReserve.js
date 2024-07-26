import React from "react";
import fakeAPI from "./fakeAPI";

function MadeReserve() {
    const time = fakeAPI.sentAPI("time")
    const table = fakeAPI.sentAPI("table")
    const date = fakeAPI.sentAPI("date")
    return (
        <>
            <section id="congrats">
                &nbsp;&nbsp;&nbsp;&nbsp;Congrats!<br/>
                You have succesfully made your reservation.<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;Your Info:
                <ul>
                    <li>Date: {date}</li>
                    <li>Table: {table}</li>
                    <li>Time: {time}</li>
                </ul>
            </section>
        </>
    )
}

export default MadeReserve