const navLinks = document.querySelectorAll(
  ".rest-opt, .contact, .contact-me, .other-projects, .logo"
);

// Function to animate and redirect
const navigateToOther = (path) => {
  gsap.to("body", {
    opacity: 0,
    duration: 0.6,
    onComplete: () => {
      if (document.querySelector(".current") === null) {
        window.location.href = path;
      } else if (document.querySelector(".current").innerHTML === "Home") {
        window.location.href = "./pages/" + path;
      } else {
        window.location.href = path;
      }
    },
  });
};

console.log(document.querySelector(".current"));

const navigateToHome = (path) => {
  gsap.to("body", {
    opacity: 0,
    duration: 0.6,
    onComplete: () => {
      if (document.querySelector(".current") === null) {
        window.location.href = "../index.html";
      } else if (document.querySelector(".current").innerHTML === "Home") {
        window.location.href = path;
      } else {
        window.location.href = "../index.html";
      }
    },
  });
};
// Fade-in effect when a new page loads
gsap.to("body", { opacity: 1, duration: 1 });

// Attach event listeners to all nav links
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    let targetClass = event.target.classList;

    if (targetClass.contains("home")) {
      navigateToHome("index.html");
    } else if (targetClass.contains("about")) {
      navigateToOther("aboutMe.html");
    } else if (targetClass.contains("contact")) {
      navigateToOther("contact.html");
    } else if (targetClass.contains("logo")) {
      navigateToHome("index.html");
    } else if (targetClass.contains("contact-me")) {
      navigateToOther("contact.html");
    } else if (targetClass.contains("other-projects")) {
      navigateToOther("moreProjects.html", "other");
    } else if (targetClass.contains("projects")) {
      navigateToOther("projects.html");
    } else if (targetClass.contains("skills")) {
      navigateToOther("skills.html");
    }
  });
});
