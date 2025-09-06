// ADHD-Friendly JavaScript - Simple, Clear, Accessible

class EmajonApp {
    constructor() {
        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupModal();
        this.setupWaitlistForm();
        this.setupSmoothScrolling();
        this.setupAccessibility();
        this.trackInteractions();
    }

    // Navigation functionality
    setupNavigation() {
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navMenu = document.getElementById('navMenu');
        const navLinks = document.querySelectorAll('.nav-link');

        // Mobile menu toggle
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                mobileMenuBtn.classList.toggle('active');
                
                // Update ARIA attributes for accessibility
                const isOpen = navMenu.classList.contains('active');
                mobileMenuBtn.setAttribute('aria-expanded', isOpen);
            });
        }

        // Close mobile menu when clicking nav links
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            });
        });

        // Update active nav link based on scroll position
        this.updateActiveNavLink();
        window.addEventListener('scroll', () => this.updateActiveNavLink());

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav') && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }

    updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && 
                window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    // Modal functionality
    setupModal() {
        const modal = document.getElementById('waitlistModal');
        const overlay = document.getElementById('overlay');
        const joinWaitlistBtn = document.getElementById('joinWaitlist');
        const closeModalBtn = document.getElementById('closeModal');

        // Open modal
        if (joinWaitlistBtn) {
            joinWaitlistBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.openModal();
            });
        }

        // Close modal
        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', () => {
                this.closeModal();
            });
        }

        // Close modal when clicking overlay
        if (overlay) {
            overlay.addEventListener('click', () => {
                this.closeModal();
            });
        }

        // Close modal on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                this.closeModal();
            }
        });
    }

    openModal() {
        const modal = document.getElementById('waitlistModal');
        const overlay = document.getElementById('overlay');
        const firstInput = modal.querySelector('input[type="email"]');
        
        modal.classList.add('active');
        overlay.classList.add('active');
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
        
        // Focus management for accessibility
        if (firstInput) {
            setTimeout(() => firstInput.focus(), 100);
        }
        
        // Trap focus within modal
        this.trapFocus(modal);
    }

    closeModal() {
        const modal = document.getElementById('waitlistModal');
        const overlay = document.getElementById('overlay');
        
        modal.classList.remove('active');
        overlay.classList.remove('active');
        
        // Restore body scroll
        document.body.style.overflow = '';
        
        // Return focus to trigger button
        const joinWaitlistBtn = document.getElementById('joinWaitlist');
        if (joinWaitlistBtn) {
            joinWaitlistBtn.focus();
        }
    }

    // Focus trap for modal accessibility
    trapFocus(element) {
        const focusableElements = element.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        element.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstElement) {
                        lastElement.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastElement) {
                        firstElement.focus();
                        e.preventDefault();
                    }
                }
            }
        });
    }

    // Waitlist form functionality
    setupWaitlistForm() {
        const form = document.getElementById('waitlistForm');
        
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleWaitlistSubmission();
            });
        }
    }

    async handleWaitlistSubmission() {
        const form = document.getElementById('waitlistForm');
        const submitBtn = form.querySelector('button[type="submit"]');
        const email = document.getElementById('email').value;
        const interests = document.getElementById('interests').value;
        const hasADHD = document.getElementById('adhdCheckbox').checked;
        
        // Show loading state
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Joining...';
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;

        try {
            // Simulate API call (replace with actual endpoint)
            await this.simulateAPICall({
                email,
                interests,
                hasADHD,
                timestamp: new Date().toISOString()
            });

            // Success feedback
            this.showSuccessMessage();
            form.reset();
            
            // Close modal after success
            setTimeout(() => {
                this.closeModal();
            }, 2000);

        } catch (error) {
            this.showErrorMessage('Something went wrong. Please try again.');
        } finally {
            // Reset button state
            submitBtn.textContent = originalText;
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        }
    }

    // Simulate API call for waitlist
    simulateAPICall(data) {
        return new Promise((resolve, reject) => {
            // Store in localStorage for now (replace with actual API)
            const waitlistData = JSON.parse(localStorage.getItem('emajon-waitlist') || '[]');
            waitlistData.push(data);
            localStorage.setItem('emajon-waitlist', JSON.stringify(waitlistData));
            
            setTimeout(() => {
                if (Math.random() > 0.1) { // 90% success rate
                    resolve({ success: true });
                } else {
                    reject(new Error('Network error'));
                }
            }, 1500);
        });
    }

    showSuccessMessage() {
        const form = document.getElementById('waitlistForm');
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.innerHTML = `
            <div style="text-align: center; padding: 20px; background: #d1fae5; color: #065f46; border-radius: 8px; margin-top: 20px;">
                <strong>🎉 You're on the list!</strong><br>
                We'll be in touch soon with updates.
            </div>
        `;
        
        form.appendChild(successDiv);
        
        // Remove success message after a delay
        setTimeout(() => {
            successDiv.remove();
        }, 5000);
    }

    showErrorMessage(message) {
        const form = document.getElementById('waitlistForm');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.innerHTML = `
            <div style="text-align: center; padding: 20px; background: #fee2e2; color: #991b1b; border-radius: 8px; margin-top: 20px;">
                <strong>⚠️ ${message}</strong>
            </div>
        `;
        
        form.appendChild(errorDiv);
        
        // Remove error message after a delay
        setTimeout(() => {
            errorDiv.remove();
        }, 5000);
    }

    // Smooth scrolling for navigation links
    setupSmoothScrolling() {
        const navLinks = document.querySelectorAll('a[href^="#"]');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href === '#') return;
                
                e.preventDefault();
                
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Enhanced accessibility features
    setupAccessibility() {
        // Add keyboard navigation for cards
        const cards = document.querySelectorAll('.about-card, .tool-card, .contact-card');
        
        cards.forEach(card => {
            // Make cards keyboard focusable
            if (!card.getAttribute('tabindex')) {
                card.setAttribute('tabindex', '0');
            }
            
            // Add keyboard interaction
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    card.click();
                }
            });
        });

        // Announce page changes to screen readers
        this.announcePageChanges();
        
        // Reduce motion for users who prefer it
        this.respectMotionPreferences();
    }

    announcePageChanges() {
        // Create a live region for announcements
        const liveRegion = document.createElement('div');
        liveRegion.id = 'live-region';
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.style.position = 'absolute';
        liveRegion.style.left = '-9999px';
        liveRegion.style.width = '1px';
        liveRegion.style.height = '1px';
        liveRegion.style.overflow = 'hidden';
        
        document.body.appendChild(liveRegion);
        
        // Announce section changes
        window.addEventListener('scroll', this.debounce(() => {
            const currentSection = this.getCurrentSection();
            if (currentSection) {
                liveRegion.textContent = `Navigated to ${currentSection.replace('-', ' ')} section`;
            }
        }, 500));
    }

    getCurrentSection() {
        const sections = document.querySelectorAll('section[id]');
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && 
                window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        return currentSection;
    }

    respectMotionPreferences() {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        if (prefersReducedMotion) {
            // Disable smooth scrolling
            document.documentElement.style.scrollBehavior = 'auto';
            
            // Reduce animation durations
            document.querySelectorAll('*').forEach(el => {
                el.style.transitionDuration = '0.01ms';
                el.style.animationDuration = '0.01ms';
            });
        }
    }

    // Simple analytics tracking
    trackInteractions() {
        // Track button clicks
        const buttons = document.querySelectorAll('button, .btn');
        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                const buttonText = e.target.textContent.trim();
                this.trackEvent('button_click', { button: buttonText });
            });
        });

        // Track navigation
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const section = link.getAttribute('href').replace('#', '');
                this.trackEvent('navigation', { section });
            });
        });

        // Track time spent on page
        let startTime = Date.now();
        window.addEventListener('beforeunload', () => {
            const timeSpent = Math.round((Date.now() - startTime) / 1000);
            this.trackEvent('page_time', { seconds: timeSpent });
        });
    }

    trackEvent(eventName, data = {}) {
        // Simple client-side tracking (replace with actual analytics)
        const eventData = {
            event: eventName,
            timestamp: new Date().toISOString(),
            url: window.location.href,
            userAgent: navigator.userAgent,
            ...data
        };

        // Store locally for now (replace with actual analytics service)
        const events = JSON.parse(localStorage.getItem('emajon-events') || '[]');
        events.push(eventData);
        localStorage.setItem('emajon-events', JSON.stringify(events.slice(-100))); // Keep last 100 events

        console.log('Event tracked:', eventData);
    }

    // Utility function for debouncing
    debounce(func, wait) {
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
}

// Performance optimization: Load app after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the app
    window.emajonApp = new EmajonApp();
    
    // Add loading complete class for animations
    document.body.classList.add('loaded');
});

// Handle page visibility changes (helpful for ADHD users)
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('User switched away from tab');
    } else {
        console.log('User returned to tab');
        // Could implement gentle re-engagement features here
    }
});

// Error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
    // Could implement user-friendly error messages here
});

// Service Worker registration for future PWA capabilities
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment when you add a service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(error => console.log('SW registration failed'));
    });
}