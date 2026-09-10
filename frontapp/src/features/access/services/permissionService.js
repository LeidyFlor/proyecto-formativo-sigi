// frontend/src/features/auth/services/permissionService.js

import { API_URL } from "@/features/config";

const GROUPS_API_URL = `${API_URL}/groups`;
const PERMISSIONS_API_URL = `${API_URL}/permissions`;

//grupo de permisos
export async function getGroupPermissions(groupId) {
  const response = await fetch(`${GROUPS_API_URL}/${groupId}/permissions`);

  if (!response.ok) {
    throw new Error("Error obteniendo permisos");
  }
  return response.json();
} //permisos
export async function getAllPermissions() {
  const response = await fetch(PERMISSIONS_API_URL);

  if (!response.ok) {
    throw new Error("Error obteniendo catalogo de permisos");
  }
  return response.json();
}
