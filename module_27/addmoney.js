/*
 * File: addmoney.js
 * Created: Wednesday, 17th September 2025 10:58:57 am
 * Author: Md.Rahad (mdrahad1296@gmail.com)
 * -----
 * Last Modified: Wednesday, 17th September 2025 12:49:26 pm
 * Modified By: Md.Rahad (mdrahad1296@gmail.com)
 * -----
 * Copyright (c) 2025 Islamic University
 */
document.getElementById('addMoney-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const pin = Number(document.getElementById('pin').value);
    //console.log(pin);
    if (pin === 1234) {
        const amount = Number(document.getElementById('amount').value)
        //console.log(amount);
        if (amount > 0) {
            const balance = document.getElementById('balance').innerText;
        const convertedBalance = parseFloat(balance);

        const newBalance = amount + convertedBalance;
        //console.log(newBalance);
        document.getElementById('balance').innerText = newBalance;
        } else {
            alert('Enter currect amount');
        }

    } else {
        alert('You Enter a wrong Pin');
    }
})