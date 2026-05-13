import { DataTable, Button } from "@/shared/"
import { userColumns } from "../table/UserColumns"
import { users } from "../data/users"
import { Link } from "react-router-dom";


export default function ListUserPage() {

    return (
        <div className="p-6">

            <div className="flex justify-between">
                <h1 className="text-xl font-semibold mb-4">
                    Usuarios
                </h1>
                <div className="flex gap-10">

                <Link to={"/"}>
                    <Button
                        variant="primary"
                        size="md"
                    >
                        Reporte usuario
                    </Button>
                </Link>
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


        </div>
    )
}
