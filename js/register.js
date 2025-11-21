window.addEventListener("load", function () {
let formulario = document.querySelector(".registerForm");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let passwordConfirm = document.querySelector("#passwordConfirm");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

if (email.value == "") {
    alert("¡El campo de email es obligatorio!");
} else if (password.value == "") {
    alert("¡El campo de contraseña es obligatorio!");
} else if (passwordConfirm.value == "") {
    alert("¡El campo de confirmación de contraseña es obligatorio!");
} else if (password.value.length < 6) {
    alert("La contraseña debe tener al menos 6 caracteres");
} else if (password.value !== passwordConfirm.value) {
    alert("Las contraseñas no coinciden");
} else {
    this.submit();
}
});
});