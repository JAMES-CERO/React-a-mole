import React, { useState, useEffect } from "react";
import MoleImg from "./moleImg";
import EmptySlot from "./EmptySlot";

function MoleContainer(props){

    let [displayMole, setDisplayMole] = useState(false)

    const handleClick = (e) => {
      props.setScore(props.setScore + 1)
      setDisplayMole(false)
    }
  
    let Show = displayMole ? <MoleImg setDisplayMole={setDisplayMole} handleClick={handleClick} /> : <EmptySlot setDisplayMole={setDisplayMole} handleClick={handleClick} />

    useEffect(() => {
        let randomS =  Math.ceil(Math.random()* 3000)
        let  timer = setTimeout(() => {
            props.displayMole(true)
         }, randomS)
         return () => clearTimeout(timer)
    })
    return(
    <div>
        {Show}
    </div>
    );
}

export default MoleContainer