window.addEventListener("load", function(){
    let email = localStorage.getItem("emailUsuario");
    let saludo = document.querySelector(".saludoUser");
    let botonLogaut = document.querySelector(".logout");
    let loginItem = document.querySelector(".loginItem");
    let registerItem = document.querySelector(".registerItem");

    botonLogout.addEventListener("click", function(){
        localStorage.removeItem("email.Usuario");
        
        saludo.style.display = "none";
        botonLogout.style.display = "none";

        loginItem.style.display = "block";
        registerItem.style.display = "block";
    })
})