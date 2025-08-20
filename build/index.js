"use strict";
const slides = [
    { imagem: "../img/boloChocolate.jpg", titulo: "Bolo de Chocolate", descricao: "Bolo fofinho com cobertura de chocolate" },
    { imagem: "../img/coxinha.jpg", titulo: "Coxinha", descricao: "Salgado frito recheado com frango" },
    { imagem: "../img/tortaMorango.png", titulo: "Torta de Morango", descricao: "Deliciosa torta com morangos frescos" },
];
const container = document.getElementById("slides");
slides.forEach(slide => {
    const div = document.createElement("div");
    div.className = "min-w-full flex-shrink-0 relative";
    div.innerHTML = `
        <img src="${slide.imagem}" alt="${slide.titulo}" class="w-full h-64 object-cover rounded-lg">
        <div class="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded">
            <h2 class="font-bold">${slide.titulo}</h2>
            <p class="text-sm">${slide.descricao}</p>
        </div>
    `;
    container.appendChild(div);
});
let currentIndex = 0;
const total = slides.length;
const slidesEl = container;
function updateSlide(index) {
    slidesEl.style.transform = `translateX(-${index * 100}%)`;
}
document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + total) % total;
    updateSlide(currentIndex);
});
document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % total;
    updateSlide(currentIndex);
});
setInterval(() => {
    currentIndex = (currentIndex + 1) % total;
    updateSlide(currentIndex);
}, 5000);
