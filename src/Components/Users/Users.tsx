import s from './Users.module.css'
import defaultAva from '../foto/defaultAva.jpg'
import { NavLink } from 'react-router-dom'
import React from 'react'
import {UsersPropsType} from './UsersContainer'

let Users: React.FC<UsersPropsType> = (props) => {
    //debugger
    if (props.Users.length < 1){
        props.setUsers(props.currentPage, props.usersCountInPage)
        console.log(props.Users)
    }
    let mass: Array<number> = []

    for (let i:number = 1; i < 10; i++){
        mass.push(i)
    }
    let switching = (el: number) => {
        props.setUsers(el, props.usersCountInPage)
        props.switching(el)
        
    }

    return <div className={s.osnov}>
        {
            mass.map((el) => {
                return <span className={props.currentPage === el? s.pagener : s.span} onClick={(e) => {switching(el)}}>{el}</span>
            })
        }
        {
            props.Users.map((el) => {
                return <div key={el.id} className={s.user}>
                    <NavLink to='/profile'><img src={ (el.photos.small === null)?defaultAva:el.photos.small} className={s.foto} alt="" /></NavLink>
                    <div className={s.name}>{el.name}</div>
                    <div className={s.status}>{el.status}</div>
                </div>
                
            })
        }
        <button >кнопка</button>
    </div>
}

export default Users

/*

*/