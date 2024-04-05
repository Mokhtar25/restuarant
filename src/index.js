import Createhome from "./home";
import CreateMenu from "./menu";
import CreateAbout from "./about"; 

import './style.css';
document.addEventListener("DOMContentLoaded", ()=>{

    const main = document.querySelector('#content');
    const home_button = document.querySelector('.home');
    const menu_button = document.querySelector('.menu');
    const about_button = document.querySelector('.about');

        
        main.innerHTML = '';
        let temp = Createhome();
        main.appendChild(temp);
    home_button.addEventListener('click', ()=>{
        
        main.innerHTML = '';
        let items = Createhome();
        main.appendChild(items);
    }) 

    about_button.addEventListener('click', ()=>{
        main.innerHTML = '';
        let about_content = CreateAbout();
        main.appendChild(about_content);
    })    

    menu_button.addEventListener('click', ()=>{
        main.innerHTML = '';

        let content = CreateMenu();
        main.appendChild(content);
    })












})
