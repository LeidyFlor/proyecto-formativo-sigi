// import { useState, useEffect } from "react";

// export default function DeleteEffect(){
//     // useState
//     const [message, setMessage] = useState("Cargando...")

//     // use efect cuando es un efecto secundario
//     useEffect(() =>{
//         setTimeout(() => {
//             setMessage("componente cargado o montado")
//         }, 2000);

//     }, [])
//     return <h1>{message}</h1>

// }
//==============================================================
// SEGUNDA ACTIVIDAD => useEffect
//==============================================================

import { useState, useEffect } from "react";

export default function DeleteEffect(){

    console.log("Render");

    // useState
    const [message, setMessage] = useState("Cargando...")

    // use efect cuando es un efecto secundario
    useEffect(() =>{

        console.log("Efecto ejecutado");
        setTimeout(() => {
            setMessage("componente cargado o montado")
        }, 2000);

    }, [])
    return <h1>{message}</h1>

}