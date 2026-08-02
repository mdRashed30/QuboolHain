
//Student Name: MD Mamatajur Rashed
//Course: IT-150-44 Web Design
// Professor: Anthony Rodriguez
// File Name: script.js
// Date: July 30, 2026

// handle the mobile navigation 
document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('nav ul')


    if (toggle && navList) {
        toggle.addEventListener("click", function () {
            navList.classList.toggle('nav-open');
            toggle.classList.toggle('open');
        });
    }

})