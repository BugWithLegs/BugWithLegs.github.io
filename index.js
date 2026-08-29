const popup = document.getElementById('popup');
const githubbtn1 = document.getElementById('github1')
const githubbtn2 = document.getElementById('github2')

githubbtn1.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("show");
  setTimeout(() => {
    popup.classList.remove("show");
  }, 3000);
});
githubbtn2.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("show");
  setTimeout(() => {
    popup.classList.remove("show");
  }, 3000);
});

var typed = new Typed("#weareanon", {
  strings: [
    "ARE ANONYMOUS",
    "ARE LEGION",
    "DO NOT FORGIVE",
    "DO NOT FORGET",
  ],
  typeSpeed: 70,
  showCursor: false,
  backSpeed: 70,
  backDelay: 2000,
  loop: true,
});

const elements = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15
  }
);

elements.forEach((element) => {
  observer.observe(element);
});
