import React, { createContext, useContext, useState } from "react";
import { RadioGroup, RadioOption } from "./Radio.js";

const TableContext = createContext("");

function ChooseTable() {
    const [selected, setSelected] = useState("Submit");
    return (
        <>
            <p className="infop">Choose A Table By Clicking On A Table And Then You Will Be Redirected To Reserve Page</p>
            <br />
            <section>
                <form>
                    <RadioGroup onChange={setSelected} selected={selected}>
                        <RadioOption value="A1">A1</RadioOption>
                        <RadioOption value="A2">A2</RadioOption>
                        <RadioOption value="A3">A3</RadioOption>
                        <RadioOption value="B1">B1</RadioOption>
                        <RadioOption value="B2">B2</RadioOption>
                        <RadioOption value="B3">B3</RadioOption>
                    </RadioGroup>
                </form>
            </section>
        </>
    );
}
export const useTable = () => useContext(TableContext)
export default ChooseTable