// Seleciona o modal
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

// Função para abrir o modal
function openModal(img) {
    modal.showModal(); // Abre o modal
    modalImg.src = img.src; // Define a imagem no modal
    captionText.innerHTML = img.alt; // Define o texto da legenda
}

// Função para anexar eventos de clique às imagens
function attachImageClickEvents() {
    const images = document.querySelectorAll(".accordion-content img");
    images.forEach((img) => {
        img.removeEventListener("click", handleImageClick); // Remove event listener duplicado
        img.addEventListener("click", handleImageClick);
    });
}

// Função para lidar com o clique na imagem
function handleImageClick(event) {
    openModal(event.target);
}

// Fecha o modal ao clicar no botão de fechar
closeBtn.addEventListener("click", () => {
    modal.close(); // Fecha o modal
});

// Fecha o modal ao clicar fora da imagem
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.close();
    }
});

// Seleciona todos os botões do acordeão
const accordionToggles = document.querySelectorAll(".accordion-toggle");

accordionToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
        // Seleciona o conteúdo associado ao botão clicado
        const contentId = toggle.getAttribute("aria-controls");
        const content = document.getElementById(contentId);

        // Alterna a visibilidade do conteúdo
        const isExpanded = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", !isExpanded);
        content.hidden = isExpanded;

        // Reanexa os eventos de clique nas imagens após expandir o acordeão
        if (!isExpanded) {
            attachImageClickEvents();
        }
    });
});

// Inicializa os eventos de clique nas imagens
attachImageClickEvents();