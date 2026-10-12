/* ============================================
   PORTFOLIO WEBSITE - MAIN JAVASCRIPT
   ============================================
   Functionality:
   1. Mobile hamburger menu toggle
   2. Close mobile menu on link click
   3. Smooth scrolling for navigation
   4. Active nav link on scroll
   5. Header scroll effect
   6. Contact form validation
   7. Back to top button
   8. Skill bar animation on scroll
   9. Scroll reveal animations
   10. Current year in footer
   ============================================ */

// ==================== DOM ELEMENTS ====================
const header = document.getElementById('header');
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');
const backToTop = document.getElementById('back-to-top');
const contactForm = document.getElementById('contact-form');
const skillBars = document.querySelectorAll('.skill-progress');
const currentYearSpan = document.getElementById('current-year');
const revealElements = document.querySelectorAll('.section-header, .skill-category, .project-card, .experience-card, .education-card, .contact-card, .contact-form');

// ==================== 1. MOBILE HAMBURGER MENU ====================
function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navbar.classList.toggle('active');

    // Update aria-expanded for accessibility
    const isExpanded = hamburger.classList.contains('active');
    hamburger.setAttribute('aria-expanded', isExpanded);

    // Prevent body scroll when menu is open
    if (isExpanded) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

hamburger.addEventListener('click', toggleMobileMenu);

// ==================== 2. CLOSE MOBILE MENU ON LINK CLICK ====================
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navbar.classList.contains('active')) {
            toggleMobileMenu();
        }
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (navbar.classList.contains('active') &&
        !navbar.contains(e.target) &&
        !hamburger.contains(e.target)) {
        toggleMobileMenu();
    }
});

// Close menu on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navbar.classList.contains('active')) {
        toggleMobileMenu();
    }
});

// ==================== 3. SMOOTH SCROLLING ====================
// Native smooth scrolling is enabled via CSS scroll-behavior: smooth
// This function is for additional programmatic scrolling if needed
function smoothScrollTo(targetId) {
    const target = document.querySelector(targetId);
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// ==================== 4. ACTIVE NAV LINK ON SCROLL ====================
function setActiveNavLink() {
    let current = '';
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// ==================== 5. HEADER SCROLL EFFECT ====================
function handleHeaderScroll() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// ==================== 6. BACK TO TOP BUTTON ====================
function handleBackToTop() {
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
}

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==================== 7. SKILL BAR ANIMATION ====================
function animateSkillBars() {
    skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = progress + '%';
    });
}

function resetSkillBars() {
    skillBars.forEach(bar => {
        bar.style.width = '0';
    });
}

// ==================== 8. CONTACT FORM VALIDATION ====================
const formFields = {
    name: {
        element: document.getElementById('name'),
        error: document.getElementById('name-error'),
        validate(value) {
            if (!value.trim()) {
                return 'Please enter your name';
            }
            if (value.trim().length < 2) {
                return 'Name must be at least 2 characters';
            }
            return '';
        }
    },
    email: {
        element: document.getElementById('email'),
        error: document.getElementById('email-error'),
        validate(value) {
            if (!value.trim()) {
                return 'Please enter your email address';
            }
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value.trim())) {
                return 'Please enter a valid email address';
            }
            return '';
        }
    },
    subject: {
        element: document.getElementById('subject'),
        error: document.getElementById('subject-error'),
        validate(value) {
            if (!value.trim()) {
                return 'Please enter a subject';
            }
            if (value.trim().length < 3) {
                return 'Subject must be at least 3 characters';
            }
            return '';
        }
    },
    message: {
        element: document.getElementById('message'),
        error: document.getElementById('message-error'),
        validate(value) {
            if (!value.trim()) {
                return 'Please enter your message';
            }
            if (value.trim().length < 10) {
                return 'Message must be at least 10 characters';
            }
            return '';
        }
    }
};

function validateField(fieldName) {
    const field = formFields[fieldName];
    const value = field.element.value;
    const errorMessage = field.validate(value);

    if (errorMessage) {
        field.element.classList.add('error');
        field.element.classList.remove('success');
        field.error.textContent = errorMessage;
        return false;
    } else {
        field.element.classList.remove('error');
        field.element.classList.add('success');
        field.error.textContent = '';
        return true;
    }
}

// Real-time validation on input
Object.keys(formFields).forEach(fieldName => {
    const field = formFields[fieldName].element;
    field.addEventListener('input', () => {
        validateField(fieldName);
    });

    // Validate on blur (when user leaves the field)
    field.addEventListener('blur', () => {
        validateField(fieldName);
    });
});

// Form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validate all fields
    let isValid = true;
    Object.keys(formFields).forEach(fieldName => {
        if (!validateField(fieldName)) {
            isValid = false;
        }
    });

    const formStatus = document.getElementById('form-status');

    if (isValid) {
        // Collect form data
        const formData = {
            name: formFields.name.element.value.trim(),
            email: formFields.email.element.value.trim(),
            subject: formFields.subject.element.value.trim(),
            message: formFields.message.element.value.trim()
        };

        // Log form data (in a real app, you'd send this to a server)
        console.log('Form submitted successfully:', formData);

        // Show success message
        formStatus.className = 'form-status success';
        formStatus.innerHTML = '<i class="fas fa-check-circle"></i> Thank you! Your message has been sent successfully. I will get back to you soon.';

        // Reset form
        contactForm.reset();

        // Remove success classes from inputs
        Object.keys(formFields).forEach(fieldName => {
            formFields[fieldName].element.classList.remove('success');
        });

        // Hide success message after 5 seconds
        setTimeout(() => {
            formStatus.className = 'form-status';
            formStatus.innerHTML = '';
        }, 5000);
    } else {
        // Show error message
        formStatus.className = 'form-status error';
        formStatus.innerHTML = '<i class="fas fa-exclamation-circle"></i> Please fix the errors above and try again.';

        // Scroll to first error
        const firstError = contactForm.querySelector('.error');
        if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            firstError.focus();
        }
    }
});

// ==================== 9. SCROLL REVEAL ANIMATIONS ====================
function handleScrollReveal() {
    const windowHeight = window.innerHeight;
    const revealPoint = 100;

    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
}

// ==================== 10. CURRENT YEAR ====================
function setCurrentYear() {
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
}

// ==================== INTERSECTION OBSERVER FOR SKILLS ====================
const skillsSection = document.getElementById('skills');
let skillsAnimated = false;

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !skillsAnimated) {
            animateSkillBars();
            skillsAnimated = true;
        }
    });
}, {
    threshold: 0.3
});

if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

// ==================== COMBINED SCROLL HANDLER ====================
function handleScroll() {
    setActiveNavLink();
    handleHeaderScroll();
    handleBackToTop();
    handleScrollReveal();
}

// Throttled scroll handler for better performance
let scrollTicking = false;
window.addEventListener('scroll', () => {
    if (!scrollTicking) {
        window.requestAnimationFrame(() => {
            handleScroll();
            scrollTicking = false;
        });
        scrollTicking = true;
    }
});

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    setCurrentYear();
    setActiveNavLink();
    handleHeaderScroll();
    handleBackToTop();
    handleScrollReveal();

    // Add reveal class to elements for animation
    revealElements.forEach(element => {
        element.classList.add('reveal');
    });

    // Trigger initial reveal check
    setTimeout(handleScrollReveal, 100);
});

// ==================== WINDOW RESIZE HANDLER ====================
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Close mobile menu if window is resized to desktop
        if (window.innerWidth >= 768 && navbar.classList.contains('active')) {
            toggleMobileMenu();
        }
    }, 250);
});

// ==================== CONSOLE MESSAGE ====================
console.log('%c👋 Welcome to My Portfolio!', 'color: #6c63ff; font-size: 16px; font-weight: bold;');
console.log('%cThanks for checking out the code. Feel free to reach out!', 'color: #6b7280; font-size: 12px;');
