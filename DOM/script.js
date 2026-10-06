
// let h = document.getElementById("1");

// h.innerHTML = "kem cho";

// let x = document.querySelector("a");
// console.log(x.getAttribute("href"));

// console.log(x.setAttribute("x","www.chatgpt.com"));


// let change = document.querySelector("#heading");

// change.style.color = "red";
// change.textContent = "Welcome to Rishi's world!";

let change = document.querySelector("#sel");
let h1 = document.querySelector("h1");

change.addEventListener("change",function(){
    console.dir(change);
    console.dir(h1);
    h1.textContent = change.contentEditable
;
})

