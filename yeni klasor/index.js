let userName = prompt("Adinizi yaziniz..");
let myName = document.querySelector("#myName");

if (userName.length <= 0) {
  alert("Boş bırakılamaz");
  location.reload();
} else {
  myName.innerHTML = `${userName}`;
}

function time() {
  let days = [
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
    "Pazar",
  ];
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let day = date.getDay();
  document.getElementById(
    "myClock" //clas adı
  ).innerHTML = `${hour}:${min}:${sec} ${days[day]}`;
}
setInterval(time, 1000);
