export function contactInfo(){
    const info = document.createElement('div');
    info.id="info";
    const doc = document.createElement('p');
    doc.innerText = "Call us at 999-999-9999";
    info.appendChild(doc);
    content.appendChild(info);
    console.log(info.style.top);
}