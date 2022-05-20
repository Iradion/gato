function showModal() {
  document.getElementById("modal-cart").style.bottom = "0";
  document.getElementById("add__button").style.bottom = "0";
  document.getElementById("cart__close").style.visibility = "visible";
}
function hideModal() {
  document.getElementById("modal-cart").style.bottom = "-100vh";
  document.getElementById("add__button").style.bottom = "-5rem";
  document.getElementById("cart__close").style.visibility = "hidden";
  document.getElementById("cart__close").style.transition = "visibility 0s";
}