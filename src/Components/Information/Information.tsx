import s from './Information.module.css'
import logo from './../foto/graf.jpg'
import React from 'react'

let Information: React.FC <any> = (props) => {

    return (
        <div className={s.osnov}>
            <div className={s.container}>
                <div className={s.box}>
                    <img src={logo} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Information;