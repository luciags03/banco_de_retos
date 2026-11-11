// Interfaz UsuarioAPI
export interface UsuarioAPI {
    id: number;
    username: string;
    email: string;
    rol: "admin" | "editor" | "alumno";
    token?: string;
}

// Objeto válido
const usuarioValido: UsuarioAPI = {
    id: 1,
    username: "lucia",
    email: "lucia@gmail.com",
    rol: "admin",
    token: "abc123"
};

// Objeto inválido
const usuarioInvalido: UsuarioAPI = {
    id: 2,
    username: "pablo",
    email: "pablo@gmail.com",
    rol: "invitado"
};