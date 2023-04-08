const comingsoon = () =>{
    const currentTime = new Date().getTime();
    const bdy = new Date('05 dec 2023 00:00:00');
    const gapeTime = bdy-currentTime;

    const second = 1000;
    const minute = second*60;
    const hour = minute*60;
    const day = hour*24;

    const gapeDay = Math.round(gapeTime/day);
    const gapeHour = Math.round((gapeTime%day)/hour);
    const gapeMinute = Math.round((gapeTime%hour)/minute);
    const gapeSecond = Math.round((gapeTime%minute)/second);

    document.querySelector('.day').innerHTML = gapeDay;
    document.querySelector('.hour').innerHTML = gapeHour;
    document.querySelector('.minute').innerHTML = gapeMinute;
    document.querySelector('.second').innerHTML = gapeSecond;
    console.log(gapeSecond);
};
setInterval(comingsoon,1000);