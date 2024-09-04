// Trabajer la logica y declarar el usuario
const userAdmin = {
    email: "admin@dihpatho.com",
    password: "DigPatho1234"
}

export const login = (usuario) => {
    if (usuario.email === userAdmin.email && usuario.password === userAdmin.password) {
        sessionStorage.setItem("usuariodigpatho", JSON.stringify(userAdmin.email))
        return true
    } else {
        return false
    }
}