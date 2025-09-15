42
/*
 * File: event.js
 * Created: Monday, 15th September 2025 8:05:50 pm
 * Author: Md.Rahad (mdrahad1296@gmail.com)
 * -----
 * Last Modified: Monday, 15th September 2025 8:52:39 pm
 * Modified By: Md.Rahad (mdrahad1296@gmail.com)
 * -----
 * Copyright (c) 2025 Islamic University
 */
console.log("HEllow world");
//Option 2 to click handler
    function myellow(){
        document.body.style.backgroundColor='yellow';
    }
    function red(){
        document.body.style.backgroundColor='red';
}
//option 3 get element by id and use onclick
const makeblue=document.getElementById('btn-blue');
makeblue.onclick= function makeblue(){
document.body.style.backgroundColor='blue';
}
//Option 3 different approach
const purple = document.getElementById('btn-purple');
purple.onclick = maakepurple;
function maakepurple() {
    document.body.style.backgroundColor = 'purple';
}
//Option 4:USing Event listener....MOST IMPORTANT
document.getElementById('btn-green').addEventListener('click',  makeGreen);
function makeGreen(){
    document.body.style.backgroundColor='green';
}
//or
document.getElementById('btn-gold').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';
});