/* JavaScript for Dynamic Content  for project*/    
       
// Project data
const projects = [
    {
        title: "Guesssing Game App",
        description: "A Gaming App where you guessed the right number.",
        image: "/asset/img/project_1.png",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "https://ajayfrizzy.github.io/zuri-guessing-game/",
        github: "https://github.com/Ajayfrizzy/zuri-guessing-game"
    },
    {
        title: "Construction Website",
        description: "A construction company that deals with Engineering Services, Procurement Services, Construction Services, Commissioning and Handover.",
        image: "/asset/img/project_2.png",
        tags: ["Reactjs", "Typewriter Effect", "Swiper"],
        link: "https://pggrng.com/",
        github: "https://github.com/Ajayfrizzy/fortress_project"
    },
    {
        title: "Memecoin Website",
        description: "This is a Memecoin website that is about to be launched soon",
        image: "/asset/img/project_3.png",
        tags: ["TailwindCSS", "NextJs"],
        link: "https://www.blackbitcoin.vip/",
        github: "https://github.com/Ajayfrizzy/black-bitcoin"
    }
];

document.addEventListener('DOMContentLoaded', function() {
    // First, ensure the mobile menu and hamburger elements exist
    if (!document.querySelector('.mobile-menu')) {
        const mobileMenuHTML = `
            <div class="mobile-menu">
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#interests">Interests</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div class="overlay"></div>
        `;
        document.body.insertAdjacentHTML('beforeend', mobileMenuHTML);
    }
    
    // Add hamburger button if it doesn't exist already 
    if (!document.querySelector('.hamburger')) {
        const nav = document.querySelector('nav');
        const hamburgerHTML = `
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        `;
        nav.insertAdjacentHTML('beforeend', hamburgerHTML);
    }
    
    // Now that we're sure the elements exist, add the event listeners and functionality
    // Select the hamburger button, mobile menu, and overlay elements
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.overlay');
    const mobileLinks = document.querySelectorAll('.mobile-menu ul li a');
    
    // Toggle menu when hamburger is clicked 
    hamburger.addEventListener('click', function() {
        this.classList.toggle('open');
        mobileMenu.classList.toggle('open');
        overlay.classList.toggle('open');
        document.body.classList.toggle('no-scroll');
    });
    
    // Close menu when overlay is clicked
    overlay.addEventListener('click', function() {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        this.classList.remove('open');
        document.body.classList.remove('no-scroll');
    });
    
    // Close menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('open');
            mobileMenu.classList.remove('open');
            overlay.classList.remove('open');
            document.body.classList.remove('no-scroll');
        });
    });

    // Load projects dynamically
    const projectsContainer = document.getElementById('projectsContainer');
    if (projectsContainer) {
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            
            projectCard.innerHTML = `
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}">
                </div>
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                    </div>
                    <a href="${project.link}" target="_blank" class="btn2">View Project</a>
                    <a href="${project.github}" target="_blank" class="btn2">Repo Link</a>
                </div>
            `;
            
            projectsContainer.appendChild(projectCard);
        });
    }

    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }

    // Animation on scroll
    // Get all sections that need to be animated
    const sections = document.querySelectorAll('section');
    
    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, {
        root: null, // viewport
        threshold: 0.1, // 10% of the item is visible
        rootMargin: '-50px'
    });
    
    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });

    // Add typing animation for hero text
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        setTimeout(() => {
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 500);
    }

    // Custom cursor effect (optional enhancement)
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    // Add/remove class when hovering over links
    const links = document.querySelectorAll('a, button, .skill-card, .project-card, .interest-card');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-grow');
        });
        
        link.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-grow');
        });
    });

    // Add scroll to top button
    const scrollTopButton = document.createElement('button');
    scrollTopButton.id = 'scrollTop';
    scrollTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopButton.style.position = 'fixed';
    scrollTopButton.style.bottom = '20px';
    scrollTopButton.style.right = '20px';
    scrollTopButton.style.backgroundColor = 'var(--accent-color)';
    scrollTopButton.style.color = 'var(--dark-navy)';
    scrollTopButton.style.border = 'none';
    scrollTopButton.style.borderRadius = '50%';
    scrollTopButton.style.width = '50px';
    scrollTopButton.style.height = '50px';
    scrollTopButton.style.fontSize = '20px';
    scrollTopButton.style.cursor = 'pointer';
    scrollTopButton.style.display = 'none';
    scrollTopButton.style.zIndex = '99';
    scrollTopButton.style.transition = 'opacity 0.3s, transform 0.3s';
    
    document.body.appendChild(scrollTopButton);
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            scrollTopButton.style.display = 'block';
            scrollTopButton.style.opacity = '1';
        } else {
            scrollTopButton.style.opacity = '0';
            setTimeout(() => {
                if (window.scrollY <= 500) {
                    scrollTopButton.style.display = 'none';
                }
            }, 300);
        }
    });
    
    scrollTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Add smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});