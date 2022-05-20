const btnMobile = document.getElementById("btn-mobile")

function abrirMenu() {
  const nav = document.getElementById("nav")
  nav.classList.toggle("active")
}
btnMobile.addEventListener("click", abrirMenu)