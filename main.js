const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');
});

const typed = new Typed('.multiple', {
    strings: ['Wife', 'Mother', 'Japanese Teacher', 'Youtuber', 'Life-long Student'],
    typespeed:100,
    backSpeed:100,
    backDelay:2000,
    loop: true
});