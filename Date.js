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
    temp += (hours <= 12 ? "AM" : "PM")

    return temp;
}
  console.log(JSClock())