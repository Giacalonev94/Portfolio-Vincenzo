// HAMBURGER MENU (mobile)
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


// SMOOTH SCROLLING PER I LINK DELLA NAVBAR
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });

    // Chiude il menu su mobile dopo il click
    navLinks.classList.remove('active');
  });
});


// EFFETTO GLOW QUANDO LE SEZIONI ENTRANO IN VISTA
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  observer.observe(section);
});


// ANIMAZIONE FUTURISTICA SULLE CARD DEI PROGETTI
const cards = document.querySelectorAll('.project-card');

cards.forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
  });
});
