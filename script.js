document.addEventListener('DOMContentLoaded', () => {
  const reveals = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.15
  });

  reveals.forEach((element) => revealObserver.observe(element));

  const links = document.querySelectorAll('.sidebar a');
  const sections = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach((section) => {
      const top = section.offsetTop;

      if (window.scrollY >= top - 300) {
        current = section.getAttribute('id');
      }
    });

    links.forEach((link) => {
      link.classList.remove('active');

      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});
