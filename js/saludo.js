
    window.addEventListener("load", function (){
        let userEmail = localStorage.getItem("userEmail");
        let linkLogin = document.querySelector(".loginB");
        let linkRegistro = document.querySelector(".registerB");
        let navHeadUl = document.querySelector(".navHead ul");

        linkLogin.style.display = "inline-block";
        linkRegistro.style.display = "inline-block";

        if(userEmail){
            linkLogin.style.display = "none";
            linkRegistro.style.display = "none";
            navHeadUl.innerHTML += `
            <li class="saludo">Bienvenido: ${userEmail}</li>
            <li class="logout"><a href="./product.html">Logout</a></li>
            `;

        }

    });