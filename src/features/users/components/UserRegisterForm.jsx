import { Input, Button, DeleteCounter, DeleteEffect, DeleteCounter2, Select } from "@/shared"
import { getDocumentTypes } from "@/features/users/services/selectService";
import { useEffect, useState } from "react";

export default function UserRegisterForm(){
    const [ documentTypes, setDocumentTypes] =useState([]);

    useEffect(() => {
        getDocumentTypes().then(setDocumentTypes);
}, []);
    
    
    // Handle eventos. onChange cada vez que se escribe. onBlur toma el valor cuando uno sale del campo

    const handleNameChange = (e) =>{
        console.log("Nombre: ", e.target.value);
    }


    return(
        <div>
            <h1 className="text-text-primary text-2xl mb-6">
                Registro de usuario
            </h1>
            <form className="grid grid-cols-1 items-center gap-6 ">
                {/* Inputs */}
                <div className="grid grid-cols-2 gap-6 my-0 mx-auto">
                    <Input
                        label="Nombre"
                        name="userName"
                        placeholder="Ingrese su nombre"
                        onChange={handleNameChange}
                    />
                    <Input
                        label="Correo"
                        name="userEmail"
                        placeholder="Ingrese su correo"
                        type="email"
                    />
                    <Input
                        label="Telefono"
                        name="userPhone"
                        placeholder="Ingrese su telefono"
                        type="tel"
                    />
                    <Select
                        label="Tipo de documento"
                        name="documentType"
                        options={documentTypes}
                    />
                    <Input
                        label="Número de documento"
                        name="userDocumenNumber"
                        placeholder="Ingrese su numero de documento"
                    />
                    <Input
                        label="Contraseña"
                        name="userPassword"
                        placeholder="Ingrese su contraseña"
                        type="password"
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
                        >
                            Guardar
                        </Button>



                    </div>
                </div>
                
                
            </form>
                        {/* <DeleteCounter /> */}
                        {/* uso del useeffect */}
                        {/* <DeleteEffect /> */}

                        <DeleteCounter2 />
            
        </div>
    )
};