import Createhome from "./home";
import CreateMenu from "./menu";
import CreateAbout from "./about"; 

import './style.css';
document.addEventListener("DOMContentLoaded", ()=>{

    const main = document.querySelector('#content');
    const home_button = document.querySelector('.home');
    const menu_button = document.querySelector('.menu');
    const about_button = document.querySelector('.button');

    home_button.addEventListener('click', ()=>{
        
        main.innerHTML = '';
        let items = Createhome();
        main.appendChild(items);
    }) 

    












})
