function JSClock() {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    let temp = String(hours % 12);
    if (temp === "0"){
        temp = "12"
    }

    temp += (minutes<10 ? ":0" : ":") + minutes;
    temp += (seconds<10 ? ":0" : ":") + seconds;
    temp += (hours <= 12 ? "AM" : "PM");

    return temp;
}
  console.log(JSClock())

//Date Time Format
const check = new Date("2020-07-20");
const opt = {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short"

}

const americanTimeFormat = new Intl.DateTimeFormat("en-US", opt).format;
console.log(americanTimeFormat(check))

//Number Formating
const data = new Intl.NumberFormat("en-US", {style:"currency", currency : "USD", minimumFractionDigits: 3})
console.log(data.format(5.258))

//format
const bigDay = new Date(2020,11,30, 18,30,20);
const x= bigDay.getTime();
const y= Date.now()
console.log(x,y)
if (y>x){
    console.log("Once Upon a Time")
}

console.log("1",bigDay.toDateString())
console.log("2",bigDay.toLocaleDateString())
console.log("3",bigDay.toString());
console.log("4",bigDay.toDateString())
console.log("5",bigDay.toTimeString())
console.log("6",bigDay.toLocaleTimeString())

