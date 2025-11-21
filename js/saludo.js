    let nombreUsuario = localStorage.getItem("userEmail");
    let linkLogin = document.querySelector(".loginB");
    let linkRegistro = document.querySelector(".registerB");
    let navHead = document.querySelector(".navHead");

    if (nombreUsuario){
        linkLogin.style.display = "none";
        linkRegistro.style.display = "none";
        navHead.innerHTML += `<li class= "elementosheader saludo" >bienvenido: ${userEmail}</li>`
        navHead.innerHTML += `<li class= elementosheader logout><a href = "#">LOGOUT</a></li>`;
    };