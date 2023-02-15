function updateTime() {

    const clock = new Date();

    let hours = clock.getHours();
    let minutes = clock.getMinutes();
    let seconds = clock.getSeconds();

    document.querySelector('.hours').innerHTML = hours;
    document.querySelector('.minutes').innerHTML = minutes;
    document.querySelector('.seconds').innerHTML = seconds;
};
setInterval(updateTime, 1000);