
    // Importar EmailJS como un módulo cliente-side
    import emailjs from 'emailjs-com';
    
    
    // Ejecutar una vez que el DOM esté listo
    document.addEventListener('DOMContentLoaded', function() {
      const form = document.getElementById('contactForm');
      const successMessage = document.getElementById('successMessage');
      const errorMessage = document.getElementById('errorMessage');
      
      if (form) {
        form.addEventListener('submit', function(event) {
          event.preventDefault();
          
          // Ocultar mensajes anteriores
          successMessage.classList.add('hidden');
          errorMessage.classList.add('hidden');
          
          // Enviar el correo usando EmailJS
          emailjs.sendForm('service_qkn55gl', 'template_vuhqq32', form, 'XRaWhTbenZz7q7fIT')
            .then(function(response) {
              console.log('Correo enviado con éxito:', response.text);
              form.reset(); // Limpiar el formulario
              successMessage.classList.remove('hidden'); // Mostrar mensaje de éxito
            })
            .catch(function(error) {
              console.error('Error al enviar el correo:', error.text);
              errorMessage.classList.remove('hidden'); // Mostrar mensaje de error
            });
        });
      }
    });
  