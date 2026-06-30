// Scroll reveal for sections
document.addEventListener('DOMContentLoaded', () => {
  const revealTargets = document.querySelectorAll('.system-card, .stack-group, .log-entry, .metric');
  revealTargets.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealTargets.forEach(el => observer.observe(el));

  // Stagger metric reveal slightly
  document.querySelectorAll('.metric').forEach((el, i) => {
    el.style.transitionDelay = `${i * 80}ms`;
  });
});
