import renderHome from "./pages/homePage";
import renderMenu from "./pages/menuPage"
import { getHome, getMenu, getContact } from './components/nav-bar';

renderMenu();
// renderHome();


//Nav 

const content = document.querySelector("#content");

const home = getHome()
home.addEventListener("click", e => {
    content.innerHTML = "";
    renderHome();
});

const menu = getMenu();
menu.addEventListener("click", e => {
    content.innerHTML = "";
    renderMenu();
    console.log('something happened')
});