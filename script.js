const obs = new IntersectionObserver(
  (e) => e.forEach(x => { if (x.isIntersecting) x.target.classList.add('visible'); }),
  { threshold: 0.12 }
);
document.querySelectorAll('.section,.project-card,.stat-card,.stack-category')
  .forEach(el => { el.classList.add('fade-in'); obs.observe(el); });

const secs = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let cur = '';
  secs.forEach(s => { if (window.scrollY >= s.offsetTop - 120) cur = s.id; });
  navLinks.forEach(a => { a.style.color = a.getAttribute('href') === '#'+cur ? 'var(--accent-2)' : ''; });
});
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
  });
});