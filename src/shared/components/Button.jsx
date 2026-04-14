import { Children } from "react";

/* Componente boton
Boton reutilizable con cariables viauales y tamanos controlados, area interactiva minima de 48px
*/
export default function Button({
    variant = "primary", //Define el estilo visual, variante por defecto
    size = "md",     //Define tamano visual
    type = "button", //Tipos de boton (button, submit, reset)
    children,       //Contenido interno del boton(texto, icono)
    ...props        //Propiedades adicionales(onClick, diseable, etc)
}){
const variants = {
    primary: "bg-background text-brand border text-body hover:bg-background-inverse hover:text-text-inverse",
    secondary: "bg-background border border-border text-text-primary hover:bg-surface-muted hover:text-text-inverse",
};
    // before: -inset - y - [6px] area tactil del boton de y
const sizes ={
    sm:`
        h-9 px-3
        before:absolute before:content['']
        before:-inset-y-[6px] before:-inset-x-[0px]
    `,
    md:`
        h-10 px-4
        before:absolute before:content['']
        before:-inset-y-[6px] before:-inset-x-[0px]
    `
}
return(
    <button 
        className={`
            relative
            inline-flex items-center justify-center
            rounded-md
            transition-colors
            var
            ${variants[variant]}
            ${sizes[size]}
            ${type}    
        `}
        
        {...props}
        
        >

        {children}


    </button>
)
}