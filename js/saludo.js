    let nombreUsuario = localStorage.getItem("emailUsuario");
    let linkLogin = document.querySelector(".loginB");
    let linkRegistro = document.querySelector(".registerB");
    let navheader = document.querySelector(".navHead");

    if (nombreUsuario){

        linkLogin.style.display = "none";
        linkRegistro.style.display = "none";

        header.innerHTML += `<li class= "elementosheader saludo" >bienvenido: ${nombreUsuario}</li>`
        header.innerHTML += `<li class= elementosheader logout><a href = "#">LOGOUT</a></li>`;

    };