import React from 'react'
import s from './APIwork.module.css'
import { TypeProps } from './APIworkContainer'

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
            <button onClick={getIP}>Получить ip компьютера</button>
        </div>

        <div className={s.butTwo}>
            <button onClick={getGeoLocation}>Получить местоположение по ip</button>
        </div>

        <div className={s.butFree}>
            <button onClick={getPriceBTC}>Узнать цену на Биткоин (BTC)</button>
        </div>

    </div>
}

export default APIwork