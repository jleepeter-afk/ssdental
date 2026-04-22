/* ===== NAVBAR SCROLL ===== */
const navbar = document.getElementById('navbar');
const isTransparentNav = document.body.classList.contains('transparent-nav');
const scrollThreshold = isTransparentNav ? 80 : 10;

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY > scrollThreshold;
  navbar.classList.toggle('scrolled', scrolled);
  document.body.classList.toggle('nav-scrolled', scrolled);
});

/* ===== SCROLL TO TOP (floating btn) ===== */
document.addEventListener('click', e => {
  if (e.target.closest('.float-btn-top')) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

/* ===== ACTIVE NAV LINK ===== */
const navLinks = document.querySelectorAll('.nav-menu a, .nav-mobile-links a');
const currentPage = location.pathname.split('/').pop() || 'index.html';
navLinks.forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

/* ===== MOBILE MENU ===== */
const hamburger = document.querySelector('.nav-hamburger');
const overlay = document.querySelector('.nav-mobile-overlay');
const panel = document.querySelector('.nav-mobile-panel');
const closeBtn = document.querySelector('.nav-mobile-close');

function openMenu() {
  overlay.classList.add('open');
  panel.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  overlay.classList.remove('open');
  panel.classList.remove('open');
  document.body.style.overflow = '';
}

if (hamburger) hamburger.addEventListener('click', openMenu);
if (overlay)   overlay.addEventListener('click', closeMenu);
if (closeBtn)  closeBtn.addEventListener('click', closeMenu);

document.querySelectorAll('.nav-mobile-links a').forEach(a => {
  a.addEventListener('click', closeMenu);
});

/* ===== FADE-IN ON SCROLL ===== */
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0, rootMargin: '0px 0px -40px 0px' }
);

fadeEls.forEach(el => observer.observe(el));
