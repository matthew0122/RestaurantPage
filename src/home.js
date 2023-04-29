import Logo from './logo.png';
const content = document.getElementById('content');

export function createHome(){
    createHeader();
    createTabs();
}

function createHeader(){
    const header = document.createElement('div');
    header.id = 'header';
    const logo = new Image();
    logo.src = Logo;
    logo.id = 'logo';
    header.appendChild(logo);
    const title = document.createElement("div");
    title.id='title';
    title.innerHTML = "<h1>THE HAPPY PLATE</h1>";
    header.append(title);
    const topButton = document.createElement("button");
    topButton.innerText = "Order Now";
    topButton.id = 'order';
    header.append(topButton);
    content.appendChild(header);
}
function createTabs() {
    const tabs = document.createElement('div');
    tabs.id = 'tabs';
    const blank = document.createElement('div');
    tabs.appendChild(blank);
    const menu = document.createElement('button');
    menu.classList.add('menuButton');
    menu.innerText = "Menu";
    tabs.appendChild(menu);
    const hours = document.createElement('button');
    hours.classList.add('menuButton');
    hours.innerText = "Hours";
    tabs.appendChild(hours);
    const contact = document.createElement('button');
    contact.classList.add('menuButton');
    contact.innerText = "Contact";
    tabs.appendChild(contact);
    content.appendChild(tabs);
}