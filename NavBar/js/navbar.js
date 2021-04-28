/***********************************************
 *Copyright 2021 - Chris Williamson
 *NO BS libraries under open source license
 *All I ask is give credit where credit is due.
 *You may use this for personal or commercial
 ************************************************/

const navBar = document.getElementById('navbar');
const respMenu = document.getElementById('respMenu');
respMenu.addEventListener('click', () => {
    const navLinks = document.getElementById('navLinks');
    //navLinks.style.display = "none";
    const navOpen = navLinks.style.display;

    if (navOpen === "none") {
        navLinks.style.display = "block";
        navBar.setAttribute('class', 'active');
    } else {
        navLinks.style.display = "none";
        navBar.setAttribute('class', 'inactive');
    }

});

const li = document.getElementById('navbar').getElementsByTagName('ul');

for (let i = 0; i < li.length;) {
    li[i].addEventListener('click', () => {
        navLinks.style.display = "none";
        navBar.setAttribute('class', 'inactive');
    });
    ++i
}