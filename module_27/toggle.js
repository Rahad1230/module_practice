/*
 * File: toggle.js
 * Created: Wednesday, 17th September 2025 12:26:18 pm
 * Author: Md.Rahad (mdrahad1296@gmail.com)
 * -----
 * Last Modified: Wednesday, 17th September 2025 12:46:44 pm
 * Modified By: Md.Rahad (mdrahad1296@gmail.com)
 * -----
 * Copyright (c) 2025 Islamic University
 */
document.getElementById('add-money-box').addEventListener('click', function () {
    document.getElementById('cashout').style.display = 'none';
    document.getElementById('addMoney').style.display = 'block';

})
document.getElementById('cashout-box').addEventListener('click', function () {
    document.getElementById('addMoney').style.display = 'none';
    document.getElementById('cashout').style.display = 'block';

})