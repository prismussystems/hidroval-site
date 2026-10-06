document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", function () {
      const isOpen = mobileMenu.classList.toggle("open");

      body.classList.toggle("menu-open", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      mobileMenu.setAttribute("aria-hidden", String(!isOpen));
    });

    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileMenu.classList.remove("open");
        body.classList.remove("menu-open");
        menuToggle.setAttribute("aria-expanded", "false");
        mobileMenu.setAttribute("aria-hidden", "true");
      });
    });
  }

  const revealItems = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && revealItems.length > 0) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealItems.forEach(function (item) {
      observer.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add("visible");
    });
  }

  const form = document.querySelector("#localForm");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const bairro = form.dataset.bairro || "São Paulo";
      const whatsapp = form.dataset.whatsapp;
      const nome = document.querySelector("#name")?.value.trim();
      const street = document.querySelector("#street")?.value.trim();
      const problem = document.querySelector("#problem")?.value.trim();

      if (!nome || !street || !problem || !whatsapp) {
        return;
      }

      const message = `Olá, meu nome é ${nome}. Estou em ${bairro}, próximo de ${street}. Preciso de atendimento para ${problem}. Gostaria de receber orientação e orçamento.`;

      window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`, "_blank");
    });
  }
  const serviceForm = document.querySelector("#serviceForm");

if (serviceForm) {
  serviceForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const whatsapp = serviceForm.dataset.whatsapp;
    const servico = serviceForm.dataset.servico || "controle de pragas";

    const nome = document.querySelector("#serviceName")?.value.trim();
    const bairro = document.querySelector("#serviceDistrict")?.value.trim();
    const tipoImovel = document.querySelector("#serviceProperty")?.value.trim();

    if (!whatsapp || !nome || !bairro || !tipoImovel) {
      return;
    }

    const message = `Olá, meu nome é ${nome}. Estou no bairro ${bairro}. O imóvel é ${tipoImovel}. Preciso de atendimento para ${servico}. Gostaria de receber orientação e orçamento.`;

    window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`, "_blank");
  });
}

  document.querySelectorAll(".faq-question").forEach(function (button) {
    button.addEventListener("click", function () {
      const item = button.closest(".faq-item");
      const answer = item.querySelector(".faq-answer");

      item.classList.toggle("open");

      if (item.classList.contains("open")) {
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        answer.style.maxHeight = null;
      }
    });
  });

  const year = document.querySelector("#year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }
});