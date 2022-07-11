let plato1={
    nombre:"bandeja paisa",
    precio:39900,
    descripcion: 'plato tipico de Medellin',
    categoria:1
}
let plato2={
    nombre:"Hamburguesa",
    precio:10000,
    descripcion: 'comida rapida',
    categoria:1

}
let plato3={
    nombre:"tamales",
    precio:12000,
    descripcion: 'plato tipico de Medellin',
    categoria:1

}
let plato4={
    nombre:"Ajiaco",
    precio:11000,
    descripcion: 'plato tipico de Medellin',
    categoria:2

}
let plato5={
    nombre:"claro",
    precio:5000,
    descripcion: 'bebida tipico de Medellin',
    categoria:4

}
let platos=Array(plato1,plato2,plato3,plato4,plato5)

//1.forEach
platos.forEach(function(plato){
    console.log(plato.precio)
})

//2.filter

let resultado=platos.filter(function(plato){
    return(plato.categoria==2)
})
console.log(resultado)

let resultado1=platos.filter(function(plato){
    return(plato.precio>10000)
})
console.log(resultado1)

let resultado2=platos.filter(function(plato){
    return(plato.precio>20000 && plato.precio<40000 )
})
console.log(resultado2)

//3.find

let busqueda=platos.find(function(plato){
    return(plato.precio==5000)
})
console.log(busqueda)

//4.map

let mapa=platos.map(function(plato){
    return(plato.categoria=100)
})
console.log(mapa)

//5.push
let plato6={
    nombre:"jugo de mora",
    precio:4000,
    descripcion: 'bebida tipico de Medellin',
    categoria:4
}
platos.push(plato6)
console.log(platos)