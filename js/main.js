/* ═══════════════════════════════════════════════════════════════
   CHÂTEAU DES ROCHES — Main JavaScript
   Cross-browser: IE11+, Safari, Firefox, Chrome, mobile
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── Detect touch device ──────────────────────────────────── */
  var isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

  /* ── Custom Cursor (desktop only) ────────────────────────── */
  var cursor     = document.getElementById('cursor');
  var cursorRing = document.getElementById('cursorRing');

  if (cursor && cursorRing && !isTouch) {
    var mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

    document.addEventListener('mousemove', function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = mouseX + 'px';
      cursor.style.top  = mouseY + 'px';
    });

    function animateRing() {
      ringX += (mouseX - ringX) * 0.11;
      ringY += (mouseY - ringY) * 0.11;
      cursorRing.style.left = ringX + 'px';
      cursorRing.style.top  = ringY + 'px';
      requestAnimationFrame(animateRing);
    }
    animateRing();

    var interactives = document.querySelectorAll('a, button, .terroir-card, .note-card, .cuvee-bottle img');
    for (var i = 0; i < interactives.length; i++) {
      (function(el) {
        el.addEventListener('mouseenter', function () {
          cursor.classList.add('hover');
          cursorRing.classList.add('hover');
        });
        el.addEventListener('mouseleave', function () {
          cursor.classList.remove('hover');
          cursorRing.classList.remove('hover');
        });
      })(interactives[i]);
    }
  }

  /* ── Sticky Navigation ──────────────────────────────────── */
  var nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 80) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  /* ── Mobile Navigation Toggle ───────────────────────────── */
  var navToggle = document.getElementById('navToggle');
  var navLinks  = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      var spans = navToggle.querySelectorAll('span');
      if (isOpen) {
        spans[0].style.transform = 'rotate(45deg) translate(4px, 4px)';
        spans[1].style.opacity   = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(4px, -4px)';
        document.body.style.overflow = 'hidden'; // prevent scroll behind menu
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity   = '';
        spans[2].style.transform = '';
        document.body.style.overflow = '';
      }
    });

    var navLinkItems = navLinks.querySelectorAll('a');
    for (var j = 0; j < navLinkItems.length; j++) {
      navLinkItems[j].addEventListener('click', function () {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        var spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity   = '';
        spans[2].style.transform = '';
        document.body.style.overflow = '';
      });
    }
  }

  /* ── Smooth Scroll (JS fallback for Safari < 15.4) ─────── */
  function smoothScrollTo(targetY) {
    var startY    = window.scrollY || window.pageYOffset;
    var distance  = targetY - startY;
    var duration  = 800;
    var startTime = null;

    function ease(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }
    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var elapsed  = timestamp - startTime;
      var progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, startY + distance * ease(progress));
      if (elapsed < duration) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  var anchors = document.querySelectorAll('a[href^="#"]');
  for (var k = 0; k < anchors.length; k++) {
    anchors[k].addEventListener('click', function (e) {
      var href   = this.getAttribute('href');
      var target = href === '#' ? document.body : document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      var navHeight = nav ? nav.offsetHeight : 0;
      var targetTop = target.getBoundingClientRect().top + (window.scrollY || window.pageYOffset) - navHeight - 20;
      smoothScrollTo(targetTop);
    });
  }

  /* ── Scroll Reveal ──────────────────────────────────────── */
  var revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    for (var m = 0; m < revealElements.length; m++) {
      observer.observe(revealElements[m]);
    }
  } else {
    /* Fallback for IE11 / very old browsers — show everything immediately */
    for (var n = 0; n < revealElements.length; n++) {
      revealElements[n].classList.add('visible');
    }
  }

  /* ── Parallax on hero bottle (desktop only) ─────────────── */
  var heroBottle = document.querySelector('.hero-bottle');
  if (heroBottle && !isTouch && window.innerWidth > 768) {
    window.addEventListener('scroll', function () {
      var scrolled = window.scrollY || window.pageYOffset;
      if (scrolled < window.innerHeight) {
        heroBottle.style.transform = 'translateY(' + (scrolled * 0.08) + 'px)';
      }
    }, { passive: true });
  }

})();
