import { doces } from "./doces.js";

function criarCard(doce: { nome: string; descricao: string; imagem: string; preparo: string }, tipo: "doces") {
    const card = document.createElement("div");
    card.className = "bg-white shadow-md rounded-lg p-2 max-w-xs transform scale-95 cursor-pointer hover:shadow-lg transition";

    card.innerHTML = `
        <img src="${doce.imagem}" alt="${doce.nome}" class="w-full h-24 object-cover rounded mb-2">
        <h3 class="text-lg font-bold mb-1">${doce.nome}</h3>
        <p class="text-sm text-gray-600 mb-1">${doce.descricao}</p>
        <p class="text-xs text-gray-700 line-clamp-3">${doce.preparo}</p>
    `;

    card.addEventListener("click", () => {
        const index = doces.findIndex(r => r.nome === doce.nome);
        window.open(`receitas.html?tipo=${tipo}&index=${index}`, "_blank");
    });

    return card;
}

function carregarReceitas() {
    const container = document.getElementById("doces");
    if (!container) return;

    const tipo = "doces";
    const receitas = doces;

    receitas.forEach(doce => {
        container.appendChild(criarCard(doce, tipo));
    });
}

document.addEventListener("DOMContentLoaded", carregarReceitas);