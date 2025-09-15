42
/*
 * File: handler.js
 * Created: Monday, 15th September 2025 8:55:23 pm
 * Author: Md.Rahad (mdrahad1296@gmail.com)
 * -----
 * Last Modified: Monday, 15th September 2025 9:53:36 pm
 * Modified By: Md.Rahad (mdrahad1296@gmail.com)
 * -----
 * Copyright (c) 2025 Islamic University
 */
document.getElementById('update').addEventListener('click', function(){
    //console.log('Btn clicked');
    const pagetitle=document.getElementById('page-title');
    console.log(pagetitle);
    pagetitle.innerText="Updated Text Title...."
})
document.getElementById('btn-login').addEventListener('click', function () {
            console.log('Btn-login clicked');
            const userinfo = document.getElementById('user-info');
            console.log(userinfo);
            userinfo.innerText = "User login Successfully....";
})
//handle input text.......

        //set event listener....
        document.getElementById('update-btn').addEventListener('click', function () {
            //get the text from input.....
            const inputField = document.getElementById('any-text')
            inputText=inputField.value;
            // console.log(inputText);

            //set the name to p....
            const name=document.getElementById('name');
            name.innerText= inputText;

            //set the input box clear...
            inputField.value=" ";
        })
