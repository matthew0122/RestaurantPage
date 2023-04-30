import './style.css';
import {createHome, homeInfo} from './home.js';
import {contactInfo} from './contact.js';
import {hoursInfo} from './hours.js';

createHome();
homeInfo();

const menu = document.getElementById('menu');
const hours = document.getElementById('hours');
const contact = document.getElementById('contact');

menu.addEventListener('click', changeToMenu);
hours.addEventListener('click', changeToHours);
contact.addEventListener('click',changeToContact);

function changeToHours(){
    clearinfo();
    hoursInfo();
    console.log("hours");
}
function changeToMenu(){
    clearinfo();
    homeInfo();
    console.log("menu");
}
function changeToContact(){
    clearinfo();
    contactInfo();
    console.log("contact");
}

function clearinfo(){
    (document.getElementById('info')).remove();
}