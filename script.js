const WHATSAPP_NUMBER = "13852210741";
const CONTACT_EMAIL = "info@ecomembranas.com";
const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;
const DEFAULT_MESSAGE =
  "Hola Ecomembranas, quisiera cotizar un proyecto con membranas arquitectónicas.";

const header = document.querySelector("[data-header]");

function setHeaderState() {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
}

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.href = `${WHATSAPP_BASE}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;
});

const quoteForm = document.querySelector("#quoteForm");

quoteForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const form = new FormData(quoteForm);
  const nombre = String(form.get("nombre") || "No indicado").trim();
  const ciudad = String(form.get("ciudad") || "No indicada").trim();
  const necesidad = String(form.get("necesidad") || "Cotización").trim();
  const detalles = String(form.get("detalles") || "Sin detalles adicionales").trim();

  const message = [
    "Hola Ecomembranas, quiero cotizar un proyecto.",
    `Nombre: ${nombre || "No indicado"}`,
    `Ciudad: ${ciudad || "No indicada"}`,
    `Necesidad: ${necesidad}`,
    `Detalles: ${detalles || "Sin detalles adicionales"}`,
    `Correo de referencia: ${CONTACT_EMAIL}`,
  ].join("\n");

  window.open(`${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
});
