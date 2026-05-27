import { Search, User } from "lucide-react";
import { Link } from "react-router-dom";
import { IconButton, Dropdown, DropdownContent, DropdownItem, DropdownTrigger, StatusSwitch, SearchField } from "@/shared";
import  logo  from "@/assets/images/logo-1.png";
import { useState } from "react";

export default function Navbar(){
    //Componente de busqueda. para detectar un cambio cuando cambie
    const [ search, setSearch] =useState("");

    const handleSearch = (value) => {
        console.log("Buscar:", value);
    };

    const handleClear = () => {
        console.log("Campo limpiado");
    };

    //Estado que controla el Switch
    const [isActive, setIsActive] = useState(true);

    //Manejadro del estado del switch 😂
    const handleStatusChange = (value) => {
        setIsActive(value);

        //Aqui generalmente va el llamado a una API
        console.log("Nuevo estado", value)
    }

    return(
        <nav className="w-full bg-transparent border-b-2">
            <div className="mx-auto max-w-7xl px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* El logo de marca */}
                    <div className="hidden sm:block items-center">
                        <Link to={"/dashboard"} className="text-h1 font-heading">
                        <img src={logo} alt="Logo" className="h-12"/>
                        </Link>
                    </div>
                    {/* Switch */}
                    <StatusSwitch
                        checked={isActive}
                        onChange={handleStatusChange}
                        size="md"
                        // inline-flex-> ocupa el espacio asignado
                        className="hidden sm:inline-flex"
                    />

                    {/* Links de navegacion */}
                    <ul className="hidden md:flex items-center gap-6">
                        <li>
                            <Link to={"/auth"} className="hover:text-text-primary transition">Inicio</Link>
                        </li>
                        <li>
                            <Link to={"/inicio"} className="hover:text-text-primary transition">Cursos</Link>
                        </li>
                        <li>
                            <Link to={"/inicio"} className="hover:text-text-primary transition">Multimedia</Link>
                        </li>
                        <li>
                            <Link to={"/inicio"} className="hover:text-text-primary transition">Contacto</Link>
                        </li>
                    </ul>
                    <SearchField 
                        value={search}
                        onChange={setSearch}
                        onSubmit={handleSearch}
                        onClear={handleClear}
                        placeholder="Buscar productos..."
                        size="md"
                        variant="outlined"
                        className="w-76"
                    />
                        {/* Seccion de la derecha: busqueda + usuario */}
                    {/* <div className="flex items-center gap-5">
                        {/* sm:block cuando el tamano de pantalla sea menor a 640 se escconda el buscar */}
                        <div className="relative hidden sm:block">
                            {/* Icono de busqueda */}
                            {/* <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-500" /> */}
                            {/* Input del buscador*/}
                            {/* <input
                                type="text"
                                placeholder="Buscar"
                                className="pl-9 pr-4 py-2.5 border rounded-lg text-body focus:outline-none focus:right-2 focus:ring-text-primary"
                            /> */}
                        </div>
                       {/* Icono de usuario */}
                        <div className="p-10">
                            <Dropdown>
                                <DropdownTrigger>
                                    <IconButton arialLabel="Menu de usuario">
                                        <User />
                                    </IconButton>
                                </DropdownTrigger>

                                <DropdownContent className="right-0 w-48">
                                    <DropdownItem>
                                        <Link to="auth" className="block w-full">
                                            Cerrar sesion
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="createUser" className="block w-full">
                                            Creacion de usuario
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="userList" className="block w-full">
                                            Gestion de usuarios
                                        </Link>
                                    </DropdownItem>
    
                                </DropdownContent>
                            </Dropdown>
                        </div>
                        
                            
                    </div>
                </div>
        </nav>
    )
}