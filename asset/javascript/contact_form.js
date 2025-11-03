document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS
    emailjs.init('7no2arGRT1xh2-CU0');
    
    // DOM Elements
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) {
        console.error('Contact form not found');
        return;
    }

    const formElements = {
        name: contactForm.querySelector('#name'),
        email: contactForm.querySelector('#email'),
        subject: contactForm.querySelector('#subject'),
        message: contactForm.querySelector('#message'),
        submitButton: contactForm.querySelector('button[type="submit"]'),
        status: document.getElementById('formStatus')
    };

    // Constants
    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const SERVICE_ID = 'service_3zb2543';
    const TEMPLATE_ID = 'template_8pqnd37';

    // Utility Functions
    const showStatus = (message, isError = false) => {
        if (formElements.status) {
            formElements.status.textContent = message;
            formElements.status.className = `form-status ${isError ? 'error' : 'success'}`;
            formElements.status.style.display = 'block';
            
            // Auto-hide success messages after 5 seconds
            if (!isError) {
                setTimeout(() => {
                    formElements.status.style.display = 'none';
                }, 5000);
            }
        } else {
            alert(message); // Fallback if status element not found
        }
    };

    const setLoadingState = (isLoading) => {
        if (formElements.submitButton) {
            formElements.submitButton.disabled = isLoading;
            formElements.submitButton.innerHTML = isLoading 
                ? '<i class="fas fa-spinner fa-spin"></i> Sending...' 
                : 'Send Message';
        }
    };

    const validateForm = () => {
        const values = {
            name: formElements.name?.value.trim() || '',
            email: formElements.email?.value.trim() || '',
            subject: formElements.subject?.value.trim() || '',
            message: formElements.message?.value.trim() || ''
        };

        // Check for empty fields
        if (!values.name || !values.email || !values.subject || !values.message) {
            showStatus('Please fill in all required fields', true);
            return false;
        }

        // Validate email format
        if (!EMAIL_REGEX.test(values.email)) {
            formElements.email?.classList.add('error');
            showStatus('Please enter a valid email address', true);
            return false;
        }

        return true;
    };

    // Event Handlers
    const handleEmailBlur = () => {
        const email = formElements.email?.value.trim();
        if (email && !EMAIL_REGEX.test(email)) {
            formElements.email?.classList.add('error');
            showStatus('Please enter a valid email address', true);
        } else {
            formElements.email?.classList.remove('error');
            formElements.status.style.display = 'none';
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        
        // Validate form
        if (!validateForm()) return;

        // Prepare for submission
        setLoadingState(true);
        showStatus('Sending your message...');

        try {
            // Send form via EmailJS
            const response = await emailjs.sendForm(
                SERVICE_ID,
                TEMPLATE_ID,
                '#contactForm' // Using selector string instead of element
            );

            console.log('EmailJS response:', response);
            
            if (response.status === 200) {
                showStatus('Thank you! Your message has been sent successfully.');
                contactForm.reset();
            } else {
                throw new Error(`Server responded with status: ${response.status}`);
            }
        } catch (error) {
            console.error('Submission error:', error);
            showStatus(error.text || 'Failed to send message. Please try again later.', true);
        } finally {
            setLoadingState(false);
        }
    };

    // Event Listeners
    formElements.email?.addEventListener('blur', handleEmailBlur);
    contactForm.addEventListener('submit', handleFormSubmit);

    // Prevent form submission on Enter key in input fields
    ['name', 'email', 'subject'].forEach(field => {
        formElements[field]?.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') e.preventDefault();
        });
    });
});