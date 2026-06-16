//Cerrar sesion eliminando jwt
export function logout(){
    sessionStorage.removeItem("token");
}