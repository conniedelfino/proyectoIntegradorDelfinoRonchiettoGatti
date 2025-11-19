let lista = document.querySelector("");
fetch("https://dummyjson.com/product/categories")
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        for (let i = 0; i < data.lenght; i++){
            lista.innerHTML += <li><a href="./category.html">${data[i].name}</a></li>
        }
    })
    .catch(function (error){
        console.log("Error: " + error);
    });