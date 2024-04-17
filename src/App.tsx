import ButtonsOsnov from './Components/ButtonsOsnov/ButtonsOsnov.tsx';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Otrisovka from './Components/Otrisovka/Otrisovka.tsx';
import Footer from './Components/Footer/Footer.tsx';
import Information from './Components/Information/Information.tsx';
import Header from './Components/Header/Header.tsx';
import React from 'react';


let App: React.FC <any> = (props) => {
  //debugger
  return (
    <BrowserRouter>
      <div className='buttonsOtrisovka'>
        <div className='futer'><Header/></div>
        <div className='functionality'><ButtonsOsnov /></div>
        <div className='Otrisovka'>
          <Otrisovka />
        </div>
        <div className='information'><Information/></div>
        <div className='down'><Footer/></div>
      </div>
    </BrowserRouter>

  );
}

export default App;
