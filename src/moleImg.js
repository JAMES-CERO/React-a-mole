import React from "react";
import EmptySlot from "./EmptySlot";
const mole = require("./mole.png")
const hill = require("./molehill.png")

function MoleImg(props){
    EmptySlot ? props.src={mole} : props.src={hill};
    return(
        <div>
            <img />
        </div>
    )

    }

export default  MoleImg