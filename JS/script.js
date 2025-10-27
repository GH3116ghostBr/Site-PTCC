// ===== MENU ATIVO AO ROLAR =====
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// ===== ROLAGEM SUAVE =====
navLinks.forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    const targetId = this.getAttribute("href").slice(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

// ===== POPUP E REDIRECIONAMENTO =====
const btnComece = document.getElementById("btnComece");
const popup = document.getElementById("popup");

btnComece.addEventListener("click", (event) => {
  event.preventDefault();

  // mostra o popup
  popup.style.display = "flex";
  popup.style.opacity = 0;
  popup.style.transition = "opacity 0.5s";
  
  // anima fade-in
  setTimeout(() => {
    popup.style.opacity = 1;
  }, 10);

  // redireciona depois de 1,5s
  setTimeout(() => {
    popup.style.opacity = 0; // fade-out
    setTimeout(() => {
      popup.style.display = "none";
      window.location.href = "https://seudominio.com.br"; // seu site
    }, 500); // espera a animação sumir
  }, 1500);
});
