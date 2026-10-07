const h1 = document.querySelector("h1");
const progress = document.querySelector(".progress-bar");
const percent = document.querySelector("#percent");
const progressContainer = document.querySelector(".progress-container");
let count = 0;

const interval = setInterval(() => {
    count++;
    progress.style.width = `${count}%`;
    percent.textContent = `${count}%`;
   

    if (count === 100) {
        clearInterval(interval);
        h1.textContent = "Download Complete!";
    }
}, 10000/100);