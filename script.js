const navLinks = document.querySelectorAll(".nav-link");
const pages = document.querySelectorAll(".page");
const navbar = document.getElementById("navbar");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    navLinks.forEach((l) => l.classList.remove("active"));
    pages.forEach((p) => p.classList.remove("active"));

    link.classList.add("active");

    const targetPage = link.getAttribute("href").substring(1);
    document.getElementById(targetPage).classList.add("active");

    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

document.querySelector(".contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for your message! I'll get back to you soon.");
  e.target.reset();
});

const projectCards = document.querySelectorAll(".project-card");
projectCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px) rotateX(5deg)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) rotateX(0)";
  });
});

document.querySelector(".cta-button").addEventListener("click", (e) => {
  e.preventDefault();

  navLinks.forEach((l) => l.classList.remove("active"));
  pages.forEach((p) => p.classList.remove("active"));
  document.querySelector('a[href="#portfolio"]').classList.add("active");
  document.getElementById("portfolio").classList.add("active");

  window.scrollTo({ top: 0, behavior: "smooth" });
});

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll(".project-card, .service-card").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "all 0.6s ease";
  observer.observe(el);
});
