// Componente que se va a exportar

export default function Input({
    label,
    type = "Text",
    error,
    ...propos
    // porps son las propiedades de un componenete. Y label para que por defecto el campo sea tipo texto
}) {
    // cuerpo de la funcion
    return (
        //Contenedor del input que se exporta con label, cuerpo y feedback message
        <div className="w-[320px]">
            {/* LABEL. JWT evalua si tal es 1, si si lo hace  */}

            {label &&(
                <label
                    className={
                    `block
                    text-[8px]
                    mb-1
                    place-self-start
                    ${error ? "text-red-800" : "text-text-primary" }
                `}
                >
                    {label}
                </label>
            )}

            {/* contenedor del input */}
            {/* este classname permite escribir en todos los campo */}
            <div className="
                relative
                h-12
                flex
                items-center
            ">
                {/* Area interactiva invisibe de un input  48px*/}

                    <div 
                        className="
                            absolute
                            inset-0
                        "
                        onMouseDown={(e) =>{
                            e.preventDefault();
                            /*Mueve el foco al siguiente elemento hermano el elemento actual*
                            `currentTarget` referencia el elemento que tiene el handler del evento
                            `nextSibling` obtiene el siguinete nodo en el DOM (puede ser un input u otro elemento)*/
                            e.currentTarget.nextElementSibling.focus(); /*Linea de codigo de area disponible de 48px */
                        }}
                        />

                    {/* Area visual del input */}
                        {/* border-border es el colo rdel borde con variables */}
                    <input
                    // toma el input de cuando se crea el input
                    type={type}
                    className={`
                        relative
                        w-full
                        h-12
                        rounded-md
                        border
                        border-border 
                        px-4
                        text-base

                        hover:border-2
                        hover:border-focus-border

                        focus:outline-none
                        focus:ring-1
                        focus:ring-focus-ring

                        ${error ? "border-red-800" : "border border-border" }
                        `}
                    {...propos}
                    >
                    </input>

            </div>
            {/* Feedback message */}
            {error && <p className="text-caption text-red-800 place-self-start">{error}</p>}
        </div>
    )
};