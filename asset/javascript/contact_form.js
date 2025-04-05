// contact_form.js - Complete solution

document.addEventListener('DOMContentLoaded', function() {
    console.log('Contact form script loaded');
    
    // Get references to the form and its elements
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) {
      console.error('Contact form not found in the DOM');
      return;
    }
    
    console.log('Contact form found:', contactForm);
    
    // Get references to form elements and status display
    const nameField = contactForm.querySelector('#name');
    const emailField = contactForm.querySelector('#email');
    const subjectField = contactForm.querySelector('#subject');
    const messageField = contactForm.querySelector('#message');
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const formStatus = document.getElementById('formStatus');
    
    // Log if any elements are missing
    if (!nameField || !emailField || !subjectField || !messageField || !submitButton) {
      console.error('One or more form elements not found:', {
        nameFieldFound: !!nameField,
        emailFieldFound: !!emailField,
        subjectFieldFound: !!subjectField,
        messageFieldFound: !!messageField,
        submitButtonFound: !!submitButton
      });
    }
    
    // Function to display status messages
    function showStatus(message, isError = false) {
      if (formStatus) {
        formStatus.textContent = message;
        formStatus.className = 'form-status ' + (isError ? 'error' : 'success');
        formStatus.style.display = 'block';
      } else {
        // Fallback if formStatus element not found
        alert(message);
      }
    }
    
    // Prevent default on all form elements (to ensure nothing else hijacks the submission)
    if (nameField) nameField.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') e.preventDefault();
    });
    
    if (emailField) emailField.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') e.preventDefault();
    });
    
    if (subjectField) subjectField.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') e.preventDefault();
    });
    
    // Add validation for email field
    if (emailField) {
      emailField.addEventListener('blur', function() {
        const email = this.value.trim();
        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          this.classList.add('error');
          if (formStatus) {
            formStatus.textContent = 'Please enter a valid email address';
            formStatus.className = 'form-status error';
            formStatus.style.display = 'block';
          }
        } else {
          this.classList.remove('error');
          if (formStatus) formStatus.style.display = 'none';
        }
      });
    }
    
    // Handle form submission
    contactForm.addEventListener('submit', async function(e) {
      // Always prevent default browser form submission
      e.preventDefault();
      console.log('Form submission intercepted');
      
      // Get values directly from elements using the form reference
      const name = nameField ? nameField.value.trim() : '';
      const email = emailField ? emailField.value.trim() : '';
      const subject = subjectField ? subjectField.value.trim() : '';
      const message = messageField ? messageField.value.trim() : '';
      
      // Log values for debugging
      console.log('Form values at submission time:', {
        name,
        email,
        subject,
        message
      });
      
      // Client-side validation
      if (!name || !email || !subject || !message) {
        console.error('Validation failed: Empty fields detected');
        showStatus('Please fill in all required fields', true);
        return false;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        console.error('Validation failed: Invalid email format');
        showStatus('Please enter a valid email address', true);
        return false;
      }
      
      // Disable button and show loading state
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.innerHTML = 'Sending...';
      }
      
      // Show sending status
      showStatus('Sending your message...');
      
      // Prepare form data
      const formData = {
        name,
        email,
        subject,
        message
      };
      
      console.log('Sending data to backend:', formData);
      
      try {
        const endpoint = 'https://portfoliobackend-ten-psi.vercel.app/api/contact';
        
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        
        console.log('Response received:', response.status);
        
        // Get response text
        const responseText = await response.text();
        console.log('Response text:', responseText);
        
        // Parse JSON response
        let result;
        try {
          result = responseText ? JSON.parse(responseText) : {};
        } catch (parseError) {
          console.error('Error parsing response:', parseError);
          result = { error: 'Failed to parse server response' };
        }
        
        // Handle success or error
        if (response.ok) {
          console.log('Form submitted successfully');
          showStatus('Thank you for your message! I will get back to you soon.');
          contactForm.reset();
        } else {
          const errorMessage = result.error || `Error ${response.status}: Something went wrong`;
          console.error('Server returned error:', errorMessage);
          showStatus(`Error: ${errorMessage}`, true);
        }
      } catch (error) {
        console.error('Network error:', error);
        showStatus('Failed to send message. Please check your connection and try again.', true);
      } finally {
        // Reset button state
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.innerHTML = 'Send Message';
        }
      }
      
      return false; // Always return false to prevent default form submission
    });
    
    // Additional sanity check - add a change event listener to see if values change
    if (nameField) nameField.addEventListener('input', function() {
      console.log('Name field changed, current value:', this.value);
    });
    
    if (emailField) emailField.addEventListener('input', function() {
      console.log('Email field changed, current value:', this.value);
    });
    
    // Add a click handler to the submit button as backup
    if (submitButton) {
      submitButton.addEventListener('click', function(e) {
        console.log('Submit button clicked');
        console.log('Current form values (from click handler):', {
          name: nameField ? nameField.value : 'field not found',
          email: emailField ? emailField.value : 'field not found',
          subject: subjectField ? subjectField.value : 'field not found',
          message: messageField ? messageField.value : 'field not found'
        });
        
        // Don't prevent default here - let the form's submit handler take care of it
      });
    }
  });