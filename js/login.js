let formLogin = document.querySelector(".loginForm");
let emailL = document.querySelector("#emailL");
let passwordL = document.querySelector("#passwordL");

formLogin.addEventListener("submit", function(evento){
    evento.preventDefault();
    if(emailL.value==""){
        alert("¡El campo de email es obligatorio!");
    }else if (passwordL.value==""){
        alert("¡El campo de contraseña es obligatorio!");
    }
    else if (passwordL.value.length < 6){
        alert("La contraseña debe tener al menos 6 caracteres");
    }else{
        localStorage.setItem("userEmail", emailL.value);
        this.submit();
    }
});