const fontsWeight = ['100', '300', '400', '500', '700', '900'];
const first = document.querySelector('.timer__number')
const logo = document.querySelector('.logo__video')
const app = document.querySelector('.app-page')
const load = document.querySelector('.load-page')

let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
    // We execute the same script as before
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
firstCounter(50)


function randomweight() {
    const index = Math.floor(Math.random() * fontsWeight.length);
    return fontsWeight[index];
}





setTimeout(() => {
    first.style.display = 'none';
    logo.style.filter = 'none';
    load.style.display = 'none';
    app.style.display = 'block';
}, 5000);

