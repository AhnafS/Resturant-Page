import createNav from '../components/nav-bar.js';
import '../css/homePage.css';
import Background from '../img/menuBackground.jpeg';

const content = document.querySelector('#content');


const renderMenu = function() {
    createNav();

}

export default renderMenu;