let formLogin = document.querySelector(".loginForm");
let emailLogin = document.querySelector("#email");
let contraLogin = document.querySelector("#password");

formLogin.addEventListener("submit", function(evento){
    evento.preventDefault();
    if(emailLogin.value == ""){
        alert("¡Este campo es obligatorio!");
    }else if (contraLogin.value == ""){
        alert("¡Este campo es obligatorio!");
    }
    else if (contraLogin.vaule.length < 6){
        alert("La contraseña debe tener al menos 6 caracteres");
    }else{
        localStorage.setItem("userEmail", emailLogin.value);
       this.submit()
    }
});