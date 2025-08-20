import { receitasDoces, receitasSalgadas } from './receitas.js';
function criarCard(receita) {
    const card = document.createElement('div');
    card.className = 'bg-white p-4 rounded-lg shadow';
    card.innerHTML = `
        <img src="${receita.imagem}" alt="${receita.nome}" class="w-full h-48 object-cover rounded mb-4">
        <h3 class="text-xl font-semibold">${receita.nome}</h3>
        <p class="text-gray-600">${receita.descricao}</p>
    `;
    return card;
}
function carregarReceitas() {
    const container = document.getElementById('receitas');
    if (!container)
        return;
    if (window.location.pathname.includes('doces.html')) {
        receitasDoces.forEach(r => container.appendChild(criarCard(r)));
    }
    else if (window.location.pathname.includes('salgados.html')) {
        receitasSalgadas.forEach(r => container.appendChild(criarCard(r)));
    }
}
document.addEventListener('DOMContentLoaded', carregarReceitas);
