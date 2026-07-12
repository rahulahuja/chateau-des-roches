/* ═══════════════════════════════════════════════════════════════
   CHÂTEAU DES ROCHES — Language Switcher
   Cross-browser: IE11+, Safari private mode safe localStorage
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  var btnEN = document.getElementById('langEN');
  var btnFR = document.getElementById('langFR');
  if (!btnEN || !btnFR) return;

  /* Safe localStorage — Safari private mode throws SecurityError */
  function getStoredLang() {
    try { return localStorage.getItem('cdr-lang') || 'en'; }
    catch (e) { return 'en'; }
  }
  function setStoredLang(lang) {
    try { localStorage.setItem('cdr-lang', lang); }
    catch (e) { /* silent fail in private mode */ }
  }

  function applyLang(lang) {
    /* Update html lang attribute */
    document.documentElement.lang = lang;

    /* Update button active states */
    btnEN.classList.toggle('active', lang === 'en');
    btnFR.classList.toggle('active', lang === 'fr');

    /* Swap all translatable elements */
    var els = document.querySelectorAll('[data-en][data-fr]');
    for (var i = 0; i < els.length; i++) {
      var text = els[i].getAttribute('data-' + lang);
      if (text !== null) {
        els[i].innerHTML = text;
      }
    }

    setStoredLang(lang);
  }

  btnEN.addEventListener('click', function () { applyLang('en'); });
  btnFR.addEventListener('click', function () { applyLang('fr'); });

  /* Apply on load */
  applyLang(getStoredLang());

})();
