document.addEventListener("DOMContentLoaded", () => {
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

  const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
    reveals.forEach(reveal => {

        const top = reveal.getBoundingClientRect().top;
        const visible = 150;

        if(top < window.innerHeight - visible){
            reveal.classList.add('active');
        }

    });
});
});
