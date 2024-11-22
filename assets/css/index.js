const precio = 400000;

const precioSpan = document.querySelector(".precio-inicial");
const cantidadSpan = document.querySelector(".cantidad");
const totalSpan = document.querySelector(".valor-total");
const botonmas = document.querySelector("button:first-of-type");
const botonmenos = document.querySelector("button:last-of-type");

let cantidad = 0;
precioSpan.innerHTML = precio;
totalSpan.innerHTML = 0;

function actualizarTotal() {
    const total = cantidad * precio;
    totalSpan.innerHTML = total;
}

botonmas.addEventListener("click", () => {
    cantidad+= 1;
    cantidadSpan.innerHTML = cantidad;
    actualizarTotal();
});

botonmenos.addEventListener("click", () => {
    if (cantidad > 0) {
        cantidad--;
        cantidadSpan.innerHTML = cantidad;
        actualizarTotal();
    }
});
