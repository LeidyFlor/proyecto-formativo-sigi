//end point login
//revibe peticion y envia la respuesta
import { authService } from "./auth.service.js";

export const authController = {
    async login(req, res){
        try {
            const result = await authService.login(req.body);

            res.status(200).json({
                massage: "Login exitoso",
                ...result,
            });
        } catch (err) {
            res.status(401).json({
                error: err.massage,
            });
        }
    }
}