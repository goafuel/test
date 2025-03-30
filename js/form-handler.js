// Order Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const orderForm = document.getElementById('orderForm');
    if (orderForm) {
        // Get or initialize order number from localStorage
        let orderNumber = localStorage.getItem('orderNumber') || 1000;

        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Increment order number and save
            orderNumber++;
            localStorage.setItem('orderNumber', orderNumber);
            
            // Get form values
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                service: document.getElementById('service').value,
                budget: document.getElementById('budget').value,
                deadline: document.getElementById('deadline').value || 'Not specified',
                details: document.getElementById('details').value
            };
            
            // Validate form
            if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.budget || !formData.details) {
                alert('Please fill in all required fields marked with *');
                return;
            }
            
            // Create WhatsApp message with order number
            const message = `*New Order #${orderNumber}*%0A%0A` +
                           `*Name:* ${formData.name}%0A` +
                           `*Email:* ${formData.email}%0A` +
                           `*Phone:* ${formData.phone}%0A` +
                           `*Service:* ${formData.service}%0A` +
                           `*Budget:* ${formData.budget}%0A` +
                           `*Deadline:* ${formData.deadline}%0A%0A` +
                           `*Project Details:*%0A${formData.details.replace(/\n/g, '%0A')}`;
            
            window.open(`https://wa.me/917722011476?text=${message}`, '_blank');
            
            // Show confirmation with order number
            alert(`Order #${orderNumber} submitted! We've opened WhatsApp for you to complete the process.`);
            
            this.reset();
        });
    }

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Validate form
            if (!formData.name || !formData.email || !formData.subject || !formData.message) {
                alert('Please fill in all required fields');
                return;
            }
            
            // Create email body
            const emailBody = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0A${formData.message}`;
            
            window.open(`mailto:contact@fuelerz.com?subject=${encodeURIComponent(formData.subject)}&body=${emailBody}`);
            
            // Show success message
            alert('Thank you for your message! We will get back to you soon.');
            
            this.reset();
        });
    }
});
