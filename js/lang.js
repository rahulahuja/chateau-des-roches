/* ═══════════════════════════════════════════════════════════════
   CHÂTEAU DES ROCHES — Language Switcher (EN / FR)
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  var btnEN = document.getElementById('langEN');
  var btnFR = document.getElementById('langFR');
  var currentLang = localStorage.getItem('cdr-lang') || 'en';

  /* Apply a language to every element that carries data-en / data-fr */
  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('cdr-lang', lang);

    /* Update html lang attribute */
    document.documentElement.lang = lang;

    /* Update flag button active states */
    btnEN.classList.toggle('active', lang === 'en');
    btnFR.classList.toggle('active', lang === 'fr');

    /* Swap all translatable text nodes */
    var els = document.querySelectorAll('[data-en][data-fr]');
    els.forEach(function (el) {
      var text = el.getAttribute('data-' + lang);
      if (text) {
        /* Allow simple inline HTML like <em> in the translation strings */
        el.innerHTML = text;
      }
    });
  }

  /* Button click handlers */
  btnEN.addEventListener('click', function () { applyLang('en'); });
  btnFR.addEventListener('click', function () { applyLang('fr'); });

  /* Apply saved or default language on page load */
  applyLang(currentLang);

})();
