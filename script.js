document.addEventListener('DOMContentLoaded', () => {

  // ANIMACIONES REVEAL
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



  // MENU ACTIVO
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



  // FORMULARIO
  const form = document.getElementById('registroForm');

  form.addEventListener('submit', async function(e){

    e.preventDefault();

    const formData = new FormData(form);

    try{

      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if(response.ok){

        Swal.fire({
          icon: 'success',
          title: 'Registro completado',
          text: 'Tu solicitud fue enviada correctamente.',
          confirmButtonColor: '#dc2626'
        });

        form.reset();

      }else{

        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudo enviar la solicitud.'
        });

      }

    }catch(error){

      Swal.fire({
        icon: 'error',
        title: 'Error de conexión',
        text: 'Inténtalo nuevamente.'
      });

    }

  });

});