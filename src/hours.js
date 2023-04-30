export function hoursInfo(){
    const info = document.createElement('div');
    info.id="info";
    const doc = document.createElement('p');
    doc.innerText = "Open from 9-5 every day";
    info.appendChild(doc);
    content.appendChild(info);
    console.log(info.style.top);
}