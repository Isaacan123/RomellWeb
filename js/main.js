const PRODUCTS = {
  pique: {
    name: "Piqué",
    href: "producto-pique.html",
    cover: "media/cover-pique.jpg",
    description:
      "Tejido de punto con textura característica, estabilidad estructural y excelente presentación para playeras, uniformes y prendas corporativas.",
    colors: [
      { name: "AZUL MARINO", hex: "#000080", img: "media/pique-azul-marino.jpg" },
      { name: "BLANCO ESCOLAR", hex: "#FFFFFF", img: "media/pique-blanco-escolar.jpg" },
      { name: "GRIS JASPE", hex: "#ABC1CC", img: "media/pique-gris-jaspe.jpg" },
      { name: "GRIS OXFORD", hex: "#393D42", img: "media/pique-gris-oxford.jpg" },
      { name: "NEGRO", hex: "#000000", img: "media/pique-negro.jpg" }
    ]
  },
  cardigan: {
    name: "Cardigán",
    href: "producto-cardigan.html",
    cover: "media/cover-cardigan.jpg",
    description:
      "Tela de punto suave y con cuerpo, ideal para sudaderas y prendas de abrigo. Disponible en algodón-poliéster y variantes de poliéster.",
    colors: [
      { name: "AVENA", hex: "#E0DCC8", img: "media/cardigan-avena.jpg" },
      { name: "AZUL MARINO", hex: "#000080", img: "media/cardigan-azul-marino.jpg" },
      { name: "AZUL NAVY", hex: "#202A44", img: "media/cardigan-azul-navy.jpg" },
      { name: "GRIS JASPE", hex: "#ABC1CC", img: "media/cardigan-gris-jaspe.jpg" },
      { name: "GRIS MEDIO", hex: "#808080", img: "media/cardigan-gris-medio.jpg" },
      { name: "NEGRO", hex: "#000000", img: "media/cardigan-negro.jpg" },
      { name: "ROJO", hex: "#F10707", img: "media/cardigan-rojo.jpg" },
      { name: "PETRÓLEO", hex: "#01454F", img: "media/cardigan-petroleo.jpg" },
      { name: "VERDE MILITAR", hex: "#454D1C", img: "media/cardigan-verde-militar.jpg" },
      { name: "VINO", hex: "#800020", img: "media/cardigan-vino.jpg" }
    ]
  },
  chiffon: {
    name: "Chiffón",
    href: "producto-chiffon.html",
    cover: "media/cover-chiffon.jpg",
    description:
      "Acabado ligero y fluido, con caída uniforme para prendas que requieren suavidad, movimiento y una presentación limpia de color.",
    colors: [
      { name: "AVENA", hex: "#E0DCC8", img: "media/shiffon-avena.jpg" },
      { name: "AZUL MARINO", hex: "#000080", img: "media/shiffon-azul-marino.jpg" },
      { name: "GRIS JASPE", hex: "#ABC1CC", img: "media/shiffon-gris-jaspe.jpg" },
      { name: "GRIS MEDIO", hex: "#808080", img: "media/shiffon-gris-medio.jpg" },
      { name: "NEGRO", hex: "#000000", img: "media/shiffon-negro.jpg" },
      { name: "PETRÓLEO", hex: "#01454F", img: "media/shiffon-petroleo.jpg" },
      { name: "VERDE MILITAR", hex: "#454D1C", img: "media/shiffon-verde-militar.jpg" }
    ]
  },
  felpa: {
    name: "Felpa",
    href: "producto-felpa.html",
    cover: "media/cover-felpa.jpg",
    description:
      "Felpa de punto con cobertura de vello homogénea, confort térmico y calidad estética para sudaderas y prendas deportivas.",
    colors: [
      { name: "AVENA", hex: "#E0DCC8", img: "media/felpa-avena.jpg" },
      { name: "AZUL MARINO", hex: "#000080", img: "media/felpa-azul-marino.jpg" },
      { name: "AZUL NAVY", hex: "#202A44", img: "media/felpa-azul-navy.jpg" },
      { name: "GRIS JASPE", hex: "#ABC1CC", img: "media/felpa-gris-jaspe.jpg" },
      { name: "GRIS OXFORD", hex: "#393D42", img: "media/felpa-gris-oxford.jpg" },
      { name: "NEGRO", hex: "#000000", img: "media/felpa-negro.jpg" },
      { name: "PETRÓLEO", hex: "#01454F", img: "media/felpa-petroleo.jpg" },
      { name: "ROJO", hex: "#F10707", img: "media/felpa-rojo.jpg" },
      { name: "VERDE MILITAR", hex: "#454D1C", img: "media/felpa-verde-militar.jpg" },
      { name: "VINO", hex: "#800020", img: "media/felpa-vino.jpg" }
    ]
  }
};

const NAV = [
  { id: "inicio", href: "index.html", label: "Inicio" },
  { id: "nosotros", href: "nosotros.html", label: "Nosotros" },
  { id: "soluciones", href: "soluciones.html", label: "Soluciones" },
  { id: "contacto", href: "contacto.html", label: "Contacto" },
  { id: "catalogo", href: "catalogo.html", label: "Catálogo" }
];

function swatchesHTML(product, withButtons = true) {
  return product.colors
    .map(
      (c, i) =>
        `<button class="swatch${i === 0 ? " is-active" : ""}" type="button" data-img="${c.img}" data-name="${c.name}" title="${titleCase(c.name)}" aria-label="${titleCase(c.name)}" style="background:${c.hex}" ${withButtons ? "" : "tabindex='-1'"}></button>`
    )
    .join("");
}

const WA_NUMBER = "522211841803";

function titleCase(name) {
  return name.charAt(0) + name.slice(1).toLowerCase();
}

function waLink(text) {
  return "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(text);
}

function quoteText(p, colorName) {
  return colorName
    ? "Hola, quiero cotizar la tela " + p.name + " en color " + titleCase(colorName) + " de ROMELL TEXTIL."
    : "Hola, quiero cotizar la tela " + p.name + " de ROMELL TEXTIL.";
}

function productCard(key) {
  const p = PRODUCTS[key];
  const first = p.colors[0];
  return `
    <article class="product-card" data-product="${key}">
      <a class="card-link" href="${p.href}">
        <figure>
          <img src="${first.img}" alt="Tela ${p.name} color ${titleCase(first.name)}, ROMELL TEXTIL" loading="lazy">
          <span class="card-color-tag">${titleCase(first.name)}</span>
          <span class="quick-view">Ver tela</span>
        </figure>
        <div class="card-meta">
          <h3 class="card-title">Tela <em>${p.name.toLowerCase()}</em></h3>
          <span class="card-count">${p.colors.length} colores</span>
        </div>
      </a>
      <div class="swatches" role="group" aria-label="Colores de ${p.name}">${swatchesHTML(p)}</div>
      <div class="card-actions">
        <a class="card-btn card-btn-wa" href="${waLink(quoteText(p, first.name))}" target="_blank" rel="noopener">Cotizar este color</a>
        <a class="card-btn" href="${p.href}">Ver tela</a>
      </div>
    </article>`;
}

/* Cambia una tarjeta al color indicado (foto, etiqueta, muestra activa y enlace de WhatsApp) */
function setCardColor(card, colorName) {
  const key = card.dataset.product;
  const p = PRODUCTS[key];
  if (!p) return;
  const color = p.colors.find((c) => c.name === colorName) || p.colors[0];
  const img = card.querySelector("img");
  if (img) {
    img.src = color.img;
    img.alt = "Tela " + p.name + " color " + titleCase(color.name) + ", ROMELL TEXTIL";
  }
  const tag = card.querySelector(".card-color-tag");
  if (tag) tag.textContent = titleCase(color.name);
  card.querySelectorAll(".swatch").forEach((s) => s.classList.toggle("is-active", s.dataset.name === color.name));
  const wa = card.querySelector(".card-btn-wa");
  if (wa) wa.href = waLink(quoteText(p, color.name));
}

function renderHeader(active) {
  const header = document.getElementById("site-header");
  if (!header) return;
  header.innerHTML = `
    <header class="site-header">
      <div class="header-bar">
        <a class="header-logo" href="index.html" aria-label="ROMELL TEXTIL, inicio">
          <img src="media/logo-header.png" alt="ROMELL TEXTIL">
        </a>
        <nav class="site-nav" aria-label="Sitio">
          ${NAV.map(
            (item) =>
              `<a href="${item.href}" class="${item.id === active ? "is-active" : ""}"${item.id === active ? ' aria-current="page"' : ""}>${item.label}</a>`
          ).join("")}
          <a class="nav-cta nav-cta-mobile" href="https://wa.me/522211841803?text=Hola%2C%20quiero%20cotizar%20telas%20de%20ROMELL%20TEXTIL." target="_blank" rel="noopener">Cotizar por WhatsApp</a>
        </nav>
        <a class="nav-cta" href="https://wa.me/522211841803?text=Hola%2C%20quiero%20cotizar%20telas%20de%20ROMELL%20TEXTIL." target="_blank" rel="noopener">Cotizar</a>
        <button class="nav-toggle" aria-label="Abrir menú" aria-expanded="false"><span></span></button>
      </div>
    </header>`;
}

const iconMail = `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.6" d="M4 7.5h16v9H4z"/><path fill="none" stroke="currentColor" stroke-width="1.6" d="m5 8 7 5 7-5"/></svg>`;
const iconPhone = `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" d="M7.2 4.8h3.1l1.2 3.2-1.6 1.1a11 11 0 0 0 5 5l1.1-1.6 3.2 1.2v3.1c0 .7-.6 1.4-1.4 1.4C10.2 18.2 5.8 13.8 5.8 6.2c0-.8.7-1.4 1.4-1.4Z"/></svg>`;
const iconWa = `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12.04 4.5A7.46 7.46 0 0 0 5.1 15.3L4.5 19.5l4.3-.6A7.47 7.47 0 1 0 12.04 4.5Zm0 13.6a6.1 6.1 0 0 1-3.1-.86l-.22-.13-2.55.67.68-2.49-.14-.23a6.13 6.13 0 1 1 5.33 3.04Zm3.36-4.58c-.18-.09-.96-.47-1.11-.53s-.26-.09-.37.09-.43.53-.52.64-.2.13-.37.04a6.3 6.3 0 0 1-1.86-1.15 6.9 6.9 0 0 1-1.27-1.6c-.13-.23 0-.35.08-.47l.27-.35.16-.27c.08-.13.04-.24 0-.33l-.75-1.8c-.18-.4-.36-.35-.5-.35h-.42c-.13 0-.35.05-.53.24s-.7.68-.7 1.67.75 1.94.86 2.08a9.9 9.9 0 0 0 3.72 3.28c1.36.59 1.86.64 2.53.54.4-.08 1.36-.55 1.55-1.08s.19-.98.13-1.08-.18-.16-.4-.25Z"/></svg>`;
const iconBag = `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.6" d="M6.5 8.5h11l-.8 10H7.3z"/><path fill="none" stroke="currentColor" stroke-width="1.6" d="M9 8.5V7a3 3 0 0 1 6 0v1.5"/></svg>`;

function renderFooter() {
  const footer = document.getElementById("site-footer");
  if (!footer) return;
  footer.innerHTML = `
    <footer class="site-footer">
      <div class="footer-grid">
        <div>
          <img class="footer-logo" src="media/logo-blanco.png" alt="ROMELL TEXTIL">
        </div>
        <div>
          <h4>Visítanos</h4>
          <p>San Juan Cuautlancingo,<br>72700, Puebla, Pue.</p>
          <div class="footer-links">
            <a href="politica-calidad.html">Política de calidad</a>
            <a href="aviso-privacidad.html">Aviso de privacidad</a>
          </div>
        </div>
        <div>
          <div class="socials">
            <a href="https://www.facebook.com/romell.textil/" target="_blank" rel="noopener" aria-label="Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.3H8v3h2.6V21z"/></svg></a>
            <a href="https://www.instagram.com/romelltextil1" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor"/></svg></a>
          </div>
          <h4>Horario de atención</h4>
          <p>Lunes a viernes<br>9:00 a 18:00 h</p>
        </div>
      </div>
      <div class="contact-bar">
        <a href="mailto:ventas@romelltextil.com">
          <span class="icon-circle">${iconMail}</span>
          <span>ventas@romelltextil.com</span>
        </a>
        <a href="tel:2229939455">
          <span class="icon-circle">${iconPhone}</span>
          <span><strong>Tel:</strong><br>222 993 9455</span>
        </a>
        <a href="https://wa.me/522211841803" target="_blank" rel="noopener">
          <span class="icon-circle">${iconWa}</span>
          <span><strong>Ventas:</strong><br>221 184 1803 / 221 280 0811</span>
        </a>
        <a href="tel:2211821750">
          <span class="icon-circle">${iconBag}</span>
          <span><strong>Tienda Xoxtla:</strong><br>2211821750</span>
        </a>
      </div>
      <p class="copyright">© ${new Date().getFullYear()} ROMELL TEXTIL, Puebla, México.</p>
    </footer>
    <a class="wa-float" href="https://wa.me/522211841803" target="_blank" rel="noopener" aria-label="WhatsApp">
      ${iconWa}
    </a>`;
}

/* Fondo animado global: auroras y listones de luz en tonos vino, muy suaves */
function renderBackgroundFx() {
  if (document.querySelector(".bg-fx")) return;
  const fx = document.createElement("div");
  fx.className = "bg-fx";
  fx.setAttribute("aria-hidden", "true");
  fx.innerHTML = `
    <span class="aurora aurora-a"></span>
    <span class="aurora aurora-b"></span>
    <svg class="ribbons" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="rib1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stop-color="#6e0f13" stop-opacity="0"/>
          <stop offset=".45" stop-color="#b8343a" stop-opacity=".55"/>
          <stop offset=".7" stop-color="#e8c4c0" stop-opacity=".35"/>
          <stop offset="1" stop-color="#6e0f13" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="rib2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stop-color="#3d0205" stop-opacity="0"/>
          <stop offset=".5" stop-color="#8e1c22" stop-opacity=".5"/>
          <stop offset="1" stop-color="#3d0205" stop-opacity="0"/>
        </linearGradient>
        <filter id="ribBlur" x="-10%" y="-50%" width="120%" height="200%"><feGaussianBlur stdDeviation="6"/></filter>
      </defs>
      <g class="rib rib-1" filter="url(#ribBlur)">
        <path d="M-100 620 C 300 420, 700 820, 1100 520 S 1600 380, 1700 460" stroke="url(#rib1)" stroke-width="90" fill="none"/>
        <path d="M-100 660 C 320 470, 720 860, 1120 560 S 1600 420, 1700 500" stroke="url(#rib1)" stroke-width="2" fill="none"/>
      </g>
      <g class="rib rib-2" filter="url(#ribBlur)">
        <path d="M-120 240 C 260 380, 620 80, 1000 260 S 1500 300, 1660 160" stroke="url(#rib2)" stroke-width="140" fill="none"/>
        <path d="M-120 280 C 260 420, 640 120, 1020 300 S 1500 340, 1660 200" stroke="url(#rib1)" stroke-width="1.5" fill="none"/>
      </g>
    </svg>`;
  document.body.prepend(fx);
}

function bindNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  if (!toggle || !nav) return;
  const setOpen = (open) => {
    nav.classList.toggle("is-open", open);
    toggle.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  };
  toggle.addEventListener("click", () => setOpen(!nav.classList.contains("is-open")));
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });
}

function bindSwatches(root = document) {
  root.querySelectorAll(".product-card").forEach((card) => {
    card.querySelectorAll(".swatch").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        setCardColor(card, btn.dataset.name);
      });
    });
  });

  root.querySelectorAll(".product-page").forEach((page) => {
    const img = page.querySelector(".product-gallery img");
    const label = page.querySelector(".color-name");
    const wa = page.querySelector(".btn-whatsapp");
    const p = PRODUCTS[page.dataset.productDetail];
    page.querySelectorAll(".swatch").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        page.querySelectorAll(".swatch").forEach((s) => s.classList.remove("is-active"));
        btn.classList.add("is-active");
        if (img && btn.dataset.img) img.src = btn.dataset.img;
        if (label) label.textContent = "Color: " + titleCase(btn.dataset.name);
        if (wa && p) wa.href = waLink(quoteText(p, btn.dataset.name));
      });
    });
  });
}

const catalogState = { type: "", color: "" };

function applyCatalog() {
  const cards = document.querySelectorAll("#catalog-grid [data-product]");
  let visible = 0;
  cards.forEach((card) => {
    const key = card.dataset.product;
    const p = PRODUCTS[key];
    const typeOk = !catalogState.type || catalogState.type === key;
    const colorOk = !catalogState.color || p.colors.some((c) => c.name === catalogState.color);
    const show = typeOk && colorOk;
    card.hidden = !show;
    if (show) {
      visible += 1;
      setCardColor(card, catalogState.color || p.colors[0].name);
    }
  });
  const count = document.getElementById("product-count");
  if (count) count.textContent = visible === 1 ? "1 tela" : visible + " telas";
  const status = document.getElementById("color-status");
  if (status) {
    status.textContent = catalogState.color ? "en color " + titleCase(catalogState.color) : "en todos los colores";
  }
  const empty = document.getElementById("catalog-empty");
  if (empty) empty.hidden = visible > 0;
}

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page || "inicio";
  renderHeader(page);
  renderFooter();
  renderBackgroundFx();
  bindNav();

  /* En hosting sin PHP (GitHub Pages, vista previa) el formulario envía el mensaje por WhatsApp */
  const form = document.getElementById("contact-form");
  const noPhp = /github\.io$|claudeusercontent|claude\.ai/.test(location.hostname) || location.protocol === "file:";
  if (form && noPhp) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      const d = new FormData(form);
      const nombre = [d.get("nombre"), d.get("apellido")].filter(Boolean).join(" ");
      const lines = [
        "Hola, les escribo desde la página de ROMELL TEXTIL.",
        nombre && "Nombre: " + nombre,
        d.get("puesto") && "Puesto: " + d.get("puesto"),
        "Email: " + d.get("email"),
        d.get("telefono") && "Teléfono: " + d.get("telefono"),
        "",
        d.get("mensaje"),
      ].filter((l) => l !== null && l !== undefined && l !== false);
      window.open(waLink(lines.join("\n")), "_blank", "noopener");
      const ok = document.getElementById("form-success");
      if (ok) {
        ok.textContent = "Abrimos WhatsApp con tu mensaje listo. Solo presiona enviar.";
        ok.classList.add("is-on");
      }
    });
  }

  const params = new URLSearchParams(location.search);
  if (params.get("enviado") === "1") {
    const ok = document.getElementById("form-success");
    if (ok) ok.classList.add("is-on");
  }
  if (params.get("error") === "1") {
    const fail = document.getElementById("form-error");
    if (fail) fail.classList.add("is-on");
  }

  const homeCatalog = document.getElementById("home-catalog");
  if (homeCatalog) {
    homeCatalog.innerHTML = ["pique", "cardigan", "chiffon", "felpa"].map(productCard).join("");
  }

  const catalogGrid = document.getElementById("catalog-grid");
  if (catalogGrid) {
    catalogGrid.innerHTML = ["pique", "cardigan", "chiffon", "felpa"].map(productCard).join("");

    document.querySelectorAll("[data-filter-color]").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("[data-filter-color]").forEach((b) => {
          b.classList.remove("is-active");
          b.setAttribute("aria-pressed", "false");
        });
        btn.classList.add("is-active");
        btn.setAttribute("aria-pressed", "true");
        catalogState.color = btn.dataset.filterColor;
        applyCatalog();
      });
    });

    document.querySelectorAll("[data-filter-type]").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("[data-filter-type]").forEach((b) => {
          b.classList.remove("is-active");
          b.setAttribute("aria-pressed", "false");
        });
        btn.classList.add("is-active");
        btn.setAttribute("aria-pressed", "true");
        catalogState.type = btn.dataset.filterType;
        applyCatalog();
      });
    });

    const reset = document.getElementById("catalog-reset");
    if (reset) {
      reset.addEventListener("click", () => {
        document.querySelector('[data-filter-type=""]')?.click();
        document.querySelector('[data-filter-color=""]')?.click();
      });
    }
    applyCatalog();
  }

  const productRoot = document.querySelector("[data-product-detail]");
  if (productRoot) {
    const key = productRoot.dataset.productDetail;
    const p = PRODUCTS[key];
    if (p) {
      productRoot.querySelector("h1").innerHTML = "Tela <em>" + p.name.toLowerCase() + "</em>";
      productRoot.querySelector(".product-desc").textContent = p.description;
      productRoot.querySelector(".swatches").innerHTML = swatchesHTML(p);
      productRoot.querySelector(".product-gallery img").src = p.colors[0].img;
      const label = productRoot.querySelector(".color-name");
      if (label) label.textContent = "Color: " + titleCase(p.colors[0].name);
      const wa = productRoot.querySelector(".btn-whatsapp");
      if (wa) {
        wa.href = waLink(quoteText(p, p.colors[0].name));
      }
    }
  }

  bindSwatches();

  /* Índice de páginas de lectura: marca la sección visible */
  const tocLinks = document.querySelectorAll(".read-toc a");
  if (tocLinks.length && "IntersectionObserver" in window) {
    const byId = {};
    tocLinks.forEach((a) => (byId[a.getAttribute("href").slice(1)] = a));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            tocLinks.forEach((a) => a.classList.remove("is-active"));
            byId[e.target.id]?.classList.add("is-active");
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    document.querySelectorAll(".read-block[id]").forEach((b) => io.observe(b));
  }

  document.querySelectorAll("video[autoplay]").forEach((video) => {
    video.muted = true;
    video.playsInline = true;
    video.play().catch(() => {});
  });
});
