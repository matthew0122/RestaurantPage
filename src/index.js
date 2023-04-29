import './style.css';
import Logo from './logo.png';
const content = document.getElementById('content');
createHeader();


function createHeader(){
    const header = document.createElement('div');
    header.id = 'header';
    const logo = new Image();
    logo.src = Logo;
    header.appendChild(logo);
    content.appendChild(header);
}
