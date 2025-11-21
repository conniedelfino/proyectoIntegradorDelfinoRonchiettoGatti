let lista = document.querySelector(".categorias nav ul");

fetch("https://dummyjson.com/products/categories")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        for (let i = 0; i < data.length; i++){
            lista.innerHTML += '<li><a href="./category.html?caregory=">' + data[i] + '</a></li>';
        }
    })
    .catch(function(error) {
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

const querystring = location.search;

const querystringobj = new URLSearchParams(querystring);

const buscador = querystringobj.get("buscador");

console.log("Termino buscado: ", buscador);

const contenedorResultados = document.querySelector(".masvendidosMujeres h4");

if(buscador == null){
    contenedorResultados.innerHTML = "<h4> No se ingreso ningun termino de busqueda. </h4>"
} else if (buscador == ""){
    contenedorResultados.innerHTML = "<h4> No se ingreso ningun termino de busqueda </h4>"
} else{
    fetch("https://dummyjson.com/products/search?q=" + buscador)
    .then(function(response){
        return response.json();
})
.then(function(data){
    let productos = data.products;
    let contenido = "";

    contenido += "<h4> Terminos encontrados para su busqueda: " + buscador + "</h4>"
    contenido += `<div class = linea ></div>`
    if (productos.length == 0){
        contenido += "<p> No hay resultados para el termino: " + buscador + "</p>"
    } else {
        for (let i = 0; i < productos.length; i++){
            contenido +=
            "<article class = ´poloproducts´>" +
            '<img src="' + productos[i].thumbnail + '" alt="' + productos[i].title + '">' +
                        '<h2>' + productos[i].title + '</h2>' +
                        '<p>' + productos[i].brand + '</p>' +
                        '<p>$' + productos[i].price + ' USD</p>' +
                        '<a href="./product.html?id=' + productos[i].id + '">Ver detalle</a>' +
                    '</article>'; 
        }
        }
        contenedorResultados.innerHTML = contenido;
})
.catch(function(error){
    console.log("Error: " + error);
});
}