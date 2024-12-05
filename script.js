const fichaTecnicaButton = document.querySelector(".ficha-tecnica button");
const fichaTecnicaContainer = document.querySelector(".ficha-tecnica-container");

fichaTecnicaButton.addEventListener('click', () => {
    fichaTecnicaContainer.classList.toggle("hid");
})