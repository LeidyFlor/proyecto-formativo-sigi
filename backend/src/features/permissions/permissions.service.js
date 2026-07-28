import { permissionRepository } from "./permissions.repository.js";

export const permissionsService = {
    async getAll(){
        return await permissionRepository.getAll();
    },
};