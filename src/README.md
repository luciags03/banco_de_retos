# Reto 1 - El Contrato de la API

## Descripción
Creación de una interfaz en TypeScript para definir
la estructura de un usuario recibido desde una API.

## Objetivos
- Crear una interfaz llamada UsuarioAPI.
- Definir los tipos de sus propiedades.
- Utilizar un tipo unión para limitar los roles.
- Crear una propiedad opcional.
- Comprobar errores de tipado.

## Tecnologías
- TypeScript
- Visual Studio Code

## Ejecución
Para comprobar los tipos:

npx tsc --noEmit

## Resultado esperado
El objeto usuarioValido cumple la interfaz.

El objeto usuarioInvalido genera un error porque
el rol "invitado" no está permitido.