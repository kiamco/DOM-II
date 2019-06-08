// Your code goes here
// class variables
const nav = document.querySelector('header');
const signUp = document.querySelector('.modal-content .signUp');
const input = document.querySelector('.modal-content .name');
const btn = document.querySelectorAll('.btn')
const close = document.querySelector('.close-btn');
const modal = document.querySelector('.modal-content');
const email = document.querySelector('.email');


// header hover mouseover
nav.addEventListener('mouseover', event => nav.style.background = 'pink');
nav.addEventListener('mouseleave', event => nav.style.background = 'white');

// show modal when submit click
btn[0].addEventListener('click', event => {
    document.querySelector('.bg-modal').style.display = 'flex';
});

//listen for enter 
input.addEventListener('keydown', event => {
    if (event.keyCode === 13) {
        signUp.click() //click when press enter 
    }
});

// close modal
close.addEventListener('click', event => {
    document.querySelector('.bg-modal').style.display = 'none';
});

//submit button

signUp.addEventListener('click', event => {
    document.querySelector('.bg-modal').style.display = 'none';
});

// listen when page is fully loaded
window.addEventListener('load', (event) => {
    console.log('page fully loaded');
});

email.addEventListener('focus', event => {
    event.target.style.background = 'pink';
}, true);