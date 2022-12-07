import React from 'react';

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

 export const Request = () => {
     fetch("http://bpay-testcashdesk.lwo.by/ms-pay/pos/webPayments", requestParam)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
