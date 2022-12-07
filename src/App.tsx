import React, {useEffect, useState} from 'react';
import {Routes, Route, NavLink} from 'react-router-dom';
import './App.css';
import {Homepage} from './components/Homepage'
import {About} from './components/Aboutpage'
import {Methods} from './components/Methods'
import {Notfoundpage} from './components/Notfoundpage'
import {List} from "@material-ui/core";


const App = () => {

  return (
      <div>
        <div className={'one'}>
          <header className={'hed'}>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/methods"}>Methods of Payment</NavLink>
            <NavLink to={"/about"}>About  “Oplati”</NavLink>
          </header>
          <Routes>
            <Route path={"/home"} element={<Homepage/>}/>
            {/*<Route path={"/about"} element={<About/>}/>*/}
            <Route path={"/methods"} element={<Methods/>}/>
            <Route path={"/about"} element={<About/>}/>
            <Route path={"*"} element={<Notfoundpage/>}/>
          </Routes>
                {/*<footer className={'foot'}>*/}
                {/*    <span>logo</span>*/}
                {/*</footer>*/}
        </div>
      </div>
  );
}

export default App;