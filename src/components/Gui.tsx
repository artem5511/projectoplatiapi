import React from 'react';
import {NavLink} from 'react-router-dom';
import './Gui.css'

export const Gui = () => {
    const colorAdo = {
        color: 'blue'
    }
    return (
        <>
            <div>
                <p>Примеры оформления сайта и текущих статусов стостояния платежа</p>
            </div>
            <div className={'bl'}>
                This page doesn't exist. Go <NavLink to="/" style={colorAdo}>Home</NavLink>
            </div>
        </>

    );
}