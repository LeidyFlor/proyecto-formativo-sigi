const API_URL = "/api/groups";

export async function getGroups() {
    const response = await fetch(API_URL);

    if(!response.ok){
        throw new Error("Error obteniendo grupos");
        
    }
    return response.json();
}

// funcion para actualizar permisos
export async function updateGroupPermissions(groupId, permissionIds) {
    const token = sessionStorage.getItem("token");

    const response = await fetch(`${API_URL}/${groupId}/permissions`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        // parseo a json
        body: JSON.stringify({
            permissionIds,
        }),
    });
    if(!response.ok){
        throw new Error("Error actualizando permisos de grupo");
    }

    return response.json();
}