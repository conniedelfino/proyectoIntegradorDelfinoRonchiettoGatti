window.addEventListener("load", function(){
    let botonLogout = document.querySelector(".logoutLink");

    botonLogout.addEventListener("click", function (evento){
        evento.preventDefault();
        localStorage.removeItem("userEmail");
        window.location.href = "./index.html";
    })


});