import React, {useEffect, useState} from 'react';
import {Routes, Route, NavLink} from 'react-router-dom';
import {Page1} from "./Methodspages/Page1";

export const Methodsnavbar = () => {
        return (
            <div>
                <div>
                    <header className={'hednav'}>
                        <NavLink to={"/page1"}>Page1</NavLink>
                        <NavLink to={"/page1"}>Page2</NavLink>
                        <NavLink to={"/page1"}>Page3</NavLink>
                    </header>
                </div>
            </div>
        );
}

