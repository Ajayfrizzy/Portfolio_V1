/* JavaScript for Dynamic Content for project*/

// Project data
const projects = [
  /*{
    title: "Full Stack Personal Portfolio",
    description:
      "This is my full stack website portfolio that contains majority of my works, has supabase implemented for the feedback coming from the website, animation was also implemented for interactivity",
    image: "/asset/img/project_9.png",
    tags: ["HTML", "CSS", "JavaScript", "Supabase"],
    link: "https://ajaytech.vercel.app/",
    github: "https://github.com/Ajayfrizzy/Mini_portfolio",
  },*/
  {
    title: "Analytical Haven Website",
    description: "A Startup Company",
    image: "/asset/img/project_5.png",
    tags: ["TailwindCSS", "Reactjs"],
    link: "https://analytical-haven.vercel.app/",
    github: "https://github.com/Ajayfrizzy/Analytical_Haven",
  },
  {
    title: "BlackBitcoin Website",
    description: "This is a Memecoin website that is about to be launched soon",
    image: "/asset/img/project_3.png",
    tags: ["TailwindCSS", "NextJs"],
    link: "https://www.blackbitcoin.vip/",
    github: "https://github.com/Ajayfrizzy/black-bitcoin",
  },
  {
    title: "House Booking",
    description: "House Booking Website",
    image: "/asset/img/project_4.png",
    tags: ["TailwindCSS", "NextJs", "SwiperJs"],
    link: "https://big-analytical-project.vercel.app/",
    github: "https://github.com/Ajayfrizzy/big_analytical_project",
  },
  {
    title: "Construction Website",
    description:
      "A construction company that deals with Engineering Services, Procurement Services, Construction Services, Commissioning and Handover.",
    image: "/asset/img/project_2.png",
    tags: ["Reactjs", "Typewriter Effect", "Swiper"],
    link: "https://fortress-pr.vercel.app/",
    github: "https://github.com/Ajayfrizzy/fortress_project",
  },
  {
    title: "New Popecoin Website",
    description: "This is another Memecoin website that was launched recently",
    image: "/asset/img/project_6.png",
    tags: ["TailwindCSS", "NextJs", "Api Integration"],
    link: "https://never-mind.vercel.app/",
    github: "https://github.com/Ajayfrizzy/New_pope_coin",
  },
  {
    title: "Guesssing Game App",
    description: "A Gaming App where you guessed the right number.",
    image: "/asset/img/project_1.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://zuri-guessing-game.vercel.app/",
    github: "https://github.com/Ajayfrizzy/zuri-guessing-game",
  },
  {
    title: "To Do List App",
    description: "A To do list App with basic functionality like adding, removing, filtering and checking off tasks with dark mode.",
    image: "/asset/img/project_10.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://to-do-list-app-chi-ten.vercel.app/",
    github: "https://github.com/Ajayfrizzy/To_Do_List_App.git",
  },
  {
    title: "Mini Ecommerce Website",
    description:
      "Mini ecommerce with some little functionality which include filter, delete, carting of items and others...",
    image: "/asset/img/project_7.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Ajayfrizzy/New_pope_coin",
    github: "https://github.com/Ajayfrizzy/Mini_ecommerce",
  },
  {
    title: "Full Stack Website for FarmConnect",
    description:
      "This is a full stack website with the following functionality features Authetication for users registration/login, adding of items features for farmers and some other features...",
    image: "/asset/img/project_8.png",
    tags: ["TypeScript", "ReactJs", "Supabase"],
    link: "https://vibe-coding-hackathon-olive.vercel.app/",
    github: "https://github.com/Ajayfrizzy/Mini_ecommerce",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  // First, ensure the mobile menu and hamburger elements exist
  if (!document.querySelector(".mobile-menu")) {
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
    document.body.insertAdjacentHTML("beforeend", mobileMenuHTML);
  }

  // Add hamburger button if it doesn't exist already
  if (!document.querySelector(".hamburger")) {
    const nav = document.querySelector("nav");
    const hamburgerHTML = `
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        `;
    nav.insertAdjacentHTML("beforeend", hamburgerHTML);
  }

  // Now that we're sure the elements exist, add the event listeners and functionality
  // Select the hamburger button, mobile menu, and overlay elements
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  const overlay = document.querySelector(".overlay");
  const mobileLinks = document.querySelectorAll(".mobile-menu ul li a");

  // Toggle menu when hamburger is clicked
  hamburger.addEventListener("click", function () {
    this.classList.toggle("open");
    mobileMenu.classList.toggle("open");
    overlay.classList.toggle("open");
    document.body.classList.toggle("no-scroll");
  });

  // Close menu when overlay is clicked
  overlay.addEventListener("click", function () {
    hamburger.classList.remove("open");
    mobileMenu.classList.remove("open");
    this.classList.remove("open");
    document.body.classList.remove("no-scroll");
  });

  // Close menu when a link is clicked
  mobileLinks.forEach((link) => {
    link.addEventListener("click", function () {
      hamburger.classList.remove("open");
      mobileMenu.classList.remove("open");
      overlay.classList.remove("open");
      document.body.classList.remove("no-scroll");
    });
  });

  // Load projects dynamically with show more/less functionality
  const projectsContainer = document.getElementById("projectsContainer");

  if (projectsContainer && Array.isArray(projects)) {
    projectsContainer.innerHTML = ""; // Clear existing content

    const toggleButton = document.createElement("button");
    toggleButton.className = "show-more-btn";
    toggleButton.textContent = "Show More";

    const initialVisibleCount = 3;
    let expanded = false;

    projects.forEach((project, index) => {
      const projectCard = document.createElement("div");
      projectCard.className = "project-card";
      projectCard.style.display =
        index >= initialVisibleCount ? "none" : "block";

      projectCard.innerHTML = `
      <div class="project-image">
        <img src="${project.image}" alt="${
        project.title
      }" onerror="this.src='/path/to/default-image.png'">
      </div>
      <div class="project-info">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tags">
          ${project.tags
            .map((tag) => `<span class="project-tag">${tag}</span>`)
            .join("")}
        </div>
        <div class="project-links">
          <a href="${
            project.link
          }" target="_blank" class="btn2">View Project</a>
          <a href="${project.github}" target="_blank" class="btn2">Repo Link</a>
        </div>
      </div>
    `;

      projectsContainer.appendChild(projectCard);
    });

    if (projects.length > initialVisibleCount) {
      // Append toggle button outside the grid
      projectsContainer.parentElement.appendChild(toggleButton);
    }

    toggleButton.addEventListener("click", () => {
      const projectCards = projectsContainer.querySelectorAll(".project-card");

      projectCards.forEach((card, index) => {
        if (index >= initialVisibleCount) {
          card.style.display = expanded ? "none" : "block";
        }
      });

      expanded = !expanded;
      toggleButton.textContent = expanded ? "Show Less" : "Show More";

      if (expanded) {
        setTimeout(() => {
          document
            .querySelector("#projects")
            ?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    });
  }

  // Animation on scroll
  // Get all sections that need to be animated
  const sections = document.querySelectorAll("section");

  // Create an Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    },
    {
      root: null, // viewport
      threshold: 0.1, // 10% of the item is visible
      rootMargin: "-50px",
    }
  );

  // Observe each section
  sections.forEach((section) => {
    observer.observe(section);
  });

  // Add typing animation for hero text
  const heroTitle = document.querySelector(".hero h1");
  if (heroTitle) {
    setTimeout(() => {
      heroTitle.style.opacity = "1";
      heroTitle.style.transform = "translateY(0)";
    }, 500);
  }

  // Custom cursor effect (optional enhancement)
  const cursor = document.createElement("div");
  cursor.classList.add("cursor");
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", function (e) {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });

  // Add/remove class when hovering over links
  const links = document.querySelectorAll(
    "a, button, .skill-card, .project-card, .interest-card"
  );
  links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      cursor.classList.add("cursor-grow");
    });

    link.addEventListener("mouseleave", () => {
      cursor.classList.remove("cursor-grow");
    });
  });

  // Add scroll to top button
  const scrollTopButton = document.createElement("button");
  scrollTopButton.id = "scrollTop";
  scrollTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
  scrollTopButton.style.position = "fixed";
  scrollTopButton.style.bottom = "20px";
  scrollTopButton.style.right = "20px";
  scrollTopButton.style.backgroundColor = "var(--accent-color)";
  scrollTopButton.style.color = "var(--dark-navy)";
  scrollTopButton.style.border = "none";
  scrollTopButton.style.borderRadius = "50%";
  scrollTopButton.style.width = "50px";
  scrollTopButton.style.height = "50px";
  scrollTopButton.style.fontSize = "20px";
  scrollTopButton.style.cursor = "pointer";
  scrollTopButton.style.display = "none";
  scrollTopButton.style.zIndex = "99";
  scrollTopButton.style.transition = "opacity 0.3s, transform 0.3s";

  document.body.appendChild(scrollTopButton);

  window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
      scrollTopButton.style.display = "block";
      scrollTopButton.style.opacity = "1";
    } else {
      scrollTopButton.style.opacity = "0";
      setTimeout(() => {
        if (window.scrollY <= 500) {
          scrollTopButton.style.display = "none";
        }
      }, 300);
    }
  });

  scrollTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Add smooth scrolling for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const navHeight = document.querySelector("header").offsetHeight;
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.scrollY -
          navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});
