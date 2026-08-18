/**
 * Laboratory Information and Diagnostic Management Platform
 * JavaScript Functionality (Vanilla JS)
 */

document.addEventListener('DOMContentLoaded', () => {

    /* --------------------------------------------------------------------------
       1. Dynamic Year Update in Footer
       -------------------------------------------------------------------------- */
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    /* --------------------------------------------------------------------------
       2. Mobile Navigation Menu Toggle
       -------------------------------------------------------------------------- */
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile nav when clicking any link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    /* --------------------------------------------------------------------------
       3. Active Navigation Highlight on Scroll
       -------------------------------------------------------------------------- */
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            const navLink = document.querySelector(`.nav-list a[href*='${sectionId}']`);

            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    });

    /* --------------------------------------------------------------------------
       4. Booking Modal & Interactive Test Selection
       -------------------------------------------------------------------------- */
    const bookingModal = document.getElementById('bookingModal');
    const heroBookBtn = document.getElementById('heroBookBtn');
    const modalClose = document.getElementById('modalClose');
    const bookingForm = document.getElementById('bookingForm');
    const selectService = document.getElementById('selectService');
    const bookServiceButtons = document.querySelectorAll('.book-service-btn');

    // Open Modal Function
    const openModal = (serviceName = '') => {
        if (bookingModal) {
            bookingModal.classList.add('active');
            if (serviceName && selectService) {
                selectService.value = serviceName;
            }
        }
    };

    // Close Modal Function
    const closeModal = () => {
        if (bookingModal) {
            bookingModal.classList.remove('active');
        }
    };

    // Event Listener for Hero "Book a Test" Button
    if (heroBookBtn) {
        heroBookBtn.addEventListener('click', () => {
            alert("Opening Test Booking Portal. Please complete the appointment form.");
            openModal();
        });
    }

    // Event Listener for Individual "Book Test" Buttons on Service Cards
    bookServiceButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const serviceName = e.target.getAttribute('data-service');
            alert(`Selected Service: ${serviceName}. Opening booking form.`);
            openModal(serviceName);
        });
    });

    // Close Modal on Close Button click or Background Click
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    if (bookingModal) {
        bookingModal.addEventListener('click', (e) => {
            if (e.target === bookingModal) {
                closeModal();
            }
        });
    }

    // Booking Form Submission Handler
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const patientName = document.getElementById('patientName').value;
            const service = selectService.value;
            const date = document.getElementById('preferredDate').value;

            alert(`Success! Test booking confirmed for ${patientName}.\nTest: ${service}\nDate: ${date}\n\nThank you for choosing LabMedix Platform!`);
            
            bookingForm.reset();
            closeModal();
        });
    }

    /* --------------------------------------------------------------------------
       5. View Services Button Interaction
       -------------------------------------------------------------------------- */
    const heroServicesBtn = document.getElementById('heroServicesBtn');
    if (heroServicesBtn) {
        heroServicesBtn.addEventListener('click', () => {
            alert("Navigating to Laboratory Diagnostic Services...");
            const servicesSection = document.getElementById('services');
            if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    /* --------------------------------------------------------------------------
       6. Contact Form Submission Interaction
       -------------------------------------------------------------------------- */
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('contactName').value;
            alert(`Thank you, ${name}! Your inquiry has been sent to our laboratory team. We will get back to you shortly.`);
            contactForm.reset();
        });
    }
});
