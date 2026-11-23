// FullSolutions — interações leves (menu mobile, reveal, ano)
(function () {
  // marca que há JS (ativa o reveal; sem JS o conteúdo fica sempre visível)
  document.documentElement.classList.add('js');
  // menu mobile
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') links.classList.remove('open');
    });
  }
  // ano no rodapé
  document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
  // reveal on scroll
  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && els.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add('in'); });
  }

  // PWA — service worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js').catch(function () {});
    });
  }

  // PWA — botão "Baixe o app" (prompt de instalação)
  var deferredPrompt = null;
  var installBtns = document.querySelectorAll('[data-install-app]');
  var isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  function showInstall() { installBtns.forEach(function (b) { b.hidden = false; }); }
  function hideInstall() { installBtns.forEach(function (b) { b.hidden = true; }); }
  if (installBtns.length && !isStandalone) {
    window.addEventListener('beforeinstallprompt', function (e) {
      e.preventDefault();
      deferredPrompt = e;
      showInstall();
    });
    installBtns.forEach(function (b) {
      b.addEventListener('click', function (e) {
        e.preventDefault();
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        deferredPrompt.userChoice.finally(function () { deferredPrompt = null; hideInstall(); });
      });
    });
    window.addEventListener('appinstalled', function () { deferredPrompt = null; hideInstall(); });
  }
})();
