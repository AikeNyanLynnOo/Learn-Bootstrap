var loginModal = new bootstrap.Modal(document.getElementById("loginModal"), {
  keyboard: true,
});
var reserveModal = new bootstrap.Modal(
  document.getElementById("reserveModal"),
  {
    keyboard: true,
  }
);
document.getElementById("btnShowLogin").addEventListener("click", () => {
  loginModal.show();
});
document.getElementById("btnShowReserve").addEventListener("click", () => {
  reserveModal.show();
});
document.querySelectorAll(".btn-times").forEach((btn) => {
  btn.addEventListener("click", () => {
    loginModal.hide();
    reserveModal.hide();
  });
});
