export default function Select({
    label,
    name,
    error,
    value,
    onChange,
    options = [],
}){


    return(
        <div className="w-[320px]">
            {/* si label trae algo hace lo que esta adentro */}
            {label &&(
                <label className={
                    `block 
                    text-caption 
                    mb-1 
                    text-text-secondary 
                    place-self-start
                    ${error ? "text-red-800" : "text-text-primary"}
                    `}
                >
                    {label}
                </label>
            )}

            <select
                name={name}
                value={value}
                onChange={onChange}
                className={` 
                    w-full
                    h-12
                    rounded-md
                    border
                    border-border
                    px-4

                    hover:border-2
                    hover:border-focus-border
                    ${error ? "border-red-800" : "border border-border" }
                `}
                    
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
            {/* Feedback message */}
            {error && <p className="text-caption text-red-800 place-self-start">{error}</p>}
        </div>
    )
}