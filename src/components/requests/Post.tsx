import React, {useState} from 'react';
import {Link} from "react-router-dom";

// const [paymentID, setPaymentID] = React.useState<number>(1);

const myHeaders = new Headers();
myHeaders.append("regNum", "OPL000000722");
myHeaders.append("password", "cloudBY12345");
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
    "sum": 17,
    "shift": "smena 2",
    "orderNumber": "777",
    "regNum": "OPL000000722",
    "details": {
        "receiptNumber": "123",
        "items": [
            {
                "type": 1,
                "name": "Позиция 1",
                "quantity": 1,
                "price": 10,
                "cost": 10
            },
            {
                "type": 1,
                "name": "Позиция 2",
                "quantity": 2,
                "price": 3.5,
                "cost": 7
            }
        ],
        "amountTotal": 17,
        "footerInfo": "ЛВО - QR для всех!"
    }
});

let requestParam: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
    mode: 'cors'
};


export const Request =async () => {;
        const obj = await  fetch('https://bpay-testcashdesk.lwo.by/ms-pay/pos/webPayments', requestParam)
       const answer = await obj.json();
    let resultid = 'paymentId ' + answer.paymentId;
    let resultqr = 'dynamicQR ' + answer.dynamicQR;
        // .then(data => alert(('paymentId ' + data.paymentId)));
    //     .then(data => {paymentID = (data.paymentId)});
    alert(resultqr)
    console.log(resultid);
    // function showQR() {
    //     let newqr = resultqr;
    //     alert(newqr);
    // };
    // showQR()
    // const Request2 =async () => {
    //     const obj2 = await fetch('https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=' + resultqr);
    //     const answer2 = await obj2.text();
    //     let resultapiqr = answer2;
    //     alert(resultapiqr)
    // }
    // const Request2  = () => {
    //     <Link to={'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=' + 'resultq'} target="_blank">Внешняя Ссылка</Link>
    // }
    // Request2()
}

// console.log(paymentID)

//      fetch("https://bpay-testcashdesk.lwo.by/ms-pay/pos/webPayments", requestParam)
//     .then(response => response.json())
//          .then((data) => {
//          let im = data.
//          document.querySelector('.result').insertAdjacentHTML('beforeend')
//     .then((result: any) => console.log(result))
//     .catch((error: any) => console.log('error', error));
// })
