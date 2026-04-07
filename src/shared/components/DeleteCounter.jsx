import { useState } from "react";

export default function DeleteCounter(){
    // valor actual(count), el que actualiza el boton (setCount), y valor inicial useState(0), el calor inicial en este caso es 0
    const [count, setCount] = useState(0)

    return(
        <div>
            <p>Contador: {count}</p>
            <button onClick={ () => setCount(count + 1) } className="border p-3">
                Incrementar
            </button>
        </div>
    );
}

// HACER LA ACTIVIDAD CON UNA FUNCION

// export default function DeleteCounter(){
//     let count = 0;

//     const incrementar = () => {
//         count = count + 1;
//         console.log("Nuevo valor", count)
//     }

//     return(
//         <div>
//             <p>Contador: {count}</p>
//             <button onClick={incrementar} className="border p-1">Incrementar</button>
//         </div>
//     )
// }