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

let categoria1 = "tops"
let contenedor1 = document.querySelector(".masvendidos .items");

fetch("https://dummyjson.com/products/category/" + categoria1)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let productos = data.products;
        for (let i = 0; i < 10; i++){
            contenedor1.innerHTML += 
            '<article class="poloproducts">' +
                '<img src="' + productos[i].thumbnail + '">' +
                '<h2>' + productos[i].title + '</h2>' +
                '<p>' + productos[i].brand + '</p>' +
                '<p>$' + productos[i].price + ' USD</p>' +
                '<a href="./product.html?id=' + productos[i].id + '">Ver detalle</a>' +
            '</article>';
     }
     })
     .catch(function(error){
        console.log("Error: " + error);
    })

    let categoria2 = "mens-shirts"
    let contenedor2 = document.querySelector(".aleatorios .items");

fetch("https://dummyjson.com/products/category/" + categoria2)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let productos = data.products;
        for (let i = 0; i < 10; i++){
            contenedor2.innerHTML += 
            '<article class="poloproducts">' +
                '<img src="' + productos[i].thumbnail + '">' +
                '<h2>' + productos[i].title + '</h2>' +
                '<p>' + productos[i].brand + '</p>' +
                '<p>$' + productos[i].price + ' USD</p>' +
                '<a href="./product.html?id=' + productos[i].id + '">Ver detalle</a>' +
            '</article>';
     }
     })
     .catch(function(error){
        console.log("Error: " + error);
    })