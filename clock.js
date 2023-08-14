const dateElement = document.getElementById("date");
const timeElement = document.getElementById("time");

const getNowDate = () => {
    const nowDate = new Date();

    const week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    let month = nowDate.getMonth() + 1;
    let date = nowDate.getDate();
    let day = nowDate.getDay();

    console.log(month, date, day);
}

getNowDate();