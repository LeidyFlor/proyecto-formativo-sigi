// el sevicio es un intermediario entre el controller y el repositorio, para prevenir que no vaya a la base de datos el controlador
import { groupsRepository } from "./groups.repository.js";

export const groupsService = {
    async getAll(){
        return await groupsRepository.getAll();
    },

    async getPermissionsByGroupId(groupId){
        return await groupsRepository.getPermissionsByGroupId(groupId);
    },

    async updatePermissions(groupId, permissionIds){
        return await groupsRepository.updatePermissions(groupId, permissionIds)
    },
};