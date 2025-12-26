// Initialize tooltips once DOM is ready
document.addEventListener('DOMContentLoaded', function onDomReady() {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Animate skill bars on scroll
  const skillItems = document.querySelectorAll('.skill-item');
  if (skillItems.length > 0) {
    const skillsObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const skillProgress = entry.target.querySelector('.skill-progress');
          if (skillProgress) {
            const width = skillProgress.getAttribute('data-width');
            skillProgress.style.width = width || '0%';
          }
          entry.target.classList.add('animate');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    skillItems.forEach(item => skillsObserver.observe(item));
  }

  // Reveal animations for all sections
  const sections = document.querySelectorAll('section');
  if (sections.length > 0) {
    sections.forEach(sec => sec.classList.add('reveal')); // initial hidden state

    const revealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-in');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    sections.forEach(section => revealObserver.observe(section));
  }
});


