// datos de la BD
// 10 productos y 20 fotos. dos por cada uno.

//funcion para pintar productos en la tienda
export function pintarProductos(productos){
    // PASOS PARA PINTAR (HACER RENDER) DE ETIQUETAS HTML DESDE JS
    //TRAVERSING

    //1. Crear una variale que almacene la etiqueta sobre la cual voy a pintar
    //(ETIQUETA PADRE O ETIQUETA RAIZ)
    let fila=document.getElementById("fila")

    // RECORRIENDO UN ARREGLO (ESCULCAR)
    productosBD.forEach(function(producto){
    console.log(producto.nombre)
    console.log(producto.fotos[0])

})


    //2.recorro el arreglo de datos y aplico traversing
    productos.forEach(function(producto){

    //2.1 creando una columna desde js
    let columna=document.createElement("div")
    columna.classList.add("col")

    //2.2 creando la tarjeta
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100","text-center")

    //2.3 creando la foto
    let fotoProducto=document.createElement("img")
    fotoProducto.classList.add("img-fluid","w-100")
    fotoProducto.src=producto.fotos[0]

    //2.4 creando el elemento del producto
    let nombreProducto=document.createElement("h3")
    

    //2.5 creando el precio del producto
    let precioProducto=document.createElement("h3")
    precioProducto.classList.add("fw-bold")
    precioProducto.textContent='$'+producto.precio+'COP'

    //2.6 detectando eventos
    columna.addEventListener("mouseover",function(){
        fotoProducto.src=producto.fotos[1]
    })
    columna.addEventListener("mouseleave",function(){
        fotoProducto.src=producto.fotos[0]
    })
   

    //3 DEFINO PADRES E HIJOS
    tarjeta.appendChild(fotoProducto)
    tarjeta.appendChild(nombreProducto)
    tarjeta.appendChild(precioProducto)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

})
}





// let buscador=document.getElementById("busqueda")
// busqueda.addEventListener("keypress",function(evento){
//     console.log(evento.target.value)
// })