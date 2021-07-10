import createNavAndFooter from "../components/navAndFooter";
import '../css/menuPage.css';
import hotdog from '../img/hotdog.png'


const content = document.querySelector('#content');
content.innerHTML = '';

const menuDiv = document.createElement('div');
menuDiv.setAttribute('id', 'menu');
content.appendChild(menuDiv);

const createItem = function(itemName, imgSrc, itemPrice) {
    const item = document.createElement('div');
    item.classList.add('item');

    const name = document.createElement('h3');
    name.textContent = itemName;
    item.appendChild(name);

    const img = new Image();
    img.src = imgSrc;
    item.appendChild(img);

    const price = document.createElement('h4');
    price.textContent = itemPrice;
    item.appendChild(price);

    menuDiv.appendChild(item);
}

const renderMenu = function() {
    createItem('Hotdog', hotdog, '$2');
    createItem('Hotdog', '../img/hotdog.png', '$2');
    createItem('Hotdog', '../img/hotdog.png', '$2');
    createNavAndFooter();

}

export default renderMenu;