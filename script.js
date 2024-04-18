const header = document.querySelector('header');
let lastScrollTop = 0;

function handleScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > lastScrollTop) {
        // Scrolling downwards
        header.classList.add('blue-background');
    } else {
        // Scrolling upwards
        header.classList.remove('blue-background');
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}

window.addEventListener('scroll', handleScroll);


// Get the text container element
const textContainer = document.getElementById('text-container');
// Get the text content
const text = "I create pixel-perfect, engaging, and accessible digital experiences.";
let index = 0;
let typingInterval;

// Function to simulate typing
function typeText() {
    textContainer.textContent += text[index];
    index++;
    if (index === text.length) {
        clearInterval(typingInterval);
    }
}

// Start typing animation
typingInterval = setInterval(typeText, 80); 


// skills section start 
function animateTyping(id) {
    const skillsList = document.querySelectorAll('.skill');
    skillsList.forEach(skill => {
        skill.classList.remove('typing-animation-skills'); // Remove existing animation class
        void skill.offsetWidth; // Trigger reflow to restart animation
        skill.classList.add('typing-animation-skills'); // Add animation class to restart animation
    });
}

// Intersection Observer to trigger animation when in viewport
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateTyping(entry.target.getAttribute('data-id'));
            observer.unobserve(entry.target);
        }
    });
});

// Observe each card
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    observer.observe(card);
});

// project section 
function showAllProjects() {
    const hideProjects = document.querySelectorAll('.project.hide');
    hideProjects.forEach(project => {
      project.classList.remove('hide');
    });
    document.querySelector('.view-all-btn').style.display = 'none';
  }
  
  


  const balls = document.querySelectorAll('.ball');
    const btn = document.querySelector('.btn');

    btn.addEventListener('mouseover', () => {
      balls.forEach(ball => ball.style.animationPlayState = 'paused');
    });

    btn.addEventListener('mouseout', () => {
      balls.forEach(ball => ball.style.animationPlayState =  'running');
    });







    // Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight active link in navigation bar
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links li a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Scroll to top button
const scrollToTopBtn = document.querySelector('.scroll-to-top-btn');

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
