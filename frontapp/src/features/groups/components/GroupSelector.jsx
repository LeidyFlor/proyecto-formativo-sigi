// src/features/groups/components/GroupSelector.jsx

import { useState } from "react";
import { Select, Button} from "@/shared/";
import GroupModal from "./GroupModal";

export default function GroupSelector({ onGroupSelect }) {
    const [selectedGroup, setSelectedGroup] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [modalMode, setModalMode] = useState("create"); // "create" | "edit"

    // TODO: reemplazar con llamada a la API cuando esté lista
    const [groups, setGroups] = useState([
        { value: "1", label: "Administrador", estado: "Activo" },
        { value: "2", label: "Instructor planta", estado: "Activo" },
        { value: "3", label: "Instructor contratista", estado: "Activo" },
        { value: "4", label: "Invitado", estado: "Activo" },
    ]);

    const handleSelect = (e) => {
        setSelectedGroup(e.target.value);
        // le avisa a PermissionsPage qué grupo fue seleccionado
        onGroupSelect(e.target.value);
    };

    const handleEdit = () => {
        setModalMode("edit");
        setModalOpen(true);
    };

    const handleToggleEstado = () => {
        setGroups(prev => prev.map(g =>
            g.value === selectedGroup
                ? { ...g, estado: g.estado === "Activo" ? "Inactivo" : "Activo" }
                : g
        ));
    };

    const grupoActual = groups.find(g => g.value === selectedGroup);

    return (
        <div className="flex flex-col gap-4">
            <h3 className="font-medium">Grupos usuarios</h3>

            <Select
                name="grupo"
                value={selectedGroup}
                onChange={handleSelect}
                options={groups}
            />

            {/* Botones que aparecen solo cuando hay un grupo seleccionado */}
            {selectedGroup && (
                <div className="flex gap-2">
                    <Button
                        variant="warning"
                        size="sm"
                        onClick={handleEdit}
                    >
                        Editar
                    </Button>
                    <Button
                        variant="secondary"
                        size="sm"
                        onClick={handleToggleEstado}
                    >
                        {grupoActual?.estado === "Activo" ? "Deshabilitar" : "Habilitar"}
                    </Button>
                </div>
            )}

            {/* Botón nuevo grupo — siempre visible */}
            <Button
                variant="primary"
                size="sm"
                onClick={() => {
                    setModalMode("create");
                    setModalOpen(true);
                }}
            >
                + Nuevo grupo
            </Button>

            <GroupModal
                isOpen={modalOpen}
                mode={modalMode}
                group={grupoActual}
                onClose={() => setModalOpen(false)}
                onSave={(nombre) => {
                    if (modalMode === "create") {
                        // TODO: llamar API para crear
                        console.log("crear grupo:", nombre);
                    } else {
                        // TODO: llamar API para editar
                        console.log("editar grupo:", nombre);
                    }
                    setModalOpen(false);
                }}
            />
        </div>
    );
}