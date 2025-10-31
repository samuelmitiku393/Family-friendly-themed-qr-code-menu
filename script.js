// Smooth scrolling for navigation
document.querySelectorAll('.category-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all links
        document.querySelectorAll('.category-link').forEach(item => {
            item.classList.remove('active');
        });
        
        // Add active class to clicked link
        this.classList.add('active');
        
        // Scroll to section
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});

// Update active nav link on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.menu-section');
    const navLinks = document.querySelectorAll('.category-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// Add fade-in animation to menu items when they come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.8s ease-out forwards';
        }
    });
}, observerOptions);

// Observe all menu items
document.querySelectorAll('.menu-item').forEach(item => {
    item.style.opacity = '0';
    observer.observe(item);
});

// Add some fun animations to kids section
const kidsSection = document.getElementById('kids');
const kidsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const kidsMeals = document.querySelectorAll('.kids-meal');
            kidsMeals.forEach((meal, index) => {
                setTimeout(() => {
                    meal.style.animation = 'bounce 0.5s ease';
                    setTimeout(() => {
                        meal.style.animation = '';
                    }, 500);
                }, index * 200);
            });
        }
    });
}, { threshold: 0.5 });

kidsObserver.observe(kidsSection);