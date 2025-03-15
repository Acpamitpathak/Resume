// Handle tab navigation
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
      });
      document.getElementById(targetId).classList.add('active');
    });
  });
  
  // Show the first tab by default
  document.querySelector('.tab-content').classList.add('active');
  
  // Handle form submission
  const form = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  // Copy to Clipboard Functionality
const phoneNumber = document.querySelector('.contact-info p:nth-child(1)');
const emailId = document.querySelector('.contact-info p:nth-child(2)');

phoneNumber.addEventListener('click', () => {
  const text = phoneNumber.textContent.replace('+91 ', '');
  navigator.clipboard.writeText(text)
    .then(() => alert('Phone number copied to clipboard!'))
    .catch(() => alert('Failed to copy phone number.'));
});

emailId.addEventListener('click', () => {
  const text = emailId.textContent.replace('amit@example.com', '');
  navigator.clipboard.writeText(text)
    .then(() => alert('Email ID copied to clipboard!'))
    .catch(() => alert('Failed to copy email ID.'));
});
  
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(form);
  
    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        formStatus.textContent = 'Message sent successfully!';
        form.reset();
      } else {
        formStatus.textContent = 'Oops! There was a problem sending your message.';
      }
    })
    .catch(error => {
      formStatus.textContent = 'Oops! There was a problem sending your message.';
    });
  });