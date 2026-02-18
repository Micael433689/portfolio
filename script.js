// ============================================
// PARALLAX SCROLL EFFECT
// ============================================
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const parallax = document.querySelector('.parallax-bg');
    parallax.style.transform = `translateY(${scrollY * 0.5}px)`;
});

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (entry.target.classList.contains('project-card')) {
                entry.target.style.animationPlayState = 'running';
            }
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
    observer.observe(el);
});

// ============================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ============================================
// CONTACT FORM SUBMISSION
// ============================================
const form = document.querySelector('.contact-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Show success message
        const button = form.querySelector('button');
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check" style="margin-right: 10px;"></i>Message Sent!';
        button.style.background = '#10b981';
        
        // Reset form after 3 seconds
        setTimeout(() => {
            form.reset();
            button.innerHTML = originalText;
            button.style.background = '';
        }, 3000);
    });
}

// ============================================
// PARALLAX EFFECT ON PROJECT IMAGES
// ============================================
window.addEventListener('scroll', () => {
    document.querySelectorAll('.project-image').forEach(img => {
        const rect = img.getBoundingClientRect();
        const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        img.style.transform = `translateY(${scrollPercent * 20}px)`;
    });
});

// ============================================
// 3D MOUSE FOLLOW EFFECT ON HERO
// ============================================
const heroContent = document.querySelector('.hero-content');
if (heroContent) {
    document.addEventListener('mousemove', (e) => {
        const rect = heroContent.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        
        heroContent.style.transform = `perspective(1000px) rotateX(${(y - 0.5) * 5}deg) rotateY(${(x - 0.5) * 5}deg)`;
    });

    document.addEventListener('mouseleave', () => {
        heroContent.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });
}

// ============================================
// SCROLL PROGRESS INDICATOR (Optional)
// ============================================
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.documentElement.style.setProperty('--scroll-progress', scrolled + '%');
});
