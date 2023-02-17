import React, { useEffect } from "react";
import molehill from "./images/molehill.png"

function EmptySlot(props){

    useEffect(() => {
        let randomS = Math.ceil(Math.random() * 3000)
        let timer = setTimeout(() => {
            // props.displayMole(false)
           props.toggle(true)
            
        }, randomS)
        return () => clearTimeout(timer)
    })
    return(
    <div>
        <img style={{'width': '10vw'}}
             src={molehill}
             alt="Mole-Hill"
             onClick={props.handleClick}
            //  onClick={props.handleClick} 
             />
             {/* <button>Mole</button> */}
    </div>
    )
}

export default EmptySlot