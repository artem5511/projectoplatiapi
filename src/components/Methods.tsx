import React from 'react';
import Sequense from './image/Sequence diagram for payment.jpg'
import './Methods.css'
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import {Request} from "./requests/Post";
import {Requestget} from "./requests/Get";

export const Methods = () => {
    // function changeSizeImage () {
    //     return (
    //     <img alt='' src={Sequense} className={'diagram'}/>
    //     )
    // }
    // console.log(changeSizeImage)

        return (
        <div className={"box"}>
            <div className={"box1"}>
                <div><h2>Merchant Presented Mode - Dynamic Website QR</h2></div>
                <div><img alt='' src={Sequense}/></div>
            </div>
            <div className={"box2"}>
                <div><Button  variant="contained" color="secondary" size="large" onClick={Request}>ОПЛАТИТЬ</Button></div>
                <div><Button  variant="outlined" color="default" size="large" onClick={Requestget}>ПОЛУЧИТЬ СТАТУС</Button></div>
                <div className="result">result</div>
            </div>
            {/*<h1>Merchant Presented Mode - Dynamic Website QR</h1>*/}
            {/*Сканирование QR-кода мерчанта - Динамический QR на веб-сайте*/}
            {/*<div>*/}
            {/*    <img alt='' src={Sequense}/>*/}
            {/*</div>*/}
            {/*<br/>*/}
            {/*<div className={'button_get'}>*/}
            {/*    <div>*/}
            {/*        <Button  variant="contained" color="secondary" size="large" onClick={Request}>ОПЛАТИТЬ</Button>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <Button  variant="outlined" color="default" size="large" onClick={Requestget}>ПОЛУЧИТЬ СТАТУС</Button>*/}
            {/*    </div>*/}
            {/*    <div className="result">result</div>*/}
            {/*</div>*/}
        </div>
    );
}
