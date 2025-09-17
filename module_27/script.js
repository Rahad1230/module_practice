42
/*
 * File: script.js
 * Created: Wednesday, 17th September 2025 1:29:28 am
 * Author: Md.Rahad (mdrahad1296@gmail.com)
 * -----
 * Last Modified: Wednesday, 17th September 2025 2:04:52 am
 * Modified By: Md.Rahad (mdrahad1296@gmail.com)
 * -----
 * Copyright (c) 2025 Islamic University
 */
document.getElementById('login-btn').addEventListener('click', function (event) {
    //alert(event);
    event.preventDefault();
    const mobileNumber = document.getElementById('mobile-number').value;
    //alert(mobileNumber);
    const pin =Number(document.getElementById('pin').value) ;
    //alert(typeof (pin));
    if (mobileNumber.length === 11) {

            if (pin === 1234) {
                window.location.href = "main.html";
    } else {
        alert("You Enter a Wrong Pin");
    }
    }
    else {
        alert("You Enter a wrong Number");
    }


})