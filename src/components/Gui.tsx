import React from 'react';
import {NavLink} from 'react-router-dom';
import './Notfoundpage.css'

export const Notfoundpage = () => {
    const colorAdo = {
        color: 'blue'
    }
    return (
        <div className={'bl'}>
            This page doesn't exist. Go <NavLink to="/" style={colorAdo}>Home</NavLink>
        </div>
    );
}