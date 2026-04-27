// Reveal on scroll
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.section, .proj-item, .contact-card, .stack-row')
  .forEach(el => { el.classList.add('reveal'); observer.observe(el); });

// Active nav on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const onScroll = () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 160) current = s.id;
  });
  navLinks.forEach(a => {
    const active = a.getAttribute('href') === `#${current}`;
    a.style.color = active ? 'var(--green)' : '';
  });
};

window.addEventListener('scroll', onScroll, { passive: true });

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Nav shadow on scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.style.boxShadow = window.scrollY > 20
    ? '0 4px 30px rgba(0,0,0,0.5)'
    : '';
}, { passive: true });
