import React from "react"
import s from './NASA.module.css'
import { PropsToNasa } from "./NASAContainer"
//import axios from "axios"


let NASA: React.FC<PropsToNasa> = (props) => {
    let getFoto = (e: React.MouseEvent<HTMLElement>) => {
        debugger
        e.preventDefault()
        let num = 3
        props.switchingFotos(num)
    }
    let FocusInImg = () => {
        console.log('asd')
    }
     const otrisovka = props.DATA?.foto.map((el) => <div className={s.foto} ><img src={el} tabIndex={1} alt = "" onBlur={()=>{FocusInImg()}}></img> </div>)
    return <div>
        <div className={s.pages}><span onClick={getFoto}>1</span></div>
        <div>
            {otrisovka}
        </div>
    </div>
}

export default NASA