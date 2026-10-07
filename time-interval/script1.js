
let count = 0;
let alertt = document.querySelector(".alert")
let interval =  setInterval(()=>{
    count++;
    if(count==3){
        alertt.style.display = "none" ;
    }

    if(count>3){
        clearInterval(interval);
        
    }

},1000)