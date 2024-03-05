document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
});

emailjs.init({
    publicKey: 'NJvzI6D0p65KTXoSR',
  });

  emailjs.sendForm('contact_service', 'contact_form', this);
