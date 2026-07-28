import { groupsService } from "./groups.service.js";

export const groupsController = {
    async getAll(req, res){
        try {
            const groups = await groupsService.getAll();

            res.json(groups);
        } catch (error) {
            console.error(error);

            res.status(500).json({
                error: "Error obteniendo grupos",
            });
        }
    },

    async getPermissionsByGroupId(req, res){
        try {
            // se consulta el ide del grupo de la base de datos
            const groupId = Number(req.params.groupId);
            const permissions =
              await groupsService.getPermissionsByGroupId(groupId);

            res.json(permissions);
        } catch (error) {
            console.error(error);

            res.status(500).json({
                error: "Error obteniendo permisos del grupo",
            });
        }
    },
    // el controlador recibe la peticion http entrae el grupId desde la url y los permission desde el body. controlador recibe las peticiones http (request del usuario PUT POST GET)
    async upadatePermissions(req, res){
        try {
            // se consulta el ide del grupo de la base de datos
            const groupId = Number(req.params.groupId);
            const { permissionIds } = req.body;

            await groupsService.updatePermissions(groupId, permissionIds);

            res.status(200).json({
                message: "Permisos actualizados correctamente"
            });
        } catch (error) {
            console.error(error);

            res.status(500).json({
                error: "Error actuallizando los permisos del grupo",
            });
        }
    },
}