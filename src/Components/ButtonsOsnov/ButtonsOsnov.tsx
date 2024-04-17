import { NavLink } from 'react-router-dom';
import s from './ButtonsOsnov.module.css'
import React from 'react';

let ButtonsOsnov:React.FC<any> = () => {
    return (
        <div className={s.left}>
            <form>
                <NavLink to='/books'  className={navData => (navData.isActive) ? s.active : s.def}>Книги</NavLink>
                <NavLink to='/free' className={navData => (navData.isActive) ? s.active : s.def}>Лучшие цитаты</NavLink>
                <NavLink to='/fore' className={navData => (navData.isActive) ? s.active : s.def}>Свои мысли</NavLink>
                <NavLink to='/users' className={navData => (navData.isActive) ? s.active : s.def}>Пользователи</NavLink>
                <NavLink to='/trening' className={navData => (navData.isActive) ? s.active : s.def}>Прикольные штуки</NavLink>
            </form>
        </div>
    )
}

export default ButtonsOsnov;