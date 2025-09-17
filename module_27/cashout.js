42
/*
 * File: cashout.js
 * Created: Wednesday, 17th September 2025 12:44:01 pm
 * Author: Md.Rahad (mdrahad1296@gmail.com)
 * -----
 * Last Modified: Wednesday, 17th September 2025 12:56:57 pm
 * Modified By: Md.Rahad (mdrahad1296@gmail.com)
 * -----
 * Copyright (c) 2025 Islamic University
 */
document.getElementById('cashout-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const pin = Number(document.getElementById('cashout-pin').value);
    //console.log(pin);
    if (pin === 1234) {
        const amount = Number(document.getElementById('cashout-amount').value)
        //console.log(amount);
            const balance = document.getElementById('balance').innerText;
        const convertedBalance = parseFloat(balance);
        if (amount < convertedBalance && amount>0) {

        const newBalance = convertedBalance-amount;
        //console.log(newBalance);
        document.getElementById('balance').innerText = newBalance;
        } else {
            alert('Enter currect amount');
        }

    } else {
        alert('You Enter a wrong Pin');
    }
})