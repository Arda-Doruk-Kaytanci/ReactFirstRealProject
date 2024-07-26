import React from "react";
import fakeAPI from "./fakeAPI";

test('is fakeapı correct', () =>{
    let date = "2024-11-23"
    let result =fakeAPI.fetchAPI(date)
    expect(result).toStrictEqual([ 
        "--- Select a Time ---","15:00","15:30","16:00", "16:30", "17:00", "17:30", "18:30", "19:30", "22:00", "23:00"
        ])
    let time = "15:00"
    let table = "A1"
    let x = fakeAPI.gatherAPI(time,table, date)
    expect(x).toStrictEqual(date)
    let name = "date"
    let y =fakeAPI.sentAPI(name)
    expect(y).toBe(x)
})