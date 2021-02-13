const daysEl = document.getElementById('days')
const minutesEl = document.getElementById('minutes')
const hoursEl = document.getElementById('hours')
const secondsEl = document.getElementById('seconds')
const holi = '29 March 2021';

function countdown() {
    const currentDate =new Date();
    const holiDate = new Date(holi);

    const totalseconds = (holiDate - currentDate) /1000;
    const days = Math.floor(totalseconds/3600/24);
    const hours = Math.floor(totalseconds/3600) % 24;
    const minutes = Math.floor(totalseconds/60) %60;
    const seconds = Math.floor(totalseconds) % 60;
     
    daysEl.innerHTML = days;
    minutesEl.innerHTML = minutes;
    hoursEl.innerHTML = hours;
    secondsEl.innerHTML = seconds;
}

countdown();

setInterval(countdown,1000)
