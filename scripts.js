document.addEventListener("DOMContentLoaded", function () {
  // Updated Projects data
  const projects = [
    {
      title: "AI Chat-Bot Using Gimini API",
      description: "This project is a web-based AI chat assistant built using Node.js with Express.js and Google Generative AI.",
      link: "https://example.com/project1",
      image: "assets/project/ai.png",
      category: "AI"
    },
    {
      title: "E-Sports Website",
      description: "A dynamic website dedicated to e-sports, featuring live tournament updates, team profiles, and interactive match schedules for various competitive gaming events.",
      link: "https://example.com/esports-website",
      image: "assets/project/e-sports.png",
      category: "Web"
    },
    {
      title: "Real-Time Chat Application",
      description: "The Real-Time Chat Application is a web-based communication platform that allows users to engage in real-time text-based conversations.",
      link: "https://example.com/project2",
      image: "assets/project/RTC.png",
      category: "Web"
    },
    {
      title: "AI-Based Diet & Workout Planner",
      description: "An intelligent workout planning application that uses AI to create personalized fitness routines based on user goals and preferences.",
      link: "https://example.com/ai-workout-planner",
      image: "assets/project/workout-planner.png",
      category: "AI"
    },
    {
      title: "College Hackathon 2023 Project Showcase",
      description: "A web platform showcasing innovative projects developed during the 2023 College Hackathon, featuring cutting-edge solutions across various domains.",
      link: "https://example.com/college-hackathon-2023",
      image: "assets/project/hackathon.png",
      category: "Event"
    }
  ];

  // Updated Tech stack data
  const techStack = [
    { icon: "assets/icons/html.svg", label: "HTML", proficiency: 90 },
    { icon: "assets/icons/css.svg", label: "CSS", proficiency: 85 },
    { icon: "assets/icons/javascript.svg", label: "JavaScript", proficiency: 80 },
    { icon: "assets/icons/nodejs.svg", label: "Node.js", proficiency: 75 },
    { icon: "assets/icons/python.svg", label: "Python", proficiency: 70 },
    { icon: "assets/icons/ai.svg", label: "AI-Tools", proficiency: 99 },
    { icon: "assets/icons/java.svg", label: "Java", proficiency: 60 },
    { icon: "assets/icons/c.svg", label: "C", proficiency: 80 },
    { icon: "assets/icons/cpp.svg", label: "C++", proficiency: 50 },
    { icon: "assets/icons/mysql.svg", label: "MySQL", proficiency: 75 },
    { icon: "assets/icons/github.svg", label: "GitHub", proficiency: 85 },
    { icon: "assets/icons/php.svg", label: "PHP", proficiency: 60 },
    { icon: "assets/icons/react.svg", label: "React", proficiency: 70 },
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "John Doe",
      role: "Project Manager",
      content: "Satosh is an exceptional developer with a keen eye for detail. His work on our project was outstanding."
    },
    {
      name: "Jane Smith",
      role: "Senior Developer",
      content: "Working with Satosh was a pleasure. His problem-solving skills and dedication to quality are impressive."
    },
    {
      name: "Alex Johnson",
      role: "UX Designer",
      content: "Satosh's ability to translate design concepts into functional and aesthetically pleasing websites is remarkable."
    }
  ];

  function renderProjects() {
    const projectsList = document.getElementById("projectsList");
    projectsList.innerHTML = "";

    projects.forEach((project) => {
      const projectElement = document.createElement("div");
      projectElement.classList.add("project-card");
      projectElement.setAttribute("data-category", project.category);

      projectElement.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="project-image">
        <div class="project-info">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.description}</p>
          <a href="${project.link}" class="project-link" target="_blank">View Project</a>
        </div>
      `;

      projectsList.appendChild(projectElement);
    });
  }

  function renderTechStack() {
    const techStackList = document.getElementById("techStackList");
    techStackList.innerHTML = "";

    techStack.forEach((item) => {
      const techStackItem = document.createElement("div");
      techStackItem.classList.add("tech-item");

      techStackItem.innerHTML = `
        <img src="${item.icon}" alt="${item.label}" class="tech-icon">
        <span class="tech-label">${item.label}</span>
        <div class="progress-bar">
          <div class="progress" style="width: ${item.proficiency}%"></div>
        </div>
      `;

      techStackList.appendChild(techStackItem);
    });
  }

  function renderTestimonials() {
    const testimonialCarousel = document.querySelector('.testimonial-carousel');
    testimonialCarousel.innerHTML = "";

    testimonials.forEach((testimonial) => {
      const testimonialItem = document.createElement("div");
      testimonialItem.classList.add("testimonial-item");

      testimonialItem.innerHTML = `
        <p>"${testimonial.content}"</p>
        <div class="testimonial-author">
          <h4>${testimonial.name}</h4>
          <span>${testimonial.role}</span>
        </div>
      `;

      testimonialCarousel.appendChild(testimonialItem);
    });
  }

  function setupProjectFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        projects.forEach(project => {
          if (filter === 'all' || project.getAttribute('data-category') === filter) {
            project.style.display = 'block';
          } else {
            project.style.display = 'none';
          }
        });
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
      });
    });
  }

  function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = contactForm.elements['name'].value;
      const email = contactForm.elements['email'].value;
      const message = contactForm.elements['message'].value;

      if (!name || !email || !message) {
        showNotification('Please fill in all fields', 'error');
        return;
      }

      if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
      }

      console.log('Form submitted:', { name, email, message });
      showNotification('Thank you for your message! I will get back to you soon.', 'success');
      contactForm.reset();
    });
  }

  function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.classList.add('notification', type);
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => {
      notification.remove();
    }, 3000);
  }

  function setupDarkMode() {
    const toggleModeButton = document.getElementById("toggleMode");
    const modeIcon = document.getElementById("modeIcon");

    toggleModeButton.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
      const isDarkMode = document.body.classList.contains("dark-mode");
      modeIcon.textContent = isDarkMode ? "🌙" : "☀️";
      localStorage.setItem("darkMode", isDarkMode);
    });

    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode === "true") {
      document.body.classList.add("dark-mode");
      modeIcon.textContent = "🌙";
    }
  }

  function setupCustomCursor() {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', e => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });

    // Add hover effect for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .tech-item');
    interactiveElements.forEach(elem => {
      elem.addEventListener('mouseenter', () => cursor.classList.add('hover'));
      elem.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
  }

  function setupScrollReveal() {
    ScrollReveal().reveal('.hero, .about-section, .tech-stack, #projects, #testimonials, #contact', {
      delay: 200,
      distance: '50px',
      duration: 1000,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      interval: 200,
      origin: 'bottom',
      reset: true
    });
  }

  function setupParticles() {
    particlesJS.load('particles-js', 'assets/particles.json', function() {
      console.log('particles.js loaded');
    });
  }

  function setupGlassmorphismBlob() {
    const blob = document.querySelector('.blob');
    document.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      blob.style.left = `${clientX}px`;
      blob.style.top = `${clientY}px`;
    });
  }

  function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }

  function setupFloatingActionBar() {
    const floatingBar = document.querySelector('.floating-action-bar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        floatingBar.style.bottom = '-60px';
      } else {
        floatingBar.style.bottom = '20px';
      }
      lastScrollTop = scrollTop;
    });
  }

  // Initialize all functions
  renderProjects();
  renderTechStack();
  renderTestimonials();
  setupProjectFilter();
  setupContactForm();
  setupDarkMode();
  setupCustomCursor();
  setupScrollReveal();
  setupParticles();
  setupGlassmorphismBlob();
  setupSmoothScrolling();
  setupFloatingActionBar();
});
