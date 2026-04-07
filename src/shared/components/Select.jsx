export default function Select({
    label,
    name,
    options = [],
}){


    return(
        <div className="w-[320px]">
            {/* si label trae algo hace lo que esta adentro */}
            {label &&(
                <label className="block text-caption mb-1 text-text-secondary place-self-start">
                    {label}
                </label>
            )}

            <select
                name={name}
                className="
                    w-full
                    h-12
                    rounded-md
                    border
                    border-border
                    px-4
                    "
            >
                <option value="">Seleccione una opcion</option>
                {/* Se mapean el arreglo de las opciones que llegan */}
                {options.map((opt) => (
                    // en este caso key: C.C. y Value: Cedula de ciudadania
                    <option key={opt.id} value={opt.id}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    )
}