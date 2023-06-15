export async function getJson(url) {

    try {
        const response = await fetch(url);
        const jsonBody = await response.json();

        
        return jsonBody;
    } catch (e) {
        throw new Error("Erro ao fazer a requisição na API...")
    }
}