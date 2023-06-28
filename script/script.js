// Using javascript file as strict file for exposing all the loss errors or eliminating the silent errors into throwable errors
'use strict';

//selecting every elements from the html files in two types inputs(providing values) and outputs(displaying)
//inputs

//outputs

//functions
const init = () => { }

//events
// Add an event listener to detect when the user scrolls
document.addEventListener('scroll', function () {
    var header = document.querySelector('.header');

    // Check if the user has scrolled past a certain point
    if (window.scrollY > 500) {
        header.classList.add('visible');
    } else {
        header.classList.remove('visible');
    }
});

document.addEventListener('scroll', function () {
    var headerInput = document.querySelector('.header-search-input');

    // Check if the user has scrolled past a certain point
    if (window.scrollY > 500) {
        headerInput.classList.add('visible');
    } else {
        headerInput.classList.remove('visible');
    }
});

//initial settings
init();

