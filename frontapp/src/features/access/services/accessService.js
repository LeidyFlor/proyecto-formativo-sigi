//frontend/src/features/access/services/accessService.js
// const API_URL = "/api/access";

import { API_URL } from "@/features/config";

const ACCESS_API_URL = `${API_URL}/access`;

export async function hasPermission(permissionCode) {
    // Verifica si hay codigo para que la persona tenga permiso
    const token = sessionStorage.getItem("token");

    const response = await fetch(`${ACCESS_API_URL}/check/${permissionCode}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if(!response.ok){
        throw new Error("Error verificando permiso");
        
    }

    return response.json();
}