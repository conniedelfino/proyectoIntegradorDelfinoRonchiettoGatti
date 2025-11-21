window.addEventListener("load", function(){

   
   let email = localStorage.getItem("emailUsuario");
    let saludo = document.querySelector(".saludoUser");
    let botonLogaut = document.querySelector(".logout");
    let loginItem = document.querySelector(".loginItem");
    let registerItem = document.querySelector(".registerItem");

    if (email != null){

        saludo.innerHTML = "Bienvenido" + email
        saludo.style.display = "block";

        botonLogout.style.display = "Block";
        loginItem.style.display = "none";
        registerItem.style.display = "none";

    }
});