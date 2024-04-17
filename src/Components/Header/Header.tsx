import { NavLink } from 'react-router-dom'
import s from './Header.module.css'
import React from 'react'

let Header: React.FC <any> = (props) => {
    return (
        <div className={s.osnov}>
            Инструкция по функциональности сайта
            <br/><br/>
            <NavLink to='/' className={styl => (styl.isActive)? s.act:s.desAct}>Manual</NavLink>
            <br/>
        </div>
    )
}

export default Header