// @ts-ignore
import s from './ButtonForAPI.module.css'
import React from 'react'

let ButtonForAPI: React.FC<any> = (props) => {
    return <div className={s.osnov}>
        <button onClick={props.functionForButton}>{props.name}</button>
    </div>
}

export default ButtonForAPI