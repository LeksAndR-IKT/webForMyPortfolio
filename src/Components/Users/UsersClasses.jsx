import s from './Users.module.css'
import defaultAva from '../foto/defaultAva.jpg'
import { NavLink } from 'react-router-dom'
import React from 'react'


class Users extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mass: []
        }
        for (let i = 1; i < 10; i++) {
            this.state.mass.push(i)
        }
    }
    switching = (el) => {
        this.props.setUsers(el, this.props.usersCountInPage)
        this.props.switching(el)
        for (let i = el; i< el+10; i++){
            this.state.mass.map(el => el)
        }

    }
    shouldComponentUpdate(newProps, newState){
        return newProps !== this.props || newState !== this.state
    }
    componentDidMount() {
        this.props.setUsers(this.props.currentPage, this.props.usersCountInPage)
    }
    render() {
        return <div className={s.osnov}>
            <div className={s.paginator}>
                {
                    this.state.mass.map((el) => {
                        return <span className={this.props.currentPage === el ? s.pagener : s.span} onClick={(e) => { this.switching(el) }}>{el}</span>
                    })
                }
                ...
                <span className={s.obcheeCount}>{this.props.totalUsersCount}</span>
            </div>
            <div className={s.usersList}>
                {
                    this.props.Users.map((el) => {
                        return <div key={el.id} className={s.user}>
                            <NavLink to='/profile'><img src={(el.photos.small === null) ? defaultAva : el.photos.small} className={s.foto} alt="" /></NavLink>
                            <div className={s.name}>{el.name}</div>
                            <div className={s.status}>{el.status}</div>
                        </div>

                    })
                }
            </div>

            <button >кнопка</button>
        </div>
    }
}
export default Users

/*

*/