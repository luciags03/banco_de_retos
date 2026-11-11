"use strict";
// Clase padre
class ServicioDatos {
    // Constructor que inicializa el endpoint
    constructor(endpoint) {
        this.endpoint = endpoint;
    }
    // Método para conectar con el servidor
    conectar() {
        console.log("Conectando a " + this.endpoint);
    }
}
// Clase hija que hereda de ServicioDatos
class ServicioUsuarios extends ServicioDatos {
    // Constructor
    constructor(endpoint) {
        super(endpoint);
        // Propiedad propia de la clase hija
        this.entidad = "usuarios";
    }
}
// Creamos una instancia de ServicioUsuarios
const servicio = new ServicioUsuarios("https://api.escuela.com");
// Mostramos los datos
console.log("Endpoint:", servicio.endpoint);
console.log("Entidad:", servicio.entidad);
// Llamamos al método heredado
servicio.conectar();
