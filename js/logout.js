window.addEventListener("load", function(){
    let botonLogaut = document.querySelector(".botonLogaout")
    botonLogaut.addEventListener("click", function(){
        localStorage.clear();
        let user = document.querySelector(".saludoUser")
        user.style.display = "none";
        let userNave = document.querySelector(".navUserLogout")
        userNave.style.display = "none";
    })
})