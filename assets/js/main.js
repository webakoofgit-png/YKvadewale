// YK Vadewale - Main JavaScript File
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initScrollEffects();
    initAnimations();
    initCarousel();
    initLightbox();
    initForms();
    initCountUp();
    initLazyLoading();
});

// Navigation Functions
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navOverlay = document.querySelector('.nav-overlay');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.querySelector('.header');

    // Mobile menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', toggleMobileMenu);
        navOverlay?.addEventListener('click', closeMobileMenu);
        
        // Close menu when clicking nav links
        navLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
    }

    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }
    });

    // Active nav link highlighting
    highlightActiveNavLink();
    window.addEventListener('scroll', highlightActiveNavLink);

    function toggleMobileMenu() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        navOverlay?.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    }

    function closeMobileMenu() {
        hamburger?.classList.remove('active');
        navMenu?.classList.remove('active');
        navOverlay?.classList.remove('active');
        document.body.style.overflow = '';
    }

    function highlightActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                navLink?.classList.add('active');
            }
        });
    }
}

// Scroll Effects
function initScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Trigger count-up animation for stats
                if (entry.target.classList.contains('stats')) {
                    animateCountUp();
                }
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });

    // Parallax effect for hero background
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroBg = document.querySelector('.hero-bg');
        if (heroBg) {
            heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

// Animation Functions
function initAnimations() {
    // Hover effects for cards
    const cards = document.querySelectorAll('.menu-item, .stat-item, .card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Floating animation for cartoon stickers
    createFloatingStickers();
}

function createFloatingStickers() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    // const stickers = ['🥪', '🌶️', '🧅'];
    
    stickers.forEach((emoji, index) => {
        const sticker = document.createElement('div');
        sticker.className = 'cartoon-sticker';
        sticker.textContent = emoji;
        sticker.style.animationDelay = `${index}s`;
        hero.appendChild(sticker);
    });
}

// Carousel Functions
function initCarousel() {
    const carousels = document.querySelectorAll('.carousel');
    
    carousels.forEach(carousel => {
        const slides = carousel.querySelectorAll('.carousel-slide');
        const prevBtn = carousel.querySelector('.carousel-prev');
        const nextBtn = carousel.querySelector('.carousel-next');
        const indicators = carousel.querySelector('.carousel-indicators');
        
        if (slides.length === 0) return;
        
        let currentSlide = 0;
        
        // Create indicators
        if (indicators) {
            slides.forEach((_, index) => {
                const indicator = document.createElement('button');
                indicator.className = 'carousel-indicator';
                indicator.setAttribute('aria-label', `Go to slide ${index + 1}`);
                if (index === 0) indicator.classList.add('active');
                indicator.addEventListener('click', () => goToSlide(index));
                indicators.appendChild(indicator);
            });
        }
        
        function goToSlide(index) {
            slides[currentSlide].classList.remove('active');
            indicators?.children[currentSlide]?.classList.remove('active');
            
            currentSlide = index;
            
            slides[currentSlide].classList.add('active');
            indicators?.children[currentSlide]?.classList.add('active');
            
            updateCarouselPosition();
        }
        
        function nextSlide() {
            const next = (currentSlide + 1) % slides.length;
            goToSlide(next);
        }
        
        function prevSlide() {
            const prev = (currentSlide - 1 + slides.length) % slides.length;
            goToSlide(prev);
        }
        
        function updateCarouselPosition() {
            const slideWidth = slides[0].offsetWidth;
            const offset = -currentSlide * slideWidth;
            carousel.querySelector('.carousel-track').style.transform = `translateX(${offset}px)`;
        }
        
        // Event listeners
        nextBtn?.addEventListener('click', nextSlide);
        prevBtn?.addEventListener('click', prevSlide);
        
        // Auto-play
        let autoplayInterval = setInterval(nextSlide, 5000);
        
        // Pause on hover
        carousel.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
        carousel.addEventListener('mouseleave', () => {
            autoplayInterval = setInterval(nextSlide, 5000);
        });
        
        // Touch/swipe support
        let startX = 0;
        let endX = 0;
        
        carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        carousel.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            const diff = startX - endX;
            
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
            }
        });
        
        // Initialize first slide
        slides[0].classList.add('active');
        updateCarouselPosition();
    });
}

// Lightbox Functions
function initLightbox() {
    const galleryImages = document.querySelectorAll('.gallery-image');
    
    galleryImages.forEach(image => {
        image.addEventListener('click', openLightbox);
    });
    
    function openLightbox(e) {
        e.preventDefault();
        
        const imageSrc = e.target.src || e.target.dataset.src;
        const imageAlt = e.target.alt || '';
        
        // Create lightbox
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <button class="lightbox-close" aria-label="Close lightbox">&times;</button>
                <img src="${imageSrc}" alt="${imageAlt}" class="lightbox-image">
                <div class="lightbox-caption">${imageAlt}</div>
            </div>
        `;
        
        document.body.appendChild(lightbox);
        document.body.style.overflow = 'hidden';
        
        // Close lightbox
        const closeBtn = lightbox.querySelector('.lightbox-close');
        closeBtn.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', handleLightboxKeydown);
        
        function closeLightbox() {
            document.body.removeChild(lightbox);
            document.body.style.overflow = '';
            document.removeEventListener('keydown', handleLightboxKeydown);
        }
        
        function handleLightboxKeydown(e) {
            if (e.key === 'Escape') {
                closeLightbox();
            }
        }
        
        // Animate in
        setTimeout(() => {
            lightbox.classList.add('active');
        }, 10);
    }
}

// Form Functions
function initForms() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', handleFormSubmit);
        
        // Real-time validation
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', () => validateField(input));
            input.addEventListener('input', () => clearFieldError(input));
        });
    });
    
    function handleFormSubmit(e) {
        e.preventDefault();
        
        const form = e.target;
        const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });
        
        if (isValid) {
            // Show success message
            showFormMessage(form, 'Thank you! Your message has been sent successfully.', 'success');
            form.reset();
        }
    }
    
    function validateField(field) {
        const value = field.value.trim();
        const fieldName = field.name || field.id;
        let errorMessage = '';
        
        // Required field validation
        if (field.hasAttribute('required') && !value) {
            errorMessage = `${fieldName} is required.`;
        }
        
        // Email validation
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                errorMessage = 'Please enter a valid email address.';
            }
        }
        
        // Phone validation
        if (field.type === 'tel' && value) {
            const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
            if (!phoneRegex.test(value)) {
                errorMessage = 'Please enter a valid phone number.';
            }
        }
        
        // Show/hide error
        if (errorMessage) {
            showFieldError(field, errorMessage);
            return false;
        } else {
            clearFieldError(field);
            return true;
        }
    }
    
    function showFieldError(field, message) {
        clearFieldError(field);
        
        field.classList.add('error');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'form-error';
        errorDiv.textContent = message;
        field.parentNode.appendChild(errorDiv);
    }
    
    function clearFieldError(field) {
        field.classList.remove('error');
        const existingError = field.parentNode.querySelector('.form-error');
        if (existingError) {
            existingError.remove();
        }
    }
    
    function showFormMessage(form, message, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message form-message-${type}`;
        messageDiv.textContent = message;
        
        form.insertBefore(messageDiv, form.firstChild);
        
        setTimeout(() => {
            messageDiv.remove();
        }, 5000);
    }
}

// Count Up Animation
function initCountUp() {
    window.animateCountUp = function() {
        const counters = document.querySelectorAll('.stat-number');
        
        counters.forEach(counter => {
            const target = parseInt(counter.dataset.count || counter.textContent.replace(/\D/g, ''));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.floor(current).toLocaleString() + '+';
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target.toLocaleString() + '+';
                }
            };
            
            updateCounter();
        });
    };
}

// Lazy Loading
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        img.classList.add('lazy');
        imageObserver.observe(img);
    });
}

// Menu Tab Functions
function initMenuTabs() {
    const tabButtons = document.querySelectorAll('.menu-tab');
    const tabContents = document.querySelectorAll('.menu-tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.dataset.tab;
            
            // Remove active class from all tabs and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            button.classList.add('active');
            document.getElementById(targetTab)?.classList.add('active');
        });
    });
}

// Masonry Grid for Gallery
function initMasonryGrid() {
    const grid = document.querySelector('.masonry-grid');
    if (!grid) return;
    
    function resizeGridItem(item) {
        const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
        const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
        const rowSpan = Math.ceil((item.querySelector('.masonry-content').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
        item.style.gridRowEnd = `span ${rowSpan}`;
    }
    
    function resizeAllGridItems() {
        const allItems = grid.querySelectorAll('.masonry-item');
        allItems.forEach(resizeGridItem);
    }
    
    // Resize on load and window resize
    window.addEventListener('load', resizeAllGridItems);
    window.addEventListener('resize', resizeAllGridItems);
    
    // Resize when images load
    const images = grid.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', () => {
            resizeGridItem(img.closest('.masonry-item'));
        });
    });
}

// Smooth Scroll for Anchor Links
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize additional components when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initMenuTabs();
    initMasonryGrid();
    initSmoothScroll();
});

// Utility Functions
function debounce(func, wait) {
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

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Performance optimizations
window.addEventListener('scroll', throttle(() => {
    // Throttled scroll events
}, 16));

window.addEventListener('resize', debounce(() => {
    // Debounced resize events
}, 250));
