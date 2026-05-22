document.addEventListener("DOMContentLoaded", () => {

  // ── TABS ──────────────────────────────────────────────────
  const tabs = document.querySelectorAll(".tab-content");
  const navBtns = document.querySelectorAll(".nav-btn");
  const navBtnsMobile = document.querySelectorAll(".nav-btn-mobile");
  const footerBtns = document.querySelectorAll(".nav-btn-footer");
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  function switchTab(targetId) {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
      tab.classList.remove("tab-active-animation");
    });
    const targetTab = document.getElementById(targetId);
    if (targetTab) {
      targetTab.classList.add("active");
      void targetTab.offsetWidth;
      targetTab.classList.add("tab-active-animation");
    }
    navBtns.forEach((btn) => {
      if (btn.dataset.target === "inicio") return;
      if (btn.dataset.target === targetId) {
        btn.classList.add("text-brand-salmon");
        btn.classList.remove("text-white");
      } else {
        btn.classList.remove("text-brand-salmon");
        btn.classList.add("text-white");
      }
    });
    navBtnsMobile.forEach((btn) => {
      if (btn.dataset.target === targetId) {
        btn.classList.add("text-brand-salmon");
        btn.classList.remove("text-white");
      } else {
        btn.classList.remove("text-brand-salmon");
        btn.classList.add("text-white");
      }
    });
    mobileMenu.classList.add("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  navBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      switchTab(btn.dataset.target);
    });
  });
  navBtnsMobile.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      switchTab(btn.dataset.target);
    });
  });
  footerBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      switchTab(btn.dataset.target);
    });
  });

  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // ── SCROLL REVEAL ─────────────────────────────────────────
  const reveals = document.querySelectorAll('.reveal');
  window.addEventListener('scroll', () => {
    reveals.forEach(reveal => {
      const top = reveal.getBoundingClientRect().top;
      if (top < window.innerHeight - 150) {
        reveal.classList.add('active');
      }
    });
  });

  // ── DROPDOWN ENLACES ──────────────────────────────────────
  const btnDesktop  = document.getElementById('btn-enlaces-desktop');
  const menuDesktop = document.getElementById('menu-enlaces-desktop');
  const btnMobile   = document.getElementById('btn-enlaces-mobile');
  const menuMobile  = document.getElementById('menu-enlaces-mobile');
  const arrowMobile = document.getElementById('arrow-enlaces-mobile');

  if (btnDesktop && menuDesktop) {
    btnDesktop.addEventListener('click', function (e) {
      e.stopPropagation();
      menuDesktop.classList.toggle('hidden');
    });
  }

  if (btnMobile && menuMobile) {
    btnMobile.addEventListener('click', function (e) {
      e.stopPropagation();
      var abierto = menuMobile.classList.toggle('hidden');
      if (arrowMobile) arrowMobile.style.transform = abierto ? '' : 'rotate(180deg)';
    });
  }

  document.addEventListener('click', function () {
    if (menuDesktop) menuDesktop.classList.add('hidden');
    if (menuMobile)  menuMobile.classList.add('hidden');
    if (arrowMobile) arrowMobile.style.transform = '';
  });

});