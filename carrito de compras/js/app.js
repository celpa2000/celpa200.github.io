const contentPrincipal = document.getElementById('shopContent')
const modalContainer = document.getElementById('modal-container')
const verCarrito = document.getElementById('verCarrito')
const cantidadCarrito = document.getElementById('cantidadCarrito')
let carrito = []

productos.forEach(producto => {
    let elementos = document.createElement('div')
    elementos.className = "card"
    elementos.innerHTML = `<img src=${producto.thumbnailUrl}/>
    <h3>${producto.title} </h3>
    <p class="price">${producto.precio} $</p>
    `
    contentPrincipal.append(elementos)
    let comprar = document.createElement('button')
    comprar.className = "comprar"
    comprar.innerText = 'Agregar'
    elementos.append(comprar)
    comprar.addEventListener('click',() =>{
    const repeat = carrito.some((repeatProduct)=> repeatProduct.id === producto.id)
    console.log(producto.id)
    console.log(repeat) 
    if (repeat){
        carrito.map((prod)=>{
            if(prod.id === producto.id){
                prod.cantidad++
            }
        })
    }else{ 
        carrito.push({
            id: producto.id,
            img: producto.thumbnailUrl,
            titulo: producto.title,
            precio: producto.precio,
            cantidad: producto.cantidad


        })
    }
    
    cantidadCar() 
    
     
    }
    )
}
);
const cantidadCar= () =>{
    cantidadCarrito.style.display = 'block'
    cantidadCarrito.innerText = carrito.length
}    