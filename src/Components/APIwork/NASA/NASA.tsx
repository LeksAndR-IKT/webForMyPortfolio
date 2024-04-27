import React from "react"
import s from './NASA.module.css'
import { PropsToNasa } from "./NASAContainer"
//import axios from "axios"


let NASA: React.FC<PropsToNasa> = (props) => {
    let getFoto = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        //props.switchingFotos(1)
    }
     const otrisovka = props.DATA?.foto.map((el) => <div> <img src={el} alt = ""></img></div>)
    return <div>
        <div className={s.pages}><span onClick={getFoto}>1</span></div>
        <div>
            {otrisovka}
        </div>
    </div>
}

export default NASA