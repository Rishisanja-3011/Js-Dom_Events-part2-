let email = document.querySelector("#email");
let pass = document.querySelector("#password");
let form = document.querySelector("form");

form.addEventListener("submit",function(dets){
    dets.preventDefault();
    const emailregex= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let  isvalid = true;
    if(!emailregex.test(email.value)){
        document.querySelector("#emailError").textContent = "Invalid Email re-eter";
        isvalid = false;
    }
     if(!password.test(pass.value)){
        document.querySelector("#passwordError").textContent = "Invalid Password re-enter";
        isvalid = false;
    }
    if(isvalid){
        document.querySelector("#resultmessage").textContent = "Success"; 
    }

});