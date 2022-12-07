import React from 'react';
import Sequense from './image/Sequence diagram for payment.jpg'
import './Methods.css'

export const Methods = () => {
    return (
        <div>
            <h1>Merchant Presented Mode - Dynamic Website QR</h1>
            Сканирование QR-кода мерчанта - Динамический QR на веб-сайте
            <div className={'diagram'}>
                <img src={Sequense}/>
            </div>
            <div>
                <button>оплатить</button>
            </div>
        </div>

    );
}
