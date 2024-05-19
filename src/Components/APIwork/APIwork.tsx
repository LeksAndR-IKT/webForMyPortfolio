import React from 'react'
import s from './APIwork.module.css'
import { TypeProps } from './APIworkContainer'
import { NavLink } from 'react-router-dom'
import ButtonForAPI from './ButtonForAPI.tsx'


let APIwork: React.FC<TypeProps> = (props) => {

    let getIP = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        props.getIp()
    }

    let getGeoLocation = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        props.getGeoLocation()
    }
    let getPriceBTC = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        props.getPriceBTC()
    }
    return <div className={s.osnov}>
        <div className={s.butOne}>
            <ButtonForAPI functionForButton={getIP} name="Получить ip компьютера" />
        </div>

        <div className={s.butTwo}>
            <ButtonForAPI functionForButton={getGeoLocation} name="Получить местоположение по ip" />
        </div>

        <div className={s.butFree}>
            <ButtonForAPI functionForButton={getPriceBTC} name="Узнать цену на Биткоин (BTC)" />
        </div>

        <div className={s.butNASA}>
            <NavLink to='/fotoNasa'>Посмотреть фотографии космоса, сделанные NASA</NavLink>
        </div>

    </div>
}

export default APIwork