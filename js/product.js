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

console.log(lista);

