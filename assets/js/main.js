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

  if ("IntersectionObserver" in window && revealItems.length > 0 && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
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

  // Valida campos obrigatórios e mostra a mensagem logo abaixo de cada campo.
  function validarFormulario(formulario) {
    let primeiroInvalido = null;

    formulario.querySelectorAll("[required]").forEach(function (campo) {
      const erroId = campo.id + "-erro";
      let erro = document.getElementById(erroId);

      if (campo.value.trim()) {
        campo.removeAttribute("aria-invalid");
        campo.removeAttribute("aria-describedby");
        if (erro) erro.remove();
        return;
      }

      if (!erro) {
        erro = document.createElement("span");
        erro.id = erroId;
        erro.className = "field-error";
        erro.setAttribute("role", "alert");
        campo.insertAdjacentElement("afterend", erro);
      }

      const rotulo = formulario.querySelector('label[for="' + campo.id + '"]');
      const nomeCampo = rotulo ? rotulo.textContent.trim().toLowerCase() : "este campo";
      erro.textContent = campo.tagName === "SELECT" ? "Selecione o " + nomeCampo + "." : "Preencha o campo " + nomeCampo + ".";
      campo.setAttribute("aria-invalid", "true");
      campo.setAttribute("aria-describedby", erroId);
      primeiroInvalido = primeiroInvalido || campo;
    });

    if (primeiroInvalido) {
      primeiroInvalido.focus();
      return false;
    }

    return true;
  }

  document.querySelectorAll("form[novalidate] [required]").forEach(function (campo) {
    campo.addEventListener(campo.tagName === "SELECT" ? "change" : "blur", function () {
      if (campo.getAttribute("aria-invalid") === "true" && campo.value.trim()) {
        validarFormulario(campo.form);
      }
    });
  });

  const form = document.querySelector("#localForm");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!validarFormulario(form)) {
        return;
      }

      const bairro = form.dataset.bairro || "minha região";
      const whatsapp = form.dataset.whatsapp;
      const nome = document.querySelector("#name")?.value.trim();
      const street = document.querySelector("#street")?.value.trim();
      const problem = document.querySelector("#problem")?.value.trim();

      if (!nome || !street || !problem || !whatsapp) {
        return;
      }

      const message = `Olá, meu nome é ${nome}. Estou em ${bairro}, próximo de ${street}. Estou com o seguinte problema: ${problem}. Gostaria de receber orientação e orçamento.`;

      window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`, "_blank");
    });
  }
  const serviceForm = document.querySelector("#serviceForm");

if (serviceForm) {
  serviceForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!validarFormulario(serviceForm)) {
      return;
    }

    const whatsapp = serviceForm.dataset.whatsapp;
    const servico = serviceForm.dataset.servico || "detecção de vazamento";

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

  const contactForm = document.querySelector("#contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!validarFormulario(contactForm)) {
        return;
      }

      const whatsapp = contactForm.dataset.whatsapp;
      const nome = document.querySelector("#contactName")?.value.trim();
      const bairro = document.querySelector("#contactDistrict")?.value.trim();
      const tipoImovel = document.querySelector("#contactProperty")?.value.trim();
      const problema = document.querySelector("#contactProblem")?.value.trim();
      const detalhes = document.querySelector("#contactMessage")?.value.trim();

      if (!whatsapp || !nome || !bairro || !tipoImovel || !problema) {
        return;
      }

      let message = `Olá, meu nome é ${nome}. Estou no bairro ${bairro}. O imóvel é ${tipoImovel}. Problema: ${problema}.`;

      if (detalhes) {
        message += ` Detalhes: ${detalhes}`;
      }

      window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`, "_blank");
    });
  }

  document.querySelectorAll(".faq-question").forEach(function (button) {
    button.addEventListener("click", function () {
      const item = button.closest(".faq-item");
      const answer = item.querySelector(".faq-answer");

      const aberto = item.classList.toggle("open");
      button.setAttribute("aria-expanded", String(aberto));

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