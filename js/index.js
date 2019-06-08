// Your code goes here
const nav = document.querySelector('header');

nav.addEventListener('mouseover', event => {
    nav.style.background = 'pink';
});

nav.addEventListener('mouseleave', event => {
    nav.style.background = 'white';
});

const btn = document.querySelectorAll('.btn')
btn[0].addEventListener('click', event => {
    document.querySelector('.bg-modal').style.display = 'flex';
});