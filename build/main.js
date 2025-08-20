import { receitasDoces, receitasSalgadas } from "./receitas.js";
function criarCard(receita) {
    const card = document.createElement("div");
    card.className = "bg-white shadow-md rounded-lg overflow-hidden";
    card.innerHTML = `
        <img src="${receita.imagem}" alt="${receita.nome}" class="w-full h-48 object-cover">
        <div class="p-4">
            <h3 class="text-lg font-bold mb-2">${receita.nome}</h3>
            <p class="text-gray-600">${receita.descricao}</p>
        </div>
    `;
    return card;
}
function carregarReceitas() {
    const container = document.getElementById("receitas");
    if (!container)
        return;
    const pagina = window.location.pathname.split("/").pop();
    if (pagina === "doces.html") {
        receitasDoces.forEach((r) => container.appendChild(criarCard(r)));
    }
    else if (pagina === "salgados.html") {
        receitasSalgadas.forEach((r) => container.appendChild(criarCard(r)));
    }
}
document.addEventListener("DOMContentLoaded", carregarReceitas);
