import { receitasDoces, receitasSalgadas } from "./receitas.js";
function criarCard(receita, tipo) {
    const card = document.createElement("div");
    card.className = "bg-white shadow-md rounded-lg p-4 cursor-pointer hover:shadow-lg transition";
    card.innerHTML = `
        <img src="${receita.imagem}" alt="${receita.nome}" class="w-full h-48 object-cover rounded mb-4">
        <h3 class="text-xl font-bold mb-2">${receita.nome}</h3>
        <p class="text-gray-600 mb-2">${receita.descricao}</p>
        <p class="text-gray-700 text-sm line-clamp-3">${receita.preparo}</p>
    `;
    card.addEventListener("click", () => {
        const index = tipo === "doces"
            ? receitasDoces.findIndex(r => r.nome === receita.nome)
            : receitasSalgadas.findIndex(r => r.nome === receita.nome);
        window.open(`receitas.html?tipo=${tipo}&index=${index}`, "_blank");
    });
    return card;
}
function carregarReceitas() {
    const container = document.getElementById("receitas");
    if (!container)
        return;
    const tipo = window.location.pathname.includes("doces.html") ? "doces" : "salgados";
    const receitas = tipo === "doces" ? receitasDoces : receitasSalgadas;
    receitas.forEach(receita => {
        container.appendChild(criarCard(receita, tipo));
    });
}
document.addEventListener("DOMContentLoaded", carregarReceitas);
