import React from 'react';
import {Routes, Route, NavLink} from 'react-router-dom';
import './App.css';
import {Homepage} from './components/Homepage'
import {About} from './components/Aboutpage'
import {Blog} from './components/Blogpage'
import {Notfoundpage} from './components/Notfoundpage'


const App = () => {
  return (
      <div>
        <div className={'one'}>
          <header className={'hed'}>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/blog"}>Blog</NavLink>
            <NavLink to={"/about"}>About  “Oplati”</NavLink>
          </header>
          <Routes>
            <Route path={"/"} element={<Homepage/>}/>
            {/*<Route path={"/about"} element={<About/>}/>*/}
            <Route path={"/blog"} element={<Blog/>}/>
            <Route path={"/about"} element={<About/>}/>
            <Route path={"*"} element={<Notfoundpage/>}/>
          </Routes>
        </div>
      </div>
  );
}

export default App;