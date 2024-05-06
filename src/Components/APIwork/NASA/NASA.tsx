import React from "react"
// @ts-ignore
import s from './NASA.module.css'
import { PropsToNasa } from "./NASAContainer"
//import axios from "axios"


let NASA: React.FC<PropsToNasa> = (props) => {
    let massCountPage_loc: Array<number> = []
    //props.switchingFotos(3)
    for (let i = 1; i < Math.ceil(props.countPage / 20 + 1); i++) {
        massCountPage_loc.push(i)
    }

    const otrisovka = props.DATA?.foto.map((el, item) => 
    {
        return (item < props.numberPage) ? <div className={s.foto}><img src={el} alt="" ></img> </div> : <></>
    })


    let getNewPage = (numberPageLocal: number) => {
        props.switchingFotos(numberPageLocal)
    }

    return <div>
        {
            massCountPage_loc.map((el) => {
                return <div className={s.pages}><span onClick={(e: React.MouseEvent<HTMLElement>) => {
                    e.preventDefault()
                    getNewPage(el)
                }
                }>{el}</span></div>
            })
        }
        <div>
            {otrisovka}
        </div>
    </div>
}

export default NASA