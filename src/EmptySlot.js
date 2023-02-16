import React, { useEffect } from "react";
import MoleImg from "./moleImg";

function EmptySlot(props){

    useEffect(() => {
        let randomS = Math.ceil(Math.random() * 3000)
        let timer = setTimeout(() => {
            props.displayMole(false)
           // props.toggle(true)
            
        }, randomS)
        return () => clearTimeout(timer)
    })
    return(
    <div>
        <img style={{'width': '30vw'}}
             src={MoleImg}
             onClick={props.handleClick} />
    </div>
    )
}

export default EmptySlot