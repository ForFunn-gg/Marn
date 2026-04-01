document.addEventListener('DOMContentLoaded', function() {
    
const myTypeInstance = new Typed('.typed-text', {
    strings: [
        'UI/UX Designer',
        'Frontend Developer',
        'Responsive Web Designer',
        'AI Enthusiast',
        'Web Developer',
    ],
    typeSpeed: 60,       
    backSpeed: 30,        
    backDelay: 1500,      
    startDelay: 500,      
    loop: true,           
    showCursor: false,    
    smartBackspace: true, 
});

    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    mobileMenuToggle.addEventListener('click', function() {
      
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
      
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavigation() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100; 
            const sectionId = section.getAttribute('id');
            
         
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
              
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                
              
                const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }
    
   
    window.addEventListener('scroll', highlightNavigation);
    
    
    const observerOptions = {
        threshold: 0.15,  
        rootMargin: '0px 0px -50px 0px'
    };
    
   
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
               
            }
        });
    }, observerOptions);
    
    
    const fadeElements = document.querySelectorAll('.skill-card, .project-card, .about-content');
    fadeElements.forEach(el => {
        el.classList.add('scroll-fade');
        observer.observe(el);
    });
    
    
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
      
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        
       
        console.log('Form submitted:', formData);
        
       
        alert('Thank you for your message! I will get back to you soon.');
        
       
        contactForm.reset();
        
    });
    
    
   
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const offsetTop = target.offsetTop - 70; 
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
});


const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

const savedTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme); 
});

const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.classList.add('hidden');
});

function animateCounter(counter) {
    const target = parseInt(counter.getAttribute('data-target'));
    const suffix = counter.getAttribute('data-suffix') || '';
    const duration = 2000;
    const increment = target / (duration / 16); 
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        
        if (current < target) {
            counter.textContent = Math.floor(current) + suffix;
            requestAnimationFrame(updateCounter); 
        } else {
            counter.textContent = target + suffix; 
        }
    };
    
    updateCounter();
}

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.counter');
            
            counters.forEach(counter => {
                if (!counter.classList.contains('animated')) {
                    animateCounter(counter);
                    counter.classList.add('animated');
                }
            });
            
            statsObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});

const statsSection = document.getElementById('stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

