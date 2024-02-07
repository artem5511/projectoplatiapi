import React, {useEffect, useState} from 'react';
import {Routes, Route, NavLink} from 'react-router-dom';
import './App.css';
import {Homepage} from './components/Homepage'
import {About} from './components/Aboutpage'
import {Methods} from './components/Methods'
import {Notfoundpage} from './components/Notfoundpage'
import {List} from "@material-ui/core";
import {Gui} from "./components/Gui";
import {Page1} from "./components/Methodspages/Page1";


const App = () => {
  return (
      <div>
        <div className={'first'}>
          <header className={'hed'}>
            <NavLink to={"/"}>Main</NavLink>
            <NavLink to={"/methods"}>Methods of Payment</NavLink>
            <NavLink to={"/gui"}>Guide UI</NavLink>
            <NavLink to={"/about"}>About  “Oplati”</NavLink>
          </header>
          <Routes>
            <Route path={"/"} element={<Homepage/>}/>
            {/*<Route path={"/about"} element={<About/>}/>*/}
            <Route path={"/methods"} element={<Methods/>}/>
            <Route path={"/gui"} element={<Gui/>}/>
            <Route path={"/about"} element={<About/>}/>
            <Route path={"*"} element={<Notfoundpage/>}/>
            <Route path={"/page1"} element={<Page1/>}/>
          </Routes>
                {/*<footer className={'foot'}>*/}
                {/*    <span>logo</span>*/}
                {/*</footer>*/}
        </div>
      </div>
  );
}

export default App;