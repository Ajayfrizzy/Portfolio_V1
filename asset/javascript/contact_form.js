// contact_form.js or add to app.js

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const submitButton = contactForm.querySelector('button[type="submit"]');
  
    if (contactForm) {
      contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();
  
        // Disable button and show loading state
        submitButton.disabled = true;
        submitButton.innerHTML = 'Sending...';
  
        // Get form data
        const formData = {
          name: document.getElementById('name').value.trim(),
          email: document.getElementById('email').value.trim(),
          subject: document.getElementById('subject').value.trim(),
          message: document.getElementById('message').value.trim(),
        };
  
        try {
          // ✅ Replace with your actual Vercel deployment URL
          const endpoint = 'https://portfoliobackend-ten-psi.vercel.app/api/contact';
  
          const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
  
          // Handle response safely
          const text = await response.text();
          const result = text ? JSON.parse(text) : {};
  
          if (response.ok) {
            alert('✅ Thank you for your message! I will get back to you soon.');
            contactForm.reset();
          } else {
            alert(`❌ Error: ${result.error || 'Something went wrong. Please try again.'}`);
          }
        } catch (error) {
          console.error('Error submitting form:', error);
          alert('❌ Failed to send message. Please try again later.');
        } finally {
          // Reset button state
          submitButton.disabled = false;
          submitButton.innerHTML = 'Send Message';
        }
      });
    }
  });
  