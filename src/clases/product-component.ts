// Creamos la clase ProductComponent
class ProductComponent {

    // Propiedad privada y fija
    private readonly iva: number = 0.21;

    // Constructor con atajo de parámetros
    constructor(
        public nombreProducto: string,
        private precioBase: number
    ) {}

    // Método público para calcular el precio final
    public obtenerPrecioFinal(): number {
        return this.precioBase * (1 + this.iva);
    }
}

// Creamos una instancia de la clase
const producto = new ProductComponent("Impresora 3D", 500);

// Mostramos los resultados
console.log("Nombre:", producto.nombreProducto);
console.log("Precio final:", producto.obtenerPrecioFinal());