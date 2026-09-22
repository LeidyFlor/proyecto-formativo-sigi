import { Input, Button, Select, Checkbox, IconButton, Dropdown, DropdownContent, DropdownItem, DropdownTrigger } from "@/shared"
import { useState } from "react";
import { loginSchema } from "../schemas/loginSchema.js";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { SquareArrowRightEnter, Menu } from "lucide-react";
import { login } from "../services/authService.js";

export default function LoginForm() {
    const navigate = useNavigate();
    //useState para saber cuando cambia de estado algo, su valor por ejemplo
    const [formData, setFormData] = useState({
        userEmail: "",
        userPassword: "",
    });
    const [errors, setErrors] = useState({});

    // ==================================================
    //              Handle Genérico
    // ==================================================
    /*
        Función que se ejecuta cada vez que cambia el valor de un input del formulario, para que haga el re-render
    */
    const handleChange = (e) => {
        // Se obtiene el nombre del campo y su valor
        const { name, value, type, checked } = e.target; //target es lo que viene cuando se escribe

        setFormData((prev) => ({
            //Se copian todos los valores anteriores del estado
            ...prev,

            //Se actualiza unicamente lo que cambió
            [name]: type === "checkbox" ? checked : value,
        }));
    };
    // ==================================================
    //              Handle Submit
    // ==================================================
    /*
        Función que se ejecuta cuando se envía el formulario
    */

    const handleSubmit = async (e) => {

        e.preventDefault();

        //Se valida el objeto formData usando el esquema definido con Zod
        // safeParse devuelve un objeto indicando si la validacion fue exitosa o no
        const result = loginSchema.safeParse(formData);

        //Si la validacion falla
        if (!result.success) {
            const fieldErrors = {};

            //Zod devuelve los errores en un arreglo llamado issues
            //se recorren para asociar cada error a su campo correspondiente
            result.error.issues.forEach((issue) => {
                //Se guarda el mensaje de error en el objeto fieldErrors
                fieldErrors[issue.path[0]] = issue.message;
            });
            //Se actualiza el estado de errores para mostrarlos en el formulario
            setErrors(fieldErrors);
            //Se detiene la ejecucion porque el formulario tiene errores
            return;
        }
        //Si la validacion es exitosa se limpian los errores anteriores
        setErrors({});
        //result.data contiene los datos ya validados por Zod
        try{
            const data = await login(result.data);
            console.log("LOGIN RESPONSE:", data);
            sessionStorage.setItem("token", data.token); //clave

            //despues de loguear a donde me lleva
            navigate("/dashboard/userList");
        } catch (error){
            alert(error.message);
        }
    };

    return (
        // Para poner en la mitad la card del login
        <div className="flex flex-col place-items-center justify-center h-screen">
            <h1 className="text-text-primary text-2xl mb-6 text-center pt-12">
                Inicio de sesion LEIDY
            </h1>
            <form className="grid grid-cols-1 items-center gap-6 "
                onSubmit={handleSubmit}
            >
                {/* Inputs */}
                <div className="grid grid-cols-1 gap-6 my-0 mx-auto border p-6 rounded-[6px]">
                    <Input
                        label="Correo"
                        name="userEmail"
                        type="email"
                        placeholder="Ingrese su correo"
                        value={formData.userEmail}
                        onChange={handleChange}
                        error={errors.userEmail}
                    />
                    <Input
                        label="Contraseña"
                        name="userPassword"
                        type="password"
                        placeholder="Ingrese su contraseña"
                        value={formData.userPassword}
                        onChange={handleChange}
                        error={errors.userPassword}
                    />
                    {/* Acciones */}
                    <div className="flex items-end justify-end gap-12">
                        <Button
                            variant="secondary"
                            size="sm"
                            
                        >
                            Cancelar
                        </Button>

                        <Button
                            variant="primary"
                            size="md"
                            type="submit"
                        >
                            Iniciar sesión
                        </Button>

                    
                    </div>
                </div>


            </form>

        </div>
    )
};