const pintarCarrito = ()=>{
    modalContainer.innerHTML = ""
    modalContainer.style.display = 'flex'
    const moadalHeader = document.createElement('div')
    moadalHeader.className = "modal-header"
    moadalHeader.innerHTML = `<h3 class="modal-header">Carrito.</h3>`
    modalContainer.append(moadalHeader)
    const modalboton = document.createElement('h1')
    modalboton.innerText = 'x'
    modalboton.className = 'modal-header-button'
    modalboton.addEventListener('click',()=>{
        modalContainer.style.display = 'none'
    })
    moadalHeader.append(modalboton)
    carrito.forEach((produc)=>{
        let carritoContent = document.createElement('div')
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
        <img src="${produc.img}"/>
        <h3>${produc.titulo}</h3>
        <p>${produc.precio} $</p>
        <p>Cantidad ${produc.cantidad}</p>
        <p>Precio ${produc.cantidad * produc.precio}</p>
        
        `
        
        modalContainer.append(carritoContent)
        let botonEliminar = document.createElement('span')
        botonEliminar.innerText = "❌"
        botonEliminar.className = 'delete-product'
        
        carritoContent.append(botonEliminar)
        botonEliminar.addEventListener('click',eliminarproducto)

    })
    
    const total = carrito.reduce((acumulador,elemento)=>acumulador + elemento.precio * elemento.cantidad, 0)
    
    const totalComprado = document.createElement('div')
    totalComprado.className = 'total-content'
    totalComprado.innerHTML = `total a pagar ${total} $`
    modalContainer.append(totalComprado)

}
verCarrito.addEventListener('click',pintarCarrito)

const eliminarproducto = ()=>{
    const buscarId = carrito.find((producto)=>producto.id)
    
    carrito = carrito.filter((carritoId)=>{
        return carritoId !== buscarId
    })
    pintarCarrito()
    cantidadCar()
}