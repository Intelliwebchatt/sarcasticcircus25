export const initContactForm = () => {
    const contactForm = document.getElementById('contact-form');
    
    // Guard clause to prevent errors if form doesn't exist
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        console.log('Form submission:', data);
        alert('Thanks for joining the circus! We\'ll be in touch soon.');
        contactForm.reset();
    });
};