const content = document.querySelector('#content');

const clearContent = function() {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

export default clearContent;