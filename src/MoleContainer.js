import React, { useState} from "react";
import MoleImg from "./moleImg";
import EmptySlot from "./EmptySlot";

function MoleContainer(props){

    let [displayMole, setDisplayMole] = useState(false)

    const handleClick = (e) => {
      props.setScore(props.score + 1)
      setDisplayMole(false)
    }
  
    let theMole = displayMole ? <MoleImg setScore={props.setScore}  toggle={setDisplayMole} handleClick={handleClick} /> : <EmptySlot toggle={setDisplayMole} />

    // useEffect(() => {
    //     let randomS =  Math.ceil(Math.random()* 3000)
    //     let  timer = setTimeout(() => {
    //         props.displayMole(true)
    //      }, randomS)
    //      return () => clearTimeout(timer)
    // })
    return(
    <div>
        {theMole}
    </div>
    );
}

export default MoleContainer