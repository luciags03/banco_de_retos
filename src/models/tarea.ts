// Interfaz Tarea
interface Tarea {
    id: number;
    titulo: string;
    completada: boolean;
}

// Array de tareas
const misTareas: Tarea[] = [
    { id: 1, titulo: "Estudiar TypeScript", completada: false },
    { id: 2, titulo: "Hacer ejercicios de Angular", completada: false },
    { id: 3, titulo: "Repasar interfaces", completada: true }
];

// Función para completar una tarea
function completarTarea(lista: Tarea[], idBuscar: number): Tarea[] {

    return lista.map(tarea => {
        if (tarea.id === idBuscar) {
            return { ...tarea, completada: true };
        }

        return tarea;
    });

}

// Comprobamos el funcionamiento
const nuevasTareas = completarTarea(misTareas, 2);

console.log("Array original:", misTareas);
console.log("Array nuevo:", nuevasTareas);