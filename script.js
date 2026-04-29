/* ── Typed text effect ── */
const roles = ['Data Analyst', 'Web Developer', 'Graphic Designer', 'IT Specialist'];
let ri = 0, ci = 0, deleting = false;
const el = document.getElementById('typed-text');

function type() {
  const word = roles[ri];
  if (!deleting) {
    el.textContent = word.slice(0, ++ci);
    if (ci === word.length) { deleting = true; setTimeout(type, 1600); return; }
  } else {
    el.textContent = word.slice(0, --ci);
    if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; }
  }
  setTimeout(type, deleting ? 60 : 100);
}
type();

/* ── Scroll reveal ── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ── Nav active link ── */
const sections = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let cur = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 100) cur = s.id; });
  links.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + cur) a.classList.add('active');
  });
});

/* ── Form submit ── */
function handleForm(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.form-btn');
  btn.textContent = '✅ Message Sent!';
  btn.style.background = '#4a7c4e';
  setTimeout(() => { btn.textContent = 'Send Message ✉'; btn.style.background = ''; e.target.reset(); }, 3000);
}
