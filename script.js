// Global variables
let currentGalleryImage = 0;
const galleryImages = [
    {
        src: "https://images.unsplash.com/photo-1725783544345-24b39bad8628?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBiYXJ0ZW5kZXIlMjBldmVudCUyMHNlcnZpY2V8ZW58MXx8fHwxNzU2MTM1MDA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        caption: "Bartenders at corporate gala in San Francisco"
    },
    {
        src: "https://images.unsplash.com/photo-1745573674360-644c2edec427?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwZWxlZ2FudCUyMHNlcnZpY2V8ZW58MXx8fHwxNzU2MTM1MDA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        caption: "Elegant wedding reception service"
    },
    {
        src: "https://images.unsplash.com/photo-1633701945987-d21c145a07b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwZmVzdGl2YWwlMjBzdGFmZnxlbnwxfHx8fDE3NTYxMzUwMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        caption: "Outdoor festival in Oakland"
    },
    {
        src: "https://images.unsplash.com/photo-1712971404080-87271ce2e473?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMHNldHVwJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1NjEzNTAwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        caption: "Corporate event setup"
    },
    {
        src: "https://images.unsplash.com/photo-1707126186357-1690bc6866e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2FpdHN0YWZmJTIwcmVzdGF1cmFudCUyMHNlcnZpY2V8ZW58MXx8fHwxNzU2MTM1MDA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        caption: "Gallery opening in Napa"
    },
    {
        src: "https://images.unsplash.com/photo-1706392947751-74e157de81c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWNyYW1lbnRvJTIwY2FsaWZvcm5pYSUyMHNreWxpbmV8ZW58MXx8fHwxNzU2MTM1MDA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        caption: "Private party in Elk Grove"
    }
];

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    initializeHeader();
    initializeMobileMenu();
    initializeScrollToTop();
    initializeFAQ();
    initializeGallery();
    initializeContactForm();
    initializeScrollAnimations();
});

// Header functionality
function initializeHeader() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Mobile menu functionality
function initializeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('open');
        
        // Animate hamburger
        const hamburgers = mobileMenuBtn.querySelectorAll('.hamburger');
        if (mobileMenu.classList.contains('open')) {
            hamburgers[0].style.transform = 'rotate(45deg) translate(7px, 7px)';
            hamburgers[1].style.opacity = '0';
            hamburgers[2].style.transform = 'rotate(-45deg) translate(6px, -7px)';
        } else {
            hamburgers.forEach(bar => {
                bar.style.transform = '';
                bar.style.opacity = '';
            });
        }
    });
    
    // Close mobile menu when clicking on links
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('open');
            const hamburgers = mobileMenuBtn.querySelectorAll('.hamburger');
            hamburgers.forEach(bar => {
                bar.style.transform = '';
                bar.style.opacity = '';
            });
        });
    });
}

// Scroll to section function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Scroll to top functionality
function initializeScrollToTop() {
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// FAQ functionality
function initializeFAQ() {
    // FAQ is initialized when toggleFAQ is called
}

function toggleFAQ(index) {
    const faqItems = document.querySelectorAll('.faq-item');
    const faqItem = faqItems[index];
    const isOpen = faqItem.classList.contains('open');
    
    // Close all FAQ items
    faqItems.forEach(item => {
        item.classList.remove('open');
    });
    
    // Open clicked item if it wasn't already open
    if (!isOpen) {
        faqItem.classList.add('open');
    }
}

// Gallery functionality
function initializeGallery() {
    const galleryModal = document.getElementById('gallery-modal');
    
    // Close modal when clicking outside
    galleryModal.addEventListener('click', function(e) {
        if (e.target === galleryModal) {
            closeGalleryModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && galleryModal.classList.contains('open')) {
            closeGalleryModal();
        }
    });
}

function openGalleryModal(index) {
    currentGalleryImage = index;
    const modal = document.getElementById('gallery-modal');
    const modalImage = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption-text');
    
    modalImage.src = galleryImages[index].src;
    modalImage.alt = galleryImages[index].caption;
    modalCaption.textContent = galleryImages[index].caption;
    
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeGalleryModal() {
    const modal = document.getElementById('gallery-modal');
    modal.classList.remove('open');
    document.body.style.overflow = '';
}

// Contact form functionality
function initializeContactForm() {
    // Form initialization is done when handleFormSubmit is called
}

function handleFormSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = {};
    
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }
    
    // Simulate form submission
    console.log('Form submitted:', data);
    
    // Show success message
    alert('Thank you! We\'ll get back to you within 24 hours.');
    
    // Reset form
    event.target.reset();
}

// Scroll animations
function initializeScrollAnimations() {
    // Create intersection observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    // Add animation classes to elements
    const animateElements = document.querySelectorAll(`
        .about-content,
        .values-grid .value-item,
        .services-grid .service-item,
        .pricing-grid .pricing-card,
        .event-types-grid .event-type-item,
        .areas-content,
        .steps-grid .step-item,
        .gallery-grid .gallery-item,
        .faq-items .faq-item,
        .contact-content
    `);
    
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
    
    // Add CSS for animated state
    const style = document.createElement('style');
    style.textContent = `
        .animate {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

// Smooth scroll for navigation links
document.addEventListener('click', function(e) {
    const target = e.target;
    
    // Handle navigation links
    if (target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = target.getAttribute('href').substring(1);
        scrollToSection(targetId);
    }
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Add loaded state styles
    const style = document.createElement('style');
    style.textContent = `
        body:not(.loaded) {
            overflow: hidden;
        }
        
        body:not(.loaded)::before {
            content: '';
            position: fixed;
            inset: 0;
            background: #000000;
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        body:not(.loaded)::after {
            content: 'Loading...';
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #ffffff;
            font-size: 1.25rem;
            z-index: 10000;
        }
    `;
    document.head.appendChild(style);
});

// Add resize handler for mobile menu
window.addEventListener('resize', function() {
    if (window.innerWidth >= 1024) {
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        
        mobileMenu.classList.remove('open');
        
        const hamburgers = mobileMenuBtn.querySelectorAll('.hamburger');
        hamburgers.forEach(bar => {
            bar.style.transform = '';
            bar.style.opacity = '';
        });
    }
});

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
const throttledScroll = throttle(function() {
    // Handle scroll-dependent functionality here if needed
}, 16); // ~60fps

window.addEventListener('scroll', throttledScroll);

// Add error handling for images
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.style.display = 'none';
        console.warn('Image failed to load:', e.target.src);
    }
}, true);

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Handle Tab navigation for better accessibility
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});

// Add focus styles for keyboard navigation
const keyboardStyle = document.createElement('style');
keyboardStyle.textContent = `
    .keyboard-navigation *:focus {
        outline: 2px solid #ffffff !important;
        outline-offset: 2px !important;
    }
`;
document.head.appendChild(keyboardStyle);