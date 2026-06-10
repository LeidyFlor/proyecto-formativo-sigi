//backend/src/features/auth/auth.repository.js

import { pool } from "../../config/db.js";

//Repositorio encargado de consultar la informacion de autenticacion de usuario
export const authRepository={
    // Busca un usuario por correo electronico y devulve solo los campos necesarios para validar el inicio de sesion
    async findByEmail(userEmail){
        const query = `
        SELECT id, user_email, password, is_active
        FROM users
        WHERE user_email = $1
        LIMIT 1
        `;
        //Usa parametros preparados para evitar inyecciones SQL 
        const result = await pool.query(query, [userEmail]);
        //Devulve usuario encontrado o undefined si no existe
        return result.rows[0];
    }
}