"use strict";
// Creamos la clase ProductComponent
class ProductComponent {
    // Constructor con atajo de parámetros
    constructor(nombreProducto, precioBase) {
        this.nombreProducto = nombreProducto;
        this.precioBase = precioBase;
        // Propiedad privada y fija
        this.iva = 0.21;
    }
    // Método público para calcular el precio final
    obtenerPrecioFinal() {
        return this.precioBase * (1 + this.iva);
    }
}
// Creamos una instancia de la clase
const producto = new ProductComponent("Impresora 3D", 500);
// Mostramos los resultados
console.log("Nombre:", producto.nombreProducto);
console.log("Precio final:", producto.obtenerPrecioFinal());
