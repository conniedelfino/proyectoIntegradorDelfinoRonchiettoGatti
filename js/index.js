let lista = document.querySelector(".categorias nav ul");

fetch("https://dummyjson.com/products/categories")
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        for (let i = 0; i < data.length; i++){
            lista.innerHTML += '<li><a href="./category.html">' + data[i] + '</a></li>';
        }
    })
    .catch(function (error){
        console.log("Error: " + error);
    });

const form = document.querySelector(".buscador form");
const busqueda = document.querySelector('input[name="buscador"]');

form.addEventListener("submit", function(event){
    event.preventDefault();

    if (busqueda.value == ""){
        alert("LLenar Campo Obligatorio");
    } else if (busqueda.value.length < 3){
        alert("Ingrese como minimo 3 caracteres");
    } else{
        this.submit();
    }
});
