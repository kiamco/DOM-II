// Your code goes here
// class variables
const mainCon = document.querySelector('container');
const navContainer = document.querySelector('.main-navigation');
const nav = document.querySelector('header');
const signUp = document.querySelector('.modal-content .signUp');
const input = document.querySelector('.modal-content .name');
const btn = document.querySelectorAll('.btn')
const close = document.querySelector('.close-btn');
const modal = document.querySelector('.modal-content');
const email = document.querySelector('.email');
const welcomeP = document.querySelector('p');
const firstImg = document.querySelector('img');
const extra = document.querySelector('.extra');
const extra2 = document.querySelector('.extra2')


// header hover mouseover
nav.addEventListener('mouseover', event => nav.style.background = 'pink');
nav.addEventListener('mouseleave', event => nav.style.background = 'white');

// wheel
modal.addEventListener('wheel', event => {
    if (modal.style.color === "black") {
        modal.style.color = 'pink';
    } else {
        modal.style.color = 'black';
    }
});
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

// focus
email.addEventListener('focus', event => {
    event.target.style.background = 'pink';
}, true);

// scroll
window.addEventListener('scroll', event => {
    if ((document.body.getBoundingClientRect()).top < 0) {
        nav.style.opacity = '0.7';
        navContainer.style.height = '50px';
    } else {
        nav.style.opacity = '1';
        navContainer.style.height = '90px';
    }
});

//resize
window.addEventListener('resize', event => {
    console.log(`browser height: ${event.target.innerHeight}`);
    console.log(`browser width: ${event.target.innerHeight}`);
});

// select
email.addEventListener('select', event => {
    email.style.fontSize = '4rem'
});

welcomeP.addEventListener('dblclick', event => welcomeP.textContent = 'Hello');

// drag
firstImg.addEventListener('drag', event => {
    if (event !== null) {
        firstImg.style.border = '2px solid black';
    } else {
        firstImg.style.border = 'none';
    }

});

// stop prop
extra2.addEventListener('click', event => {
    event.stopPropagation();
    alert('child')
});
extra.addEventListener('click', event => alert('parent'));

// prevent defualt
nav.addEventListener('click', event => event.preventDefault());