
// Interfaz RespuestaServidor
interface RespuestaServidor {
    status: "success" | "error";
    data?: string[];
    mensajeError?: string;
}

// Función para procesar la respuesta
function procesarRespuesta(res: RespuestaServidor): void {

    if (res.status === "success") {

        if (res.data) {
            res.data.forEach(dato => {
                console.log(dato);
            });
        }

    } else {

        console.error(res.mensajeError ?? "Ha ocurrido un error desconocido");

    }
}

// Respuesta correcta
const respuestaCorrecta: RespuestaServidor = {
    status: "success",
    data: ["Juan", "María", "Carlos"]
};

// Respuesta con error
const respuestaError: RespuestaServidor = {
    status: "error",
    mensajeError: "No se ha podido conectar con el servidor"
};

// Respuesta sin datos
const respuestaVacia: RespuestaServidor = {
    status: "success"
};

// Ejecutamos las funciones
console.log("Respuesta correcta:");
procesarRespuesta(respuestaCorrecta);

console.log("Respuesta con error:");
procesarRespuesta(respuestaError);

console.log("Respuesta vacía:");
procesarRespuesta(respuestaVacia);
