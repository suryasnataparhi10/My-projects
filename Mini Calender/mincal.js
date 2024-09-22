const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const toDay = new Date();

// console.log(toDay);
const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Satureday"];
const allMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];
date.innerHTML = (toDay.getDate()<10?"0":"")+ toDay.getDate();
day.innerHTML = weekDays[toDay.getDay()];
month.innerHTML = allMonths[toDay.getMonth()];
 year.innerHTML = toDay.getFullYear();