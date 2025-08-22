// script.js - Modern CSS Animations with Intersection Observer

document.addEventListener('DOMContentLoaded', function() {
    // Enhanced Animation System with Fallbacks

    // Debug info for device compatibility
    console.log('🚀 Animations System Loaded');
    console.log('📱 Device Info:', {
        width: window.innerWidth,
        height: window.innerHeight,
        supportsIntersectionObserver: 'IntersectionObserver' in window,
        isTouchDevice: 'ontouchstart' in window,
        prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches
    });

    // Check if Intersection Observer is supported
    const supportsIntersectionObserver = 'IntersectionObserver' in window;

    if (supportsIntersectionObserver) {
        // Use Intersection Observer for modern browsers
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    // Unobserve after animation to improve performance
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe all animated elements
        const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .slide-in-up, .scale-in, .zoom-in');
        animatedElements.forEach(el => observer.observe(el));

        // Fallback for elements already in viewport
        setTimeout(() => {
            animatedElements.forEach(el => {
                if (!el.classList.contains('animate')) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top < window.innerHeight * 0.8 && rect.bottom >= 0) {
                        el.classList.add('animate');
                    }
                }
            });
        }, 300);

    } else {
        // Fallback for browsers without Intersection Observer (like some mobile apps)
        console.log('Intersection Observer not supported, using scroll fallback');

        function checkScrollAnimations() {
            const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .slide-in-up, .scale-in, .zoom-in');

            animatedElements.forEach(el => {
                if (!el.classList.contains('animate')) {
                    const rect = el.getBoundingClientRect();
                    const elementTop = rect.top;
                    const elementBottom = rect.bottom;
                    const isVisible = elementTop < window.innerHeight * 0.8 && elementBottom >= 0;

                    if (isVisible) {
                        el.classList.add('animate');
                    }
                }
            });
        }

        // Check on scroll with throttling
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(checkScrollAnimations, 16); // ~60fps
        });

        // Initial check
        setTimeout(checkScrollAnimations, 500);
    }

    // Force animations for large screens (desktop)
    if (window.innerWidth > 1200) {
        setTimeout(() => {
            const allAnimatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .slide-in-up, .scale-in, .zoom-in');
            allAnimatedElements.forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add('animate');
                }, index * 150); // Stagger animations
            });
        }, 1000); // Wait 1 second for page load
    }

    // Form validation and submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Basic validation
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const telefono = document.getElementById('telefono').value.trim();
            const messaggio = document.getElementById('messaggio').value.trim();

            if (!nome || !email || !telefono || !messaggio) {
                alert('Per favore, compila tutti i campi obbligatori.');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Per favore, inserisci un indirizzo email valido.');
                return;
            }

            // Phone validation (Italian format)
            const phoneRegex = /^[\+]?[0-9\s\-\(\)]{8,15}$/;
            if (!phoneRegex.test(telefono)) {
                alert('Per favore, inserisci un numero di telefono valido.');
                return;
            }

            // Simulate form submission
            alert('Grazie per il tuo messaggio! Ti contatteremo presto.');

            // Reset form
            contactForm.reset();
        });
    }

    // Scroll Progress Bar
    const scrollProgress = document.createElement('div');
    scrollProgress.className = 'scroll-progress';
    document.body.appendChild(scrollProgress);

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = scrollPercent + '%';
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const heroImage = document.querySelector('.hero-image img');
        if (heroImage) {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.3;
            heroImage.style.transform = `translateY(${rate}px) scale(${1 + scrolled * 0.0002})`;
        }
    });

    // Enhanced hover effects for service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.zIndex = '10';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.zIndex = '1';
        });
    });

    // Add loading="lazy" to images for better performance
    const images = document.querySelectorAll('img:not([loading])');
    images.forEach(img => {
        img.setAttribute('loading', 'lazy');
    });

    // Smooth scrolling for navigation (fallback)
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Floating animation for CTA buttons on hover
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.animation = 'float 1s ease-in-out infinite';
        });

        button.addEventListener('mouseleave', function() {
            this.style.animation = '';
        });
    });

    // Add CSS for floating animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
        }
    `;
    document.head.appendChild(style);

    // Performance optimization: Throttle scroll events
    let ticking = false;
    function updateScroll() {
        // Scroll-based animations and effects
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateScroll);
            ticking = true;
        }
    });

    // Add visual feedback for form inputs
    const formInputs = document.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
        });

        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    });

    // Hamburger Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');

            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });

        // Close menu when clicking on a link
        navMenu.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Reduce padding for mobile since header is now much smaller
    if (window.innerWidth <= 768) {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            if (section.id !== 'hero') {
                section.style.paddingTop = '4rem';
            }
        });
    }
});