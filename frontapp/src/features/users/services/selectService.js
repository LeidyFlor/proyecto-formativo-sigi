export async function getDocumentTypes() {
    
    const response = await fetch('/../../data/selects/documentTypes.json')

    // Se recuperon los datos y se responde con su envio
    return response.json();
}