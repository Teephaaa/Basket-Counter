const Home = document.querySelector (".Home");
const Guest = document.querySelector (".Guest");

const homeBtn1 = document.querySelector (".homeBtn1");
const homeBtn2 = document.querySelector (".homeBtn2");
const homeBtn3 = document.querySelector (".homeBtn3");

const guestBtn1 = document.querySelector (".guestBtn1");
const Btn2 = document.querySelector (".guestBtn2");
const guestBtn3 = document.querySelector (".guestBtn3");

const newGame = document.querySelector (".new-game");

let number = 0;

homeBtn1.addEventListener("click", ()=> {
    number++;
    Home.textContent = number;
})

homeBtn2.addEventListener("click", ()=> {
    number++ + number++;
    Home.textContent = number;
})

homeBtn3.addEventListener("click", ()=> {
    number++ + number++ + number++;
    Home.textContent = number;
})

newGame.addEventListener ("click", ()=> {
    number = 0;
    Home.textContent = number;
    Guest.textContent = number;
})

guestBtn1.addEventListener("click", ()=> {
    number++;
    Guest.textContent = number;
})

guestBtn2.addEventListener("click", ()=> {
    number++ + number++;
    Guest.textContent = number;
})

guestBtn3.addEventListener("click", ()=> {
    number++ + number++ + number++;
    Guest.textContent = number;
})