import '../css/nav-bar.css';

const content = document.querySelector('#content');


const createNav = function() {
    const nav = document.createElement('nav');

    //Resturant Name Logo
    const nameDiv = document.createElement('div');
    nameDiv.setAttribute('id', "name");
    let name = document.createElement('h1');
    name.textContent = "Shah's Resturant";
    nameDiv.appendChild(name);

    //Links
    const navLinks = document.createElement("div");
    navLinks.setAttribute('id', "nav-links");
    let home = document.createElement('h3');
    home.textContent = "Home";
    let menu = document.createElement('h3');
    menu.textContent = "Menu";
    let contactUs = document.createElement('h3');
    contactUs.textContent = "Contact Us";
    navLinks.append(home, menu, contactUs);

    nav.append(nameDiv, navLinks);
    return nav;
}

const appendNav = function() {
    content.prepend(createNav());
}

export default appendNav;