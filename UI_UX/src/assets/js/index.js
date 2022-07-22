const navMenuBtn = document.querySelector("#menu");
const navMenuBar = document.querySelector('[role="menubar"]');

navMenuBtn.addEventListener("click", () => {
  const isExpanded = JSON.parse(navMenuBtn.getAttribute("aria-expanded"));
  navMenuBtn.setAttribute("aria-expanded", !isExpanded);
  navMenuBar.classList.toggle("hidden"); // la methode toggle rajoute la regle (hidden/flex) s'elle est absente, sinon elle va la supprimer
  navMenuBar.classList.toggle("flex"); // idem
});
