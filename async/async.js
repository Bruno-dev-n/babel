// Função assíncrona que busca dados de uma API fictícia
async function fetchData() {
    try {
        // A função espera até que a Promise do fetch seja resolvida
        let response = await fetch('https://api.exemplo.com/dados');
        
        // A função espera até que a Promise do response.json() seja resolvida
        let data = await response.json();

        // Processa os dados retornados
        console.log(data);
    } catch (error) {
        // Trata qualquer erro que ocorra na requisição
        console.error('Erro ao buscar os dados:', error);
    }
}

// Chama a função assíncrona
fetchData();

async function fetchData() {
    let response;
    try {
        response = await fetch('https://api.exemplo.com/dados');
        if (!response.ok) {
            throw new Error(`Erro HTTP! status: ${response.status}`);
        }
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Erro ao buscar os dados:', error.message);
    }
}

fetchData();
