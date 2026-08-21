const abrir = document.getElementById("abrirBtn");
const fechar = document.getElementById("fecharBtn");
const popup = document.getElementById("MeuPopup");

abrir.addEventListener("click", () => {
  popup.classList.add("ativo");
});

fechar.addEventListener("click", () => {
  popup.classList.remove("ativo");
});