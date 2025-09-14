/*
 * File: intro.js
 * Created: Sunday, 14th September 2025 8:49:39 am
 * Author: Md.Rahad (mdrahad1296@gmail.com)
 * -----
 * Last Modified: Sunday, 14th September 2025 10:40:38 am
 * Modified By: Md.Rahad (mdrahad1296@gmail.com)
 * -----
 * Copyright (c) 2025 Islamic University
 */
console.log("Hello MY DEAR JAVASCRIPT");
console.log(document);
const sections = document.querySelectorAll('section');
console.log(sections);
for (const section of sections) {
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '6px';
    section.style.backgroundColor = 'lightgray';
}
//how to add a list item in a specific location
const placelist = document.getElementById('places-list');
console.log(placelist);
const li = document.createElement('li');
li.innerText = 'NEW PLACE IS ECO PARK';
placelist.appendChild(li);

//add a section in html...
const maincontainer = document.getElementById('main-container');
console.log(maincontainer);
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = "My Perfume list";
section.appendChild(h1);
const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = "DANHIL DESIRE";
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.innerText = "SANDAL WOOD";
ul.appendChild(li2);
const li3 = document.createElement('li');
li3.innerText = "SULTAN";
ul.appendChild(li3);
section.appendChild(ul);
maincontainer.appendChild(section);
//ADD NEw section using html code easily..
const sec1 = document.createElement('section');
sec1.innerHTML = `
<h1>Fevorite food</h1>
            <ul>
                <li>biriyani</li>
                <li>chicken chap</li>
                <li>Firni</li>
                <li>Rost</li>
                <li>Beef and Mutton</li>
                </ul>

`
maincontainer.appendChild(sec1);


