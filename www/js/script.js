var content = document.querySelector('#hamburger-content');
var sidebarBody = document.querySelector('#hamburger-sidebar-body');
var button = document.querySelector('#hamburger-button');
var hiddenDiv = 'hidden';
var displayedDiv = 'displayed';
var sideBar = document.querySelector('#hamburger-sidebar');

let listItems = document.getElementsByClassName('ul-content');

sidebarBody.innerHTML = content.innerHTML;


button.addEventListener('click', function (e) {
    e.preventDefault;
    sideBar.parentNode.classList.toggle('hamburger-activated');
});

for (var i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', function () {
        sideBar.parentNode.classList.toggle('hamburger-activated');
    })
}

