import { createBrowserRouter, Navigate } from "react-router-dom";
//calltoaction invita a la persona no registrada a hacer algo
import { AuthLayout, DashboardLayout }  from "@/shared/";
import { CreateUserPage,ListUserPage } from "@/features/users";
import { LoginForm } from "@/features/auth";
import { HomePage } from "@/features/home";

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
            {index: true, element: <HomePage />},
            { path: "auth", element: <LoginForm  />},
            { path: "userList",element: <ListUserPage /> },
            { path: "createUser", element: <CreateUserPage /> }
        ],
    }
]);

export default router;