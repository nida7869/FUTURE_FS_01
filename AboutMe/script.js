let currentLanguage = 'en';
        
// English and Arabic typewriter texts
const typewriterTexts = {
    en: [
        'Creating Beautiful Digital Experiences ✨',
        'Passionate About Clean Code 💻',
        'SEO & Performance Enthusiast 🚀',
        'Building Production-Ready Websites 🚀'  // ✅ FIXED
    ],
    ar: [
        'إنشاء تجارب رقمية جميلة ✨',
        'شغوفة بالكود النظيف 💻',
        'متحمسة لتحسين محركات البحث والأداء 🚀',
        'بناء مواقع جاهزة للإنتاج 🚀'  // ✅ FIXED
    ]
};

// Language toggle function
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    const body = document.body;
    const langText = document.getElementById('langText');
    
    if (currentLanguage === 'ar') {
        body.classList.add('arabic');
        langText.textContent = 'English';
    } else {
        body.classList.remove('arabic');
        langText.textContent = 'العربية';
    }
    
    // Update all text content
    updateTextContent();
    
    // Restart typewriter with new language without affecting the other
    restartTypewriter();
}

// Update text content based on current language
function updateTextContent() {
    const elements = document.querySelectorAll('[data-en][data-ar]');
    elements.forEach(element => {
        const text = currentLanguage === 'en' ? element.getAttribute('data-en') : element.getAttribute('data-ar');
        element.textContent = text;
    });
}

// Enhanced Cursive Typewriter Effect with language support
const typewriter = document.getElementById('typewriter');
let typewriterState = {
    en: { index: 0, charIndex: 0, isDeleting: false },
    ar: { index: 0, charIndex: 0, isDeleting: false }
};
let typewriterTimeout;

function typeWriterEffect() {
    const currentTexts = typewriterTexts[currentLanguage];
    const state = typewriterState[currentLanguage];
    const currentText = currentTexts[state.index];
    
    if (state.isDeleting) {
        typewriter.textContent = currentText.substring(0, state.charIndex - 1);
        state.charIndex--;
    } else {
        typewriter.textContent = currentText.substring(0, state.charIndex + 1);
        state.charIndex++;
    }

    let typeSpeed;
    if (currentLanguage === 'ar') {
        typeSpeed = state.isDeleting ? 90 : 250;
    } else {
        typeSpeed = state.isDeleting ? 80 : 150;
    }

    if (!state.isDeleting && state.charIndex === currentText.length) {
        typeSpeed = currentLanguage === 'ar' ? 3500 : 2000;
        state.isDeleting = true;
    } else if (state.isDeleting && state.charIndex === 0) {
        state.isDeleting = false;
        state.index = (state.index + 1) % currentTexts.length;
        typeSpeed = currentLanguage === 'ar' ? 1000 : 500;
    }

    typewriterTimeout = setTimeout(typeWriterEffect, typeSpeed);
}

function restartTypewriter() {
    if (typewriterTimeout) {
        clearTimeout(typewriterTimeout);
    }
    typeWriterEffect();
}

// Create Beautiful Sparkles
function createSparkles() {
    const sparklesContainer = document.getElementById('sparkles');
    
    for (let i = 0; i < 25; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 8 + 's';
        sparkle.style.animationDuration = (Math.random() * 4 + 6) + 's';
        
        // Random sparkle sizes
        const size = Math.random() * 3 + 2;
        sparkle.style.width = size + 'px';
        sparkle.style.height = size + 'px';
        
        // Vary sparkle colors slightly
        const opacity = Math.random() * 0.4 + 0.6;
        sparkle.style.background = `rgba(255, 255, 255, ${opacity})`;
        
        sparklesContainer.appendChild(sparkle);
    }
}

// Enhanced 3D Background Shapes with Perfect Distribution
function create3DShapes() {
    const shapesContainer = document.getElementById('bgShapes');
    const shapes = [
        { size: 60, color: 'linear-gradient(135deg, #6366f1, #8b5cf6)' },
        { size: 40, color: 'linear-gradient(135deg, #ec4899, #8b5cf6)' },
        { size: 80, color: 'linear-gradient(135deg, #f59e0b, #ec4899)' },
        { size: 50, color: 'linear-gradient(135deg, #10b981, #6366f1)' }
    ];

    // Define specific positions to ensure even distribution
    const positions = [
        // Top row
        { x: 15, y: 10 }, { x: 40, y: 15 }, { x: 65, y: 8 }, { x: 88, y: 12 },
        // Second row  
        { x: 8, y: 35 }, { x: 30, y: 40 }, { x: 55, y: 32 }, { x: 82, y: 38 },
        // Third row
        { x: 12, y: 60 }, { x: 38, y: 65 }, { x: 62, y: 58 }, { x: 85, y: 63 },
        // Bottom row
        { x: 18, y: 85 }, { x: 45, y: 88 }, { x: 70, y: 82 }, { x: 90, y: 90 }
    ];
    
    for (let i = 0; i < 16; i++) {
        const shape = document.createElement('div');
        const shapeData = shapes[Math.floor(Math.random() * shapes.length)];
        const position = positions[i];
        
        shape.className = 'bg-shape';
        shape.style.width = shapeData.size + 'px';
        shape.style.height = shapeData.size + 'px';
        shape.style.background = shapeData.color;
        
        // Use predefined positions with slight randomness
        shape.style.left = (position.x + (Math.random() * 8 - 4)) + '%';
        shape.style.top = (position.y + (Math.random() * 8 - 4)) + '%';
        shape.style.animationDelay = Math.random() * 20 + 's';
        shape.style.animationDuration = (Math.random() * 15 + 20) + 's';
        
        shapesContainer.appendChild(shape);
    }
}

// Scroll Reveal Animation
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(section => {
        observer.observe(section);
    });
}

// Scroll to Top Button
function initScrollToTop() {
    const scrollTopBtn = document.getElementById('scrollTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Smooth scroll for navigation links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize all functions
document.addEventListener('DOMContentLoaded', () => {
    typeWriterEffect();
    create3DShapes();
    createSparkles();
    initScrollReveal();
    initScrollToTop();
    initSmoothScroll();
});