import { receitas } from "./receitas.js";
const container = document.getElementById("receitas");
if (container) {
    receitas.forEach(receita => {
        const card = document.createElement("div");
        card.className = "bg-white p-4 rounded-xl shadow hover:shadow-lg transition";
        const titulo = document.createElement("h2");
        titulo.textContent = receita.titulo;
        titulo.className = "text-xl font-bold text-green-700 mb-2";
        const descricao = document.createElement("p");
        descricao.textContent = receita.descricao;
        descricao.className = "text-gray-600 mb-3";
        const lista = document.createElement("ul");
        lista.className = "list-disc list-inside text-sm text-gray-700 mb-3";
        receita.ingredientes.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            lista.appendChild(li);
        });
        const preparo = document.createElement("p");
        preparo.textContent = receita.preparo;
        preparo.className = "text-gray-800 text-sm";
        card.appendChild(titulo);
        card.appendChild(descricao);
        card.appendChild(lista);
        card.appendChild(preparo);
        container.appendChild(card);
    });
}
