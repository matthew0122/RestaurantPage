import Logo from './logo.png';
const content = document.getElementById('content');

export function createHome(){
    createHeader();
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
    content.appendChild(header);
}