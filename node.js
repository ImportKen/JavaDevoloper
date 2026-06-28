function updateClock() {
    const now = new Date();
    console.clear();
    console.log(now.toLocaleTimeString());
}

setInterval(updateClock, 1000);