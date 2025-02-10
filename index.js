// Contrôle de la hauteur de la navbar au scroll :

window.addEventListener("scroll", () => {

  if (window.scrollY > 100) {
    navbar.style.height = "4vh";
  } else {
    navbar.style.top = 0;
    navbar.style.height = "10vh";
  }
});




