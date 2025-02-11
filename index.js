// Navbar au scroll :
let playOnce = true;

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.style.height = "4vh";
  } else {
    navbar.style.height = "10vh";
  }

  // Apparition de l'image "Nakomoto"

  // Cette méthode garantit que la translation ne dépasse pas 50% de la largeur de l'écran, tout en prenant en compte la largeur de l'élément. Moins de déplacement sur mobile:
  let translation =
    window.innerWidth < 768
      ? "30vw"
      : `${Math.min(50, window.innerWidth / 2)}px`;

  // Ecrire un ratio de la hauteur total de la page:
  // Cette ligne de code calcule la position actuelle du défilement (scroll) par rapport à la hauteur totale de la page web: (entre 0 et 1)
  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;

  if (scrollValue > 0.45) {
    nakamoto.style.opacity = "1";
    nakamoto.style.transform = `translateX(${translation})`;
    nakamoto.style.transition = "transform 1s ease-out, opacity 1s ease-out";
  } else {
    nakamoto.style.opacity = "0";
    nakamoto.style.transform = "translateX(-20vw)";
  }

  // Apparition de la popup:

  const popup = document.querySelector(".popup");

  if (scrollValue > 0.8 && playOnce) {
    popup.style.opacity = "1"; // La popup devient visible
    popup.style.transform = `translateX(${translation})`; // Elle glisse depuis la droite
    popup.style.left = "65%"; // Positionne la popup correctement
    playOnce = false;
  }
});

// Fermeture de la popup quand on clique sur l'icône "X"
closeBtn.addEventListener("click", () => {
  const popup = document.querySelector(".popup");
  popup.style.opacity = "0"; // Rendre la popup invisible
  popup.style.transform = "translateX(150%)"; // La fait glisser hors de l'écran à droite
});

// explications chatGPT: Apparition de l'image NAKOMOTO:
//
// translateX(${translation})

//     translateX(value) est une fonction CSS qui déplace un élément horizontalement.
//     ${translation} est une variable injectée dans la chaîne de caractères grâce aux backticks `` et à l'interpolation de variables (${}`).

// Explication détaillée ChatGPT:

// 1️⃣ window.innerWidth < 768

//     window.innerWidth est la largeur de la fenêtre de visualisation (viewport) en pixels. Cela donne la taille de l'écran ou de la fenêtre du navigateur.
//     Ici, on vérifie si cette largeur est inférieure à 768px, ce qui est souvent la limite pour les appareils mobiles (tablettes ou téléphones).

// 2️⃣ Opération ternaire ? :

//     La syntaxe condition ? valeur1 : valeur2 est une opération ternaire en JavaScript. C'est une façon condensée d'écrire une structure if...else :
//         Si window.innerWidth < 768 est vrai, la valeur de translation sera "30vw".
//         Sinon, elle sera le résultat de l'expression suivante : ${Math.min(50, window.innerWidth / 2)}px.

// 3️⃣ Math.min(50, window.innerWidth / 2)

//     Math.min(a, b) est une fonction qui retourne la plus petite des deux valeurs entre a et b.
//         Si window.innerWidth / 2 (la moitié de la largeur de la fenêtre) est plus grand que 50, alors Math.min(50, window.innerWidth / 2) retournera 50.
//         Si window.innerWidth / 2 est plus petit que 50, alors la fonction retournera window.innerWidth / 2.

// 4️⃣ window.innerWidth / 2

//     Cela divise la largeur de l'écran par 2, ce qui donne la moitié de la largeur de la fenêtre.

// 5️⃣ Interpolation avec ${}

//     La syntaxe ${} est utilisée pour interpoler des variables dans des chaînes de caractères. Ici, cela permet d'insérer dynamiquement le résultat de l'expression Math.min(50, window.innerWidth / 2) dans la chaîne.

// 6️⃣ px

// Après avoir obtenu la valeur (en pixels), on ajoute px pour indiquer qu'il s'agit d'une unité de mesure en pixels.
