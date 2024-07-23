import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import usePrevious from "./UsePrevious";

function Gobackarrow() {
    const navigate = useNavigate();
    let location = useLocation();
    const [currSite, setcurrSite] = useState(location);
    const prevSite = usePrevious(currSite)
    useEffect(() => {
        setcurrSite(location);
    }, [location])
    function onClickHandler() {
        if(prevSite !== undefined)
        {
            navigate(prevSite.pathname);
        }
    }
    return (
        <div id="goback">
            <button onClick={onClickHandler}>Back</button>
        </div>
    )
}
export default Gobackarrow