import ForeMyThroudReducer from './Reducers/ForeMyThroudReducer.ts';
import FreeBestChitatsReducer from './Reducers/FreeBestChitatsReducer.ts';
import { applyMiddleware, combineReducers,  legacy_createStore as createStore } from 'redux'
import UsersReducer from './Reducers/UsersReducer.ts';
import APIworkReducer from './Reducers/APIworkReducer.ts';
import ProfileReducer from './Reducers/ProfileReducer.ts'
import BooksReducer from './Reducers/BooksReducer.ts';
import { thunk } from 'redux-thunk';


let reducers = combineReducers(
  {
    Fore: ForeMyThroudReducer,
    Free: FreeBestChitatsReducer,
    Users: UsersReducer,
    APIwork: APIworkReducer,
    Profile: ProfileReducer,
    Books: BooksReducer
  })


export type StoreType = ReturnType<typeof reducers> // тип всего state
let store = createStore(reducers, applyMiddleware(thunk) as any); // установил временную заглушку на санки
// @ts-ignore
window.sdf = store // для обращения к state из окна браузера

export default store;
