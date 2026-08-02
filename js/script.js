
//Student Name: MD Mamatajur Rashed
//Course: IT-150-44 Web Design
// Professor: Anthony Rodriguez
// File Name: script.js
// Date: July 30, 2026

// handle the mobile navigation 
document.addEventListener("DOMContentLoaded", function () {
    var toggle = document.querySelector('.nav-toggle');
    var navList = document.querySelector('nav ul')


    if (toggle && navList) {
        toggle.addEventListener("click", function () {
            navList.classList.toggle('nav-open');
            toggle.classList.toggle('open');
        });
    }

    var email = document.querySelector('#email');
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // took from google search 
    if (!emailPattern.test(email.value.trim())) {
        showError('email', 'Please enter a valid email address.');
    } else { clearError('email') };


})