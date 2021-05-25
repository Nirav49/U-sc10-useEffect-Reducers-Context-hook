import React, { useState, useEffect } from 'react'

function Useeffect2() {
    const [wid, setWid] = useState(window.screen.width)
    const changed = () => {
        setWid(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener("resize", changed);
        return () => {
            window.removeEventListener("resize", changed)
        }
    },[])
    return (
        <div>
            <center>
                <h1>the live width of your screen is:</h1><br /><br />
                <h2>{wid}</h2>
            </center>
        </div>
    )
}

export default Useeffect2;
