
let dayitem = document.querySelector("#days")
let houritem = document.querySelector("#hours")
let minitem = document.querySelector("#min")
let secitem = document.querySelector("#sec")

let countdown = () => {
    let futuredate = new Date("28 feb 2023")
    let currentdate = new Date()
    let mydate = futuredate - currentdate

    let days = Math.floor(mydate / 1000 / 60 / 60 / 24);
    let hours = Math.floor(mydate / 1000 / 60 / 60) % 24;
    let min = Math.floor(mydate / 1000 / 60) % 60;
    let sec = Math.floor(mydate / 1000) % 60


    dayitem.innerHTML = days;
    houritem.innerHTML = hours;
    minitem.innerHTML = min;
    secitem.innerHTML = sec;

}
countdown()

setInterval(countdown, 1000)


function scrolltopback() {
    let scrolltopbutton = document.querySelector("#scrollup");
    window.onscroll = function(){
        var scroll = document.documentElement.scrolltop;
        if (scroll >= 250) {
            scrolltopbutton.classList.add('scrollactive');
        }
        else {
            scrolltopbutton.classList.remove('scrollactive');

        }
    }
}
scrolltopback()