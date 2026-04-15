let valorTotalCarrito = 0;
let contadorProductos = 0;

const productosCarrito = [];

const agregar = document.querySelectorAll(".btn-agregar");
const listaProductosCarrito = document.querySelector("#lista-carrito");
let totalCarrito = document.querySelector("#total");
let contadorCarrito = document.querySelector("#badge");
const eliminarTodos = document.querySelector("#btn-vaciar");

agregar.forEach(btn => {
    btn.addEventListener("click", function(){
        
        const nombre = btn.dataset.nombre;
        const precio = btn.dataset.precio;

        agregarAlCarrito(nombre, precio);
    });
})

function agregarAlCarrito(nombre, precio) {
    const li = document.createElement("li");
    li.classList.add("productos-carrito");
    const boton = document.createElement("button");
    boton.textContent = "Eliminar"; 
    li.textContent = `${nombre} $${precio}`;
    li.appendChild(boton);
    listaProductosCarrito.appendChild(li);

    let total = parseFloat(precio);
    valorTotalCarrito += total; 
    
    boton.addEventListener("click", function eliminarItem() {
        li.remove();
        valorTotalCarrito -= total; 
        contadorProductos--;
        actualizarCarrito();
        actualizarTotal();
    })

    
    contadorProductos++;

    actualizarCarrito();
    actualizarTotal();
}

function actualizarCarrito() {
    contadorCarrito.textContent = contadorProductos;
}

function actualizarTotal() {
    totalCarrito.textContent = valorTotalCarrito.toLocaleString();
}


eliminarTodos.addEventListener("click", function(){
    let li = listaProductosCarrito.querySelectorAll("li");
    li.forEach(item => {
        item.remove();
    });
    contadorProductos = 0;
    valorTotalCarrito = 0;
    actualizarCarrito();
    actualizarTotal();
});