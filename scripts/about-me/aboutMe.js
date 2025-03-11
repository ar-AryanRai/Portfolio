const textElement = document.querySelector(".content p");

document.querySelector(".download").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "../files/Aryan_Resume_1.pdf"; // Replace with your file URL
  link.download = "Aryan-Resume.pdf"; // Rename the file if needed
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

textElement.innerHTML = `<span>I'm Aryan Rai,</span> <span>a passionate self</span> <span>taught frontend
        developer</span> <span>dedicated to crafting engaging,</span> <span>user-centric web experiences.</span> <span>My commitment to </span> <span>learning and exploring</span> <span>new technologies empowers</span> <span>me to specialize in creating</span> <span>responsive, interactive websites</span> <span>that captivate users using</span> <span>HTML, CSS, Tailwind,</span> <span>JavaScript, Reactjs, and GSAP.</span>`;

gsap.from(".content p span", {
  delay: 1.2, // Small delay before the effect starts
  opacity: 0,
  scale: 0,
  stagger: 0.2, // Very quick stagger for a fast typing-like effect
  ease: "back.out(1.7)", // Smooth popping effect
  duration: 1, // Shorter duration for a snappier appearance
});

gsap.from(".left-side", {
  delay: 1,
  duration: 2,
  opacity: 0,
});

gsap.from(".left-side img", {
  delay: 1,
  duration: 1,
  opacity: 0,
});

gsap.from(".right-side", {
  delay: 1,
  duration: 4,
  opacity: 0,
});

gsap.from(".content h1", {
  delay: 1,
  duration: 0.5,
  scale: 0,
  opacity: 0,
});

gsap.from(".content .btn .download", {
  delay: 3.5,
  duration: 1,
  scale: 0,
  opacity: 0,
});

const open = document.querySelector(".nav2 .fa-bars");
const close = document.querySelector(".nav2 .fa-xmark");

open.addEventListener("click", () => {
  gsap.to(".options-list", {
    x: 0,
    duration: 0.5,
    onStart: () => {
      document.querySelector(".options-list").style.display = "flex";
    },
  });
});

close.addEventListener("click", () => {
  gsap.to(".options-list", {
    x: 200,
    duration: 0.5,
    onComplete: () => {
      document.querySelector(".options-list").style.display = "none";
    },
  });
});
