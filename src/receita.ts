import { receitasDoces, receitasSalgadas } from "./receitas.js";

function carregarDetalhe() {
    const container = document.getElementById("receita-detalhe");
    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const tipo = params.get("tipo");
    const index = Number (params.get("index"));

    let receita;
    if (tipo === "doces") receita = receitasDoces[index];
    else if (tipo === "salgados") receita = receitasSalgadas[index];

    if (!receita) return;

    container.innerHTML = `
        <h2 class="text-2xl font-bold mb-4">${receita.nome}</h2>
        <img src="${receita.imagem}" alt="${receita.nome}" class="w-full h-64 object-cover rounded mb-4">
        <p class="text-gray-600 mb-2">${receita.descricao}</p>
        <h3 class="text-xl font-semibold mt-4 mb-2">Modo de preparo:</h3>
        <p class="text-gray-700">${receita.preparo}</p>
    `;
}

document.addEventListener("DOMContentLoaded", carregarDetalhe);