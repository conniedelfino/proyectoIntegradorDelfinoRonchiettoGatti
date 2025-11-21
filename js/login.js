let formLogin = document.querySelector(".loginForm");

formLogin.addEventListener("submit", function(e){
    let emailLogin = document.querySelector(".emailForm");
    let contraLogin = document.querySelector(".contrasenaForm");
    let nombre = localStorage.getItem("usuario");
    let contra = localStorage.getItem("password");

    let email = emailLogin.value;
    let password = contraLogin.value;
    evento.preventDefault();
    if(email === "" || password === ""){
        alert("Los campos son obligatorios!");
        e.preventDefault();
    }
    else if (password.length < 6){
        alert("La contraseña debe contener por lo menos 6 caracteres!");
        e.preventDefault();
    }
    else if (email === nombre && password === contra){
        localStorage.setItem("logedUser", "True");
        location.href = "index.html";
    }
    else{
        alert("El usuario o la contraseña son incorrectos, intente nuevamente!")
        e.preventDefault();
    }
})