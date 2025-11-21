let urlMasVendidos = 'https://dummyjson.com/products/category/tops';
let masVendidos = document.querySelector(".masvendidos");
let h4masvendidos = document.querySelector(".h4masvendidos");

fetch(urlMasVendidos)
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        console.log(data);
        let productosMv = data.products;
        let productoVaciosMv = [];
        productoVaciosMv += `<h4 class="h4masVendidos">Mas Vendidos</h4>`
        for (let i = 0; i < productosMv.length; i++){
            productoVaciosMv += `<article class="poloproducts">
                        <img src=${productosMv[i].thumbnail} alt="campera doble fuelle">
                        <h2>${productosMv[i].title}</h2>
                        <p>${productosMv[i].description}</p>
                        <p>${productosMv[i].price}</p>
                        <a href="./product.html"?id=${productosMv[i].id}>Ver detalle</a>
                    </article>`
        }

        masVendidos.innerHTML = productoVaciosMv;
    })

    .catch(function (error){
        console.log(error);
    });


let urlAleatorios = 'https://dummyjson.com/products/category/men-shirt';
let aleatorios = document.querySelector(".aleatorios");
let h4aleatorios = document.querySelector(".h4aleatorios");

fetch(urlAleatorios)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let productosA = data.products;
        let productoVacioA = [];
        productoVacioA += `<h4 class="h4aleatorios">Aleatorios</h4>`
        for (let i = 0; i < productosA.length; i++){
            productoVacioA += ` <article class="poloproducts">
                        <img src=${productosA[i].thumbnail} alt="chaqueta wyton">
                        <h2>${productosA[i].title}</h2>
                        <p>${productosA[i].description}</p>
                        <p>${productosA[i].price}</p>
                        <a href="./product.html"?id=${productosA[i].id}>Ver detalle</a>
                    </article>`
        }
        aleatorios.innerHTML = productoVacioA;

     })
     .catch(function(error){
        console.log(error);
    })