// smooth scroll
document.querySelectorAll('nav a').forEach(a => {
  a.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// navbar shadow on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  if (window.scrollY > 10) {
    nav.style.boxShadow = "0 2px 10px rgba(0,0,0,0.06)";
  } else {
    nav.style.boxShadow = "none";
  }
});