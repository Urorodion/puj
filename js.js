const fontsWeight = ['300', '400', '500', '900'];
const first = document.querySelector('.timer__number');
const logo = document.querySelector('.logo__video');
const app = document.querySelector('.app-page');
const load = document.querySelector('.load-page');
const logo_white__video = document.querySelector('.logo-white__video');
const logo_white_img = document.querySelector('.logo-white__img');
const logo_white = document.querySelector('.logo-white');



let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});


function firstCounter(ms) {
    let counterFirst = 0;
    let interval = setInterval(() => {
        first.innerHTML = ++counterFirst;
        counterFirst === 99 ? clearInterval(interval) : false;
        let weidth = randomweight();
        first.style.fontWeight = weidth;
    }, ms)
}
firstCounter(70)


function randomweight() {
    const index = Math.floor(Math.random() * fontsWeight.length);
    return fontsWeight[index];
}


setTimeout(() => {
    first.style.display = 'none';
    load.style.opacity = '0';
    app.style.display = 'grid';
}, 7000);


setTimeout(() => {
    logo_white__video.style.display = 'block';
    logo.style.filter = 'none';
}, 7300);
setTimeout(() => {
    logo_white_img.style.display = 'block';
    logo_white__video.style.display = 'none';
}, 8900);