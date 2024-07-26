import React from "react";
import fakeAPI from "./fakeAPI";

function MadeReserve(){
    const time = fakeAPI.sentAPI("time")
    const table = fakeAPI.sentAPI("table")
    return(
        <><p>{time}, {table}</p></>
    )
}

export default MadeReserve