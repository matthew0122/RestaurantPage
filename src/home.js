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
    menu.id='menu';
    tabs.appendChild(menu);
    const hours = document.createElement('button');
    hours.classList.add('menuButton');
    hours.id='hours';
    hours.innerText = "Hours";
    tabs.appendChild(hours);
    const contact = document.createElement('button');
    contact.classList.add('menuButton');
    contact.innerText = "Contact";
    contact.id='contact';
    tabs.appendChild(contact);
    content.appendChild(tabs);
}
export function homeInfo(){
    const info = document.createElement('div');
    info.id="info";
    const doc = document.createElement('p');
    doc.innerText = "Quick tip: the node_modules folder can get really big. It is customary to add a .gitignore file to your project so that you don’t have to sync the contents of node_modules to github. The dependencies that are stored there can be installed from your package.json by running npm install, so you don’t need to sync them.";
    info.appendChild(doc);
    content.appendChild(info);
    console.log(info.style.top);
}