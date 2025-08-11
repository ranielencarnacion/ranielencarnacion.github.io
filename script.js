// Smooth scrolling for navigation links
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

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(15, 23, 42, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(section);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero-section');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroSection && heroImage) {
        const rate = scrolled * -0.5;
        heroImage.style.transform = `translateY(${rate}px)`;
    }
});

// Smooth reveal animation for stats
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const stats = entry.target.querySelectorAll('.stat');
            stats.forEach((stat, index) => {
                setTimeout(() => {
                    stat.style.opacity = '1';
                    stat.style.transform = 'translateY(0)';
                }, index * 200);
            });
        }
    });
}, { threshold: 0.5 });

const introSection = document.querySelector('.intro-section');
if (introSection) {
    statsObserver.observe(introSection);
}

// Initialize stats with hidden state
document.querySelectorAll('.stat').forEach(stat => {
    stat.style.opacity = '0';
    stat.style.transform = 'translateY(30px)';
    stat.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

// Hover effects for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Hover effects for thing cards
document.querySelectorAll('.thing-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 80);
    }
});

// Smooth scroll indicator animation
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        const introSection = document.querySelector('.intro-section');
        if (introSection) {
            introSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}

// Add floating animation to contact items
document.querySelectorAll('.contact-item').forEach((item, index) => {
    item.style.animationDelay = `${index * 0.2}s`;
    item.classList.add('floating');
});

// Add CSS for floating animation
const style = document.createElement('style');
style.textContent = `
    @keyframes floating {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
    }
    
    .floating {
        animation: floating 3s ease-in-out infinite;
    }
    
    .hero-section::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: 
            radial-gradient(circle at 20% 80%, rgba(125, 211, 252, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(56, 189, 248, 0.1) 0%, transparent 50%);
        pointer-events: none;
        animation: float 20s ease-in-out infinite;
    }
    
    @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        33% { transform: translateY(-20px) rotate(1deg); }
        66% { transform: translateY(10px) rotate(-1deg); }
    }
    
    .project-card::before,
    .thing-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, rgba(125, 211, 252, 0.1), rgba(56, 189, 248, 0.1));
        opacity: 0;
        transition: opacity 0.3s ease;
        border-radius: 20px;
        pointer-events: none;
    }
    
    .project-card:hover::before,
    .thing-card:hover::before {
        opacity: 1;
    }
    
    .stat::before {
        content: '';
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        background: linear-gradient(135deg, #7DD3FC, #38bdf8);
        border-radius: 22px;
        z-index: -1;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .stat:hover::before {
        opacity: 1;
    }
    
    .stat {
        position: relative;
        z-index: 1;
    }
`;

document.head.appendChild(style);

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Smooth reveal for skills
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skills = entry.target.querySelectorAll('.skill-category');
            skills.forEach((skill, index) => {
                setTimeout(() => {
                    skill.style.opacity = '1';
                    skill.style.transform = 'translateX(0)';
                }, index * 150);
            });
        }
    });
}, { threshold: 0.3 });

const aboutSection = document.querySelector('.about-section');
if (aboutSection) {
    skillsObserver.observe(aboutSection);
}

// Initialize skills with hidden state
document.querySelectorAll('.skill-category').forEach(skill => {
    skill.style.opacity = '0';
    skill.style.transform = 'translateX(-30px)';
    skill.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

// Add cursor trail effect
let mouseX = 0;
let mouseY = 0;
let trail = [];

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    trail.push({ x: mouseX, y: mouseY });
    
    if (trail.length > 10) {
        trail.shift();
    }
    
    // Create cursor trail effect
    trail.forEach((pos, index) => {
        const dot = document.createElement('div');
        dot.style.position = 'fixed';
        dot.style.left = pos.x + 'px';
        dot.style.top = pos.y + 'px';
        dot.style.width = '4px';
        dot.style.height = '4px';
        dot.style.background = '#7DD3FC';
        dot.style.borderRadius = '50%';
        dot.style.pointerEvents = 'none';
        dot.style.zIndex = '9999';
        dot.style.opacity = (index / trail.length) * 0.5;
        
        document.body.appendChild(dot);
        
        setTimeout(() => {
            dot.remove();
        }, 100);
    });
});

// Add scroll progress indicator
const progressBar = document.createElement('div');
progressBar.style.position = 'fixed';
progressBar.style.top = '0';
progressBar.style.left = '0';
progressBar.style.width = '0%';
progressBar.style.height = '3px';
progressBar.style.background = 'linear-gradient(90deg, #7DD3FC, #38bdf8)';
progressBar.style.zIndex = '10000';
progressBar.style.transition = 'width 0.1s ease';

document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
});

// Add particle effect to hero section
function createParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = '2px';
    particle.style.height = '2px';
    particle.style.background = '#7DD3FC';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.opacity = '0.6';
    
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        heroSection.appendChild(particle);
        
        // Animate particle
        const animation = particle.animate([
            { transform: 'translateY(0px)', opacity: 0.6 },
            { transform: 'translateY(-100px)', opacity: 0 }
        ], {
            duration: 3000 + Math.random() * 2000,
            easing: 'ease-out'
        });
        
        animation.onfinish = () => {
            particle.remove();
        };
    }
}

// Create particles periodically
setInterval(createParticle, 500);

// Add magnetic effect to buttons
document.querySelectorAll('.cta-button, .project-link, .social-link').forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translate(0, 0)';
    });
});

// Enhanced 3D Hero Image Rotation Effects
const heroImage3d = document.querySelector('.hero-image-3d');
const heroImageContainer = document.querySelector('.hero-image-container');

if (heroImage3d && heroImageContainer) {
    let rotationCount = 0;
    const rotationStates = ['rotate-y', 'rotate-x', 'rotate-z', 'flip', 'tilt'];
    let isAnimating = false;

    // Click handler for 3D rotation
    heroImageContainer.addEventListener('click', () => {
        if (isAnimating) return;
        
        isAnimating = true;
        
        // Remove all rotation classes
        heroImage3d.classList.remove(...rotationStates);
        
        // Add new rotation class
        const nextRotation = rotationStates[rotationCount % rotationStates.length];
        heroImage3d.classList.add(nextRotation);
        
        // Add click effect
        heroImageContainer.style.transform = 'scale(0.95)';
        setTimeout(() => {
            heroImageContainer.style.transform = 'scale(1)';
        }, 150);
        
        // Create particle burst effect
        createParticleBurst(heroImageContainer);
        
        rotationCount++;
        
        // Reset to normal state after animation
        setTimeout(() => {
            heroImage3d.classList.remove(nextRotation);
            isAnimating = false;
        }, 2000);
    });

    // Mouse move effect for dynamic 3D rotation
    heroImageContainer.addEventListener('mousemove', (e) => {
        if (isAnimating) return;
        
        const rect = heroImageContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / centerY * 10;
        const rotateY = (x - centerX) / centerX * 10;
        
        heroImage3d.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
    });

    // Reset rotation on mouse leave
    heroImageContainer.addEventListener('mouseleave', () => {
        if (isAnimating) return;
        heroImage3d.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });

    // Create particle burst effect
    function createParticleBurst(container) {
        const rect = container.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        for (let i = 0; i < 12; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.left = centerX + 'px';
            particle.style.top = centerY + 'px';
            particle.style.width = '4px';
            particle.style.height = '4px';
            particle.style.background = '#7DD3FC';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '9999';
            particle.style.opacity = '1';
            
            document.body.appendChild(particle);
            
            const angle = (i / 12) * Math.PI * 2;
            const distance = 50 + Math.random() * 30;
            const endX = centerX + Math.cos(angle) * distance;
            const endY = centerY + Math.sin(angle) * distance;
            
            const animation = particle.animate([
                { 
                    transform: 'translate(0, 0) scale(1)',
                    opacity: 1
                },
                { 
                    transform: `translate(${endX - centerX}px, ${endY - centerY}px) scale(0)`,
                    opacity: 0
                }
            ], {
                duration: 1000,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            });
            
            animation.onfinish = () => {
                particle.remove();
            };
        }
    }

    // Add glow effect on hover
    heroImageContainer.addEventListener('mouseenter', () => {
        if (isAnimating) return;
        heroImage3d.style.filter = 'drop-shadow(0 0 20px rgba(125, 211, 252, 0.5))';
    });

    heroImageContainer.addEventListener('mouseleave', () => {
        if (isAnimating) return;
        heroImage3d.style.filter = 'none';
    });
}

console.log('Portfolio website loaded successfully! 🚀');
