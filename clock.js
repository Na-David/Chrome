const dateElement = document.getElementById("date");
const timeElement = document.getElementById("time");

const modifyNumber = (month) => {

    return parseInt(month) < 10 ? "0" + month : month;
}

const getNowDate = () => {
    const nowDate = new Date();

    const week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const monthList = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

    let month = monthList[nowDate.getMonth()];
    let date = modifyNumber(nowDate.getDate());
    let day = week[nowDate.getDay()];

    setNowDate(month, date, day);

}

const setNowDate = (month, date, day) => {
    dateElement.textContent = `${date} ${month}, ${day}`
}

const getNowTime = () => {
    const nowDate = new Date();

    let hour = nowDate.getHours();
    let min = modifyNumber(nowDate.getMinutes());
    let sec = modifyNumber(nowDate.getSeconds());

    setNowTime(hour, min, sec);

}

const setNowTime = (hour, min, sec) => {
    timeElement.textContent = `${hour} : ${min} : ${sec}`;
}

getNowDate();
getNowTime();

setInterval(getNowTime, 1000);