import { Route, Routes } from 'react-router-dom';
// @ts-ignore
import s from './Otrisovka.module.css'
import FreeContainer from '../Free/FreeContainer.tsx';
import ForeContainer from '../Fore/ForeContainer.tsx';
import Defautes from '../Defautes/Defautes.tsx';
import UsersContainer from '../Users/UsersContainer.tsx';
import APIworkContiner from '../APIwork/APIworkContainer.tsx';
import ProfileContainer from '../Profile/ProfileContainer.tsx';
import BooksContainer from '../Books/BooksContainer.tsx';
import React from 'react';
import NASAContainer from '../APIwork/NASA/NASAContainer.tsx';

let Otrisovka: React.FC<any> = (props) => {

    return (
        <div className={s.left}>
            <form>
                <br />
                <Routes>
                    <Route path='/books' element={<BooksContainer/>} />
                    <Route path='/free' element={<FreeContainer/>} />
                    <Route path='/fore' element={<ForeContainer />} />
                    <Route path='/users' element={<UsersContainer />} />
                    <Route path='/trening' element={<APIworkContiner />} />
                    <Route path='/profile/:userId' element={<ProfileContainer />} />
                    <Route path='/fotoNasa' element={<NASAContainer/>}/>
                    <Route path='/' element={<Defautes />} />
                </Routes>
            </form> 
        </div>
    )
}

export default Otrisovka;