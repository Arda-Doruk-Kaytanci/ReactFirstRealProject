import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import usePrevious from "./UsePrevious";
import goBackImg from "./images/file.png"

function Gobackarrow() {
    const navigate = useNavigate();
    let location = useLocation();
    const [currSite, setcurrSite] = useState(location);
    const prevSite = usePrevious(currSite)
    useEffect(() => {
        setcurrSite(location);
    }, [location])
    function onClickHandler() {
        if (prevSite !== undefined) {
            navigate(prevSite.pathname);
        }
    }
    return (
        <>
            <button className="goBack" onClick={onClickHandler}><img src={goBackImg} alt="GO Back Arrow"/></button>
        </>
    )
}
export default Gobackarrow