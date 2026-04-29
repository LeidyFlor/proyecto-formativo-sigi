import { Outlet } from "react-router-dom";
import heroBg from "@/assets/images/bg-1.jpg";
import { CreateUserPage } from "@/features/users";
import { CloudBackup } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { IconButton } from "@/shared"

export default function DashboardLayout() {
    const navigate = useNavigate();
    return (
        <div className="relative min-h-screen text-text-primary">
            {/* Fondo con imagen */}
            <div className="absolute inset-0 -z-10 bg-cover bg-center"
                style={{ backgroundImage: `url(${heroBg})` }}
            />
            {/* outlet inyecta los elemntos hijos de las routes */}
            <Outlet />
            <IconButton>

                <CloudBackup
                    onClick={() => navigate(-1)}
                ></CloudBackup>
            </IconButton>
        </div>
    )
}