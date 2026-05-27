import { DataTable, Button } from "@/shared/"
import { userColumns } from "../table/UserColumns"
import { users } from "../data/users"
import { Link } from "react-router-dom";
import { useState } from "react";
import { ReportConfigModal } from "../reports/components/ReportConfigModal";

export default function ListUserPage() {
    //Estado para el boton, si se clikea o no el boton de reporte
    const [isReportModalOpen, setIsReportModalOpen] = useState (false)

    return (
        <div className="p-6">

            <div className="flex justify-between">
                <h1 className="text-xl font-semibold mb-4">
                    Usuarios
                </h1>
                <div className="flex gap-10">

                    
                    <Button
                        variant="primary"
                        size="md"
                        onClick = {()=> setIsReportModalOpen(true)}
                    >
                        Reporte usuario
                    </Button>
                
                <Link to={"/dashboard/createUser"}>
                    <Button
                        variant="primary"
                        size="md"
                    >
                        Crear usuario
                    </Button>
                </Link>
                </div>

            </div>


            <DataTable
                data={users}
                columns={userColumns}
            />

            <ReportConfigModal 
                isOpen={isReportModalOpen}
                onClose={() => setIsReportModalOpen(false)}
            />

        </div>
    )
}
