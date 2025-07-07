let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

function timeToString(time) {
    const date = new Date(time);
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');
    const milliseconds = String(date.getUTCMilliseconds()).padStart(3, '0');
    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

function print(txt) {
    document.getElementById("time").innerHTML = txt;
}

function start() {
    if (isRunning) return;
    isRunning = true;
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function () {
        elapsedTime = Date.now() - startTime;
        print(timeToString(elapsedTime));
    }, 10);
}

function stop() {
    clearInterval(timerInterval);
    isRunning = false;
}

function reset() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    isRunning = false;
    print("00:00:00.000");
    document.getElementById("laps").innerHTML = "";
}

function lap() {
    if (!isRunning) return;
    const lapTime = timeToString(elapsedTime);
    const lapItem = document.createElement("li");
    lapItem.textContent = lapTime;
    document.getElementById("laps").appendChild(lapItem);
    setTimeout(() => {
        lapItem.classList.add("show");
    }, 10);
}
