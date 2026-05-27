//Libreria pra generacion de PDFs en el cliente
import jsPDF from "jspdf";

//Plugin pra creacion de tablas dentro del PDF
import autoTable from "jspdf-autotable";

//Funcion utilitaria para generar un reporte en PDF
// Patron: exportacion de datos (dataset -> docuemtno estructurado)
export function generatePdfReport({
    headers, //Encabezados de la tabla (columnas)
    rows, //Datos (arrays de filas)
    fileName = "user-report.pdf", //Nombre del archivo de salida
}){
    //INicializa el documento PDF
    const doc = new jsPDF();

    //Confguracion del titulo
    doc.setFontSize(16);
    doc.text("Reporte de usuarios", 14, 20); //Posicion ( X, Y)

    //Generacion de tabla automatica
    autoTable(doc, {
        startY: 30, //Posicion unucual debajo del titulo\
        
        head: [headers], //Encabezados (debe ser array de arrays)
        body: rows, //Filas del reporte

        theme: "grid", //Estilo visual de la tabla

        //Estilos del encabezado
        headStyles: {
            fillColor: [ 31, 150, 243], //Color de fondo (RGB)
            textColor: 255, //Color del texto
            fontSize: 11,
        },

        //Estilos globales de las celdas
        styles: {
            fontSize: 10,
        },

        //Margenes del documento
        margin: {
            left: 14, 
            right: 14,
        },
    });

    //Genera y descarga el archivo PDF
    doc.save(fileName);
}