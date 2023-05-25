import React from 'react';

const myHeaders = new Headers();
myHeaders.append("regNum", "OPL000000722");
myHeaders.append("password", "cloudBY12345");
myHeaders.append("Content-Type", "application/json");

let requestParam: RequestInit = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
    mode: 'cors'
};

export const Requestget = () => {

    fetch('https://bpay-testcashdesk.lwo.by/ms-pay/pos/payments/38717', requestParam)
        .then(response => response.text())
        // .then(data => console.log(data));
        .then(data => alert(data));
}
