let lista = document.querySelector()
fetch("https://dummyjson.com/products/categories")
    .then(function(response) {
        return response.json();
    })
.then(function(data) {
    for (let i = 0; 1 < data.length; i++){
        lista.innerHTML += <li><a href="./category.html">${data[i].name}</a></li>
    }
})
.catch(function(error) {
    console.log("Error: " + error);
})

const form = document.querySelector("");
const busqueda = document.querySelector("");

form.addEventListener("submit", function(event){
    event.preventDefault();
    if (busqueda.value == ""){
        alert("LLenar Campo Obligatorio");
}   else if (busqueda.value.length < 3){
        alert("Ingrese como minimo 3 caracteres")
}   else{
    this.submit()
}
})
const querystring = location.search;
const querystringobj = new URLSearchParams(querystring);
const buscador = querystring.get("ALGO");

console.log(buscador);
const resultado = document.querySelector("ALGO")
resultado.innerHTML = "Resultados encontrados para su busqueda" + buscador;