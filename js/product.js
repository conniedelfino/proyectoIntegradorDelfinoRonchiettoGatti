window.addEventListener("load", function(){
    let queryString = window.location.search;
    let params = new URLSearchParams(queryString);
    let idProducto = params.get("id");
    let contenedorPorducto = document.querySelector(".productoA");
    let urlDetalle = "https://dummyjson.com/products/" + idProducto ;

    fetch(urlDetalle)
        .then(function (response){
            return response.json();
        })
        .then(function (data){
            console.log("Detalle producto: ", data);

            let html = `
            <img src="${data.thumbnail}" alt="producto ">
            <div>
                <h3 class="chaqueta">${data.title}</h3>
                <h4 class="marca">Polo Ralph Lauren</h4>
                <h4 class="descripcionChaqueta">${data.description}</h4>
                <h4 class="precio">$ ${data.price} USD</h4>
                
                <h6 class="chaquetasyabrigos">${data.category}</h5>
                <h6 class="stock">En Stock</h6>
                <ol class="listaProduct">
                    <li>#${data.id}</li>
                    <li>#${data.brand}</li>
                    <li>#${data.category}</li>
                </ol>
             </div>
    
            `;

            contenedorPorducto.innerHTML = html;

        })
})
