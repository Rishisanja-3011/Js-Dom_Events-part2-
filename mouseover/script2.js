


let mou = document.querySelector("#mou");

window.addEventListener("mousemove",function(dets){
        mou.style.bottom = dets.clientY + "px";
        mou.style.left = dets.clientX + "px";
});