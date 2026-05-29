// Form submission with SweetAlert2
const form = document.getElementById('registroForm');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Enviando...';

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      const data = await res.json();
      if (data.success === 'true' || data.success === true) {
        Swal.fire({
          icon: 'success',
          title: '¡Solicitud enviada!',
          text: 'Nos pondremos en contacto contigo pronto.',
          confirmButtonColor: '#c9a96e',
          confirmButtonText: 'Entendido'
        });
        form.reset();
      } else {
        throw new Error();
      }
    } catch {
      Swal.fire({
        icon: 'error',
        title: 'Error al enviar',
        text: 'Por favor intenta nuevamente o escríbenos directamente.',
        confirmButtonColor: '#c9a96e'
      });
    } finally {
      btn.disabled = false;
      btn.textContent = 'Enviar solicitud';
    }
  });
}

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  const pos = window.scrollY + 120;
  sections.forEach(sec => {
    if (pos >= sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight) {
      navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${sec.id}`);
      });
    }
  });
}, { passive: true });