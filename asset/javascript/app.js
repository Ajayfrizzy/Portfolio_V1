/* JavaScript for Dynamic Content */    
       
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

    // Load projects dynamically
    const projectsContainer = document.getElementById('projectsContainer');

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

    // Form submission handling
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });