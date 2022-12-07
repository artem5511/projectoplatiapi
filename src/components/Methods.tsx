import React from 'react';
import Sequense from './image/Sequence diagram for payment.jpg'
import './Methods.css'
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';

export const Methods = () => {
    // function changeSizeImage () {
    //     return (
    //     <img alt='' src={Sequense} className={'diagram'}/>
    //     )
    // }
    // console.log(changeSizeImage)

        return (
        <div>
            <h1>Merchant Presented Mode - Dynamic Website QR</h1>
            Сканирование QR-кода мерчанта - Динамический QR на веб-сайте
            <div>
                <img alt='' src={Sequense}/>
            </div>
            <br/>
            <div>
                <Button variant="contained" color="secondary" size="large">ОПЛАТИТЬ</Button>
            </div>
        </div>
    );
}
