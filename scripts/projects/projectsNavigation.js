const prodLinks = document.querySelectorAll(
  ".project1, .project2, .project3, .project4, .project5"
);

function navigateTo2(path) {
  console.log(path);
  window.open(path, "_blank");
}

prodLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    let targetClass = event.target.classList;

    if (targetClass.contains("project4"))
      navigateTo2("https://36studio-clone.netlify.app");
    else if (targetClass.contains("project3"))
      navigateTo2("https://cosmic-cart.netlify.app/");
    else if (targetClass.contains("project2"))
      navigateTo2("https://efficio-ems.netlify.app/");
    else if (targetClass.contains("project5"))
      navigateTo2("https://slice-hub.netlify.app/");
    else if (targetClass.contains("project1"))
      navigateTo2("https://edvana.netlify.app");
  });
});
