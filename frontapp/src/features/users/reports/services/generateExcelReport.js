//Libreria para manipulacion y generacion de archivos Excel
import * as XLSX from "xlsx";

//Funcion utilitaria para generar un archivo Excel a partir de datos tabulares
//Patron: exportacion de datos (dataset -> archivo descargable)
export function generateExcelReport({
    headers,        //Array de encabazados (columnas)
    rows,            //Array de filas (array de arrays)
    fileName = "user-report.xlsx" //Nombre del archivo de salida
}){
    const currentDate = new Date().toLocaleDateString();
    const reportTitle = `***** REPORTE DE USUARIOS - ${currentDate} *****`
    //Estructura final de la hoja:
    //Primera fila = headers
    //siguientes filas = datos
    const worksheetData = [
        [reportTitle],
        [],
        headers,
        ...rows
    ];

    //Convierte un array en arrays (AOA = Arrays of Arrays) en una hoja de Excel
    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);

    //Merge visual
    const range = XLSX.utils.decode_range(worksheet["!ref"]);
    worksheet["!merges"] = [{
        s: {r: 0, c: 0},
        e: {r: 0, c: range.e.c}
    }];

    //ancho de la columna
    worksheet["!cols"] = headers.map(() => ({ wch: 25}));

    //Altura fila titulo (simulacion impacto visual)
    worksheet["!rows"] = [{ hpt: 25}]

    //Crea un nuevo libro de Excel (workbook)
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Usuarios")

    //Genera y descarga el archivo Excel en el cliente
    XLSX.writeFile(workbook, fileName);
}