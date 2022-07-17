const fontsWeight = ['100', '300', '400', '500', '700', '900'];
const first = document.querySelector('.timer__number')
const logo = document.querySelector('.logo__video')
const app = document.querySelector('.app-page')
const load = document.querySelector('.load-page')


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

