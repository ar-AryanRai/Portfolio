const prodLinks = document.querySelectorAll(
  ".wizardZ, .space, .ems, .cart, .sorting"
);

function navigateTo2(path) {
  console.log(path);
  window.open(path, "_blank");
}

prodLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    let targetClass = event.target.classList;

    if (targetClass.contains("wizardZ"))
      navigateTo2("https://ar-aryanrai.github.io/WizardZ/");
    else if (targetClass.contains("space"))
      navigateTo2("https://ar-aryanrai.github.io/CosmicCart/");
    else if (targetClass.contains("ems"))
      navigateTo2("https://staffsync-ems.netlify.app/");
    else if (targetClass.contains("cart"))
      navigateTo2("https://co-cart.netlify.app/");
    else if (targetClass.contains("sorting"))
      navigateTo2("https://ar-aryanrai.github.io/Sorting-Visualizer/");
  });
});
