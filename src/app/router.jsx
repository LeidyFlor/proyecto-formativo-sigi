import { createBrowserRouter, Navigate } from "react-router-dom";
//calltoaction invita a la persona no registrada a hacer algo
import { AuthLayout, DashboardLayout }  from "@/shared/";
import { CreateUserPage } from "@/features/users";

const router = createBrowserRouter([
    {   
        path: "/",
        //Por defecto me lleva al auth
        element: <Navigate to="/auth" replace/>,
    },
    {   
        path: "/auth",
        element: <AuthLayout/>,
        children: [{ index: true, element: <h1>Inicio Auth</h1>}],
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        // Nested Routes
        children: [
            {index: true, element: <h1 >Inicio Dashboard</h1>},
            {path: "contacto",element: <h1>Contacto</h1>},
            {path: "usuarios",element: <h1>Usuarios</h1>},
            {path: "productos",element: <h1>Productos</h1>}
        ],
    }
]);

export default router;