
// Clase padre
class ServicioDatos {

    // Constructor que inicializa el endpoint
    constructor(public endpoint: string) {}

    // Método para conectar con el servidor
    public conectar(): void {
        console.log("Conectando a " + this.endpoint);
    }
}

// Clase hija que hereda de ServicioDatos
class ServicioUsuarios extends ServicioDatos {

    // Propiedad propia de la clase hija
    public entidad: string = "usuarios";

    // Constructor
    constructor(endpoint: string) {
        super(endpoint);
    }
}

// Creamos una instancia de ServicioUsuarios
const servicio = new ServicioUsuarios("https://api.escuela.com");

// Mostramos los datos
console.log("Endpoint:", servicio.endpoint);
console.log("Entidad:", servicio.entidad);

// Llamamos al método heredado
servicio.conectar();
