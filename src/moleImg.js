import {useEffect} from "react"
import molePic from "./images/mole.png"

function MoleImg(props){

    useEffect(() => {
        let randomS =  Math.ceil(Math.random()* 3000)
        let  timer = setTimeout(() => {
            // props.displayMole(true)
            props.toggle(false)
         }, randomS)
         return () => clearTimeout(timer)
    })

    return(
        <div>
            <img style={{'width':'10vw'}} src={molePic} onClick={props.handleClick} alt='Mole-Pic' />
        </div>
    )

    }

export default  MoleImg