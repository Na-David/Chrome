const dateElement = document.getElementById("date");
const timeElement = document.getElementById("time");

const modifyNumber = (month) => {

    // if( month < 10){
    //     return "0"+ month
    // } else {
    //     return month
    // }

    return parseInt(month) < 10 ? "0" + month : month;
}

const getNowDate = () => {
    const nowDate = new Date();

    const week = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    const monthList = ["January","February","March","April","May","Jun","July","August","September","October","November","December"];

    let month = monthList[nowDate.getMonth()];
    let date = modifyNumber(nowDate.getDate());
    let day = week[nowDate.getDay()];

    console.log(month, date, day);
}

const setNowDate = (month, date, day) => {
    dateElement.textContent = `${month}`
}

getNowDate();