/* Digit-Algo — shared site script (no dependencies) */
(() => {
  const EMAIL = "info@digit-algo.com";
  const PHONE_IN = "+91 9495211633";
  const PHONE_AE = "+971 507184071";
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const icon = {
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1s-.5-.1-.7.1-.8 1-.9 1.2-.3.2-.6.1a8 8 0 0 1-2.4-1.5 9 9 0 0 1-1.6-2c-.2-.3 0-.5.1-.6l.4-.5.3-.5v-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6a1.1 1.1 0 0 0-.8.4 3.4 3.4 0 0 0-1 2.5 5.9 5.9 0 0 0 1.2 3.1 13.5 13.5 0 0 0 5.2 4.6c1.9.8 2.7.9 3.6.7a3.1 3.1 0 0 0 2-1.4 2.5 2.5 0 0 0 .2-1.4c-.1-.1-.3-.2-.6-.4zM12 21.8a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8zm8.4-18.2A11.8 11.8 0 0 0 1.8 17.9L.2 24l6.3-1.6A11.8 11.8 0 0 0 24 12.2a11.7 11.7 0 0 0-3.6-8.6z"/></svg>',
  };
  window.DA_ICON = icon;

  const page = document.body.dataset.page || "";
  const links = [
    ["index.html", "Home", "home"],
    ["solutions.html", "Solutions", "solutions"],
    ["index.html#process", "Process", "process"],
    ["careers.html", "Join Us", "careers"],
    ["contact.html", "Contact", "contact"],
  ];

  /* ---------- Header ---------- */
  const header = document.getElementById("site-header");
  if (header) {
    header.outerHTML = `
    <header class="nav" id="nav">
      <div class="container">
        <a class="logo" href="index.html" aria-label="Digit-Algo home">
          <span class="logo-mark">D/A</span><span>digit<b>-algo</b></span>
        </a>
        <nav class="nav-links" id="nav-links" aria-label="Main">
          ${links.map(([href, label, key]) => `<a href="${href}" class="${key === page ? "active" : ""}">${label}</a>`).join("")}
        </nav>
        <div class="nav-cta">
          <a class="nav-phone" href="tel:${PHONE_IN.replace(/\s/g, "")}">${PHONE_IN}</a>
          <a class="btn btn-sm" href="contact.html">Start a project ${icon.arrow}</a>
          <button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu" aria-expanded="false"><span></span><span></span><span></span></button>
        </div>
      </div>
    </header>`;
  }

  /* ---------- Footer ---------- */
  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.outerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <a class="logo" href="index.html"><span class="logo-mark">D/A</span><span>digit<b>-algo</b></span></a>
            <p style="margin-top:18px">We are a team of passionate people whose goal is to improve everyone's life through disruptive products. We build great products to solve your business problems.</p>
            <p>Our products are designed to scale for all size companies willing to optimize their performance.</p>
          </div>
          <div>
            <h4>Useful links</h4>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="index.html#offer">About us</a></li>
              <li><a href="solutions.html">Services</a></li>
              <li><a href="careers.html">Careers</a></li>
              <li><a href="contact.html">Contact us</a></li>
            </ul>
          </div>
          <div>
            <h4>Solutions</h4>
            <ul>
              <li><a href="retail.html">Retail Operations</a></li>
              <li><a href="logistics.html">Logistics Operations</a></li>
              <li><a href="trading.html">Automated Trading</a></li>
              <li><a href="limoda.html">LimoDA</a></li>
            </ul>
          </div>
          <div>
            <h4>Connect with us</h4>
            <ul>
              <li><a href="mailto:${EMAIL}">${EMAIL}</a></li>
              <li><a href="tel:${PHONE_IN.replace(/\s/g, "")}">${PHONE_IN} (IN)</a></li>
              <li><a href="tel:${PHONE_AE.replace(/\s/g, "")}">${PHONE_AE} (UAE)</a></li>
            </ul>
            <div class="socials">
              <a href="mailto:${EMAIL}" aria-label="Email">${icon.mail}</a>
              <a href="https://wa.me/${PHONE_IN.replace(/\D/g, "")}" target="_blank" rel="noopener" aria-label="WhatsApp India">${icon.whatsapp}</a>
              <a href="tel:${PHONE_AE.replace(/\s/g, "")}" aria-label="Call UAE">${icon.phone}</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© <span id="year">2026</span> Digit-Algo. All rights reserved.</span>
          <span>// built to simplify &amp; automate</span>
        </div>
      </div>
    </footer>`;
    const y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  }

  /* ---------- Nav behaviour ---------- */
  const nav = document.getElementById("nav");
  const toggle = document.getElementById("nav-toggle");
  const onScroll = () => nav && nav.classList.toggle("scrolled", window.scrollY > 20);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  if (toggle) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });
    document.querySelectorAll("#nav-links a").forEach((a) =>
      a.addEventListener("click", () => nav.classList.remove("open"))
    );
  }

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && !reduce) {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in"));
  }

  /* ---------- Card glow follows cursor ---------- */
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    });
  });

  /* ---------- Stars in CTA bands ---------- */
  document.querySelectorAll(".cta-band .stars").forEach((box) => {
    for (let i = 0; i < 40; i++) {
      const s = document.createElement("i");
      s.style.left = Math.random() * 100 + "%";
      s.style.top = Math.random() * 100 + "%";
      s.style.animationDelay = Math.random() * 3 + "s";
      box.appendChild(s);
    }
  });

  /* ---------- Hero particle network ---------- */
  const canvas = document.getElementById("net");
  if (canvas && !reduce) {
    const ctx = canvas.getContext("2d");
    let w, h, pts, mouse = { x: -9999, y: -9999 };
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const init = () => {
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.min(110, Math.floor((w * h) / 14000));
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.6,
      }));
    };
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        const dxm = p.x - mouse.x, dym = p.y - mouse.y, dm = Math.hypot(dxm, dym);
        if (dm < 140) { p.x += dxm / dm; p.y += dym / dm; }
      }
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 130) {
            ctx.strokeStyle = `rgba(139,92,246,${(1 - d / 130) * 0.35})`;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
        ctx.fillStyle = i % 5 === 0 ? "#3ddc97" : "#22d3ee";
        ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2); ctx.fill();
      }
      requestAnimationFrame(draw);
    };
    init(); draw();
    window.addEventListener("resize", init);
    canvas.parentElement.addEventListener("pointermove", (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
    });
    canvas.parentElement.addEventListener("pointerleave", () => { mouse.x = mouse.y = -9999; });
  }

  /* ---------- Typed terminal ---------- */
  const term = document.getElementById("term");
  if (term) {
    const lines = [
      '<span class="c"># mission: simplify your operations</span>',
      '<span class="k">$</span> digit-algo <span class="f">explore</span> --institution <span class="s">"your-business"</span>',
      '<span class="ok">✔</span> connected · operations mapped',
      '<span class="k">$</span> digit-algo <span class="f">analyse</span> --find <span class="s">complexity</span>',
      '<span class="ok">✔</span> 12 tools → <span class="s">1 platform</span>',
      '<span class="k">$</span> digit-algo <span class="f">build</span> --stack <span class="s">odoo+ai</span>',
      '<span class="ok">✔</span> retail · logistics · trading · limo',
      '<span class="k">$</span> digit-algo <span class="f">deploy</span> --copilot <span class="s">on</span>',
      '<span class="ok">🚀 launched.</span> long-term success: <span class="s">enabled</span>',
    ];
    if (reduce) {
      term.innerHTML = lines.join("\n");
    } else {
      let i = 0;
      const out = [];
      const next = () => {
        if (i >= lines.length) { term.innerHTML = out.join("\n") + ' <span class="cursor"></span>'; setTimeout(() => { out.length = 0; i = 0; next(); }, 4200); return; }
        out.push(lines[i++]);
        term.innerHTML = out.join("\n") + ' <span class="cursor"></span>';
        setTimeout(next, lines[i - 1].includes("$") ? 900 : 550);
      };
      setTimeout(next, 500);
    }
  }

  /* ---------- Contact form → mailto ---------- */
  const form = document.getElementById("contact-form");
  if (form) {
    const params = new URLSearchParams(location.search);
    const pre = params.get("solution");
    if (pre && form.solution) form.solution.value = pre;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const d = new FormData(form);
      const subject = `New enquiry: ${d.get("solution")} — ${d.get("name")}`;
      const body = [
        `Name: ${d.get("name")}`,
        `Email: ${d.get("email")}`,
        `Company: ${d.get("company") || "-"}`,
        `Interested in: ${d.get("solution")}`,
        "",
        d.get("message"),
      ].join("\n");
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }
})();
