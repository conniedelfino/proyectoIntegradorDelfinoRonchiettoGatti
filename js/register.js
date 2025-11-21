window.addEventListener("load", function(){
let formRegister = document.querySelector(".registerForm");
let emailR = document.querySelector("#emailR");
let passwordR = document.querySelector("#passwordR");
let passwordR2 = document.querySelector("#passwordR2");
let terminos = this.document.querySelector("#terminos");

formRegister.addEventListener("submit", function(evento){
    evento.preventDefault();
    if (emailR.value == "") {
        alert("¡El campo de email es obligatorio!");
        evento.preventDefault();
    } else if (passwordR.value == "") {
        alert("¡El campo de contraseña es obligatorio!");
        evento.preventDefault();
    } else if (passwordR2.value == "") {
        alert("¡El campo de confirmación de contraseña es obligatorio!");
        evento.preventDefault();
    } else if (passwordR.value.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres");
        evento.preventDefault();
    } else if (passwordR.value !== passwordR2.value){
        alert("Las contraseñas no coinciden");
        evento.preventDefault();
    }else if(!terminos.checked){
        alert("Debe aceptar los términos y condiciones para continuar");
        evento.preventDefault();
    }else {
        this.submit();
    }
});
});