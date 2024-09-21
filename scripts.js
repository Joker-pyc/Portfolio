document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: "AI Chat-Bot Using Gimini API",
            description: "An advanced AI chatbot leveraging the power of Gimini API for natural language processing.",
            image: "assets/project/ai.png",
            link: "https://example.com/project1",
            category: "AI"
        },
        {
            title: "E-Sports Website",
            description: "A dynamic platform for e-sports enthusiasts featuring live updates and interactive elements.",
            image: "assets/project/e-sports.png",
            link: "https://example.com/esports-website",
            category: "Web"
        },
        {
            title: "Real-Time Chat Application",
            description: "A responsive web-based chat application enabling real-time communication.",
            image: "assets/project/RTC.png",
            link: "https://example.com/project2",
            category: "Web"
        },
        {
            title: "AI-Based Diet & Workout Planner",
            description: "An intelligent fitness application using AI to create personalized health routines.",
            image: "assets/project/workout-planner.png",
            link: "https://example.com/ai-workout-planner",
            category: "AI"
        }
    ];

    const skills = [
        { name: "HTML5", icon: "fab fa-html5", progress: 90, details: "Proficient in semantic HTML and accessibility best practices." },
        { name: "CSS3", icon: "fab fa-css3-alt", progress: 85, details: "Skilled in responsive design, Flexbox, and CSS Grid." },
        { name: "JavaScript", icon: "fab fa-js", progress: 80, details: "Strong knowledge of ES6+ features and asynchronous programming." },
        { name: "React", icon: "fab fa-react", progress: 75, details: "Experienced in building complex UIs with React and Redux." },
        { name: "Node.js", icon: "fab fa-node-js", progress: 70, details: "Capable of building RESTful APIs and server-side applications." },
        { name: "Python", icon: "fab fa-python", progress: 65, details: "Proficient in data analysis and machine learning with Python." },
        { name: "Git", icon: "fab fa-git-alt", progress: 80, details: "Experienced in version control and collaborative development." },
        { name: "Database", icon: "fas fa-database", progress: 75, details: "Skilled in SQL and NoSQL database design and management." }
    ];

    const blogPosts = [
        {
            title: "The Future of AI in Web Development",
            excerpt: "Exploring how artificial intelligence is shaping the future of web development and user experiences.",
            image: "assets/blog/ai-web-dev.jpg",
            link: "#",
            content: "Artificial Intelligence is revolutionizing the way we approach web development..."
        },
        {
            title: "Mastering Responsive Design",
            excerpt: "Tips and tricks for creating truly responsive and adaptive websites across all devices.",
            image: "assets/blog/responsive-design.jpg",
            link: "#",
            content: "Responsive design is more than just media queries. Here's how to take it to the next level..."
        },
        {
            title: "The Rise of JAMstack",
            excerpt: "Understanding the benefits and implementation of JAMstack architecture in modern web development.",
            image: "assets/blog/jamstack.jpg",
            link: "#",
            content: "JAMstack is changing the way we build and deploy websites. Let's dive into its core principles..."
        }
    ];

    function renderProjects() {
        const projectsGrid = document.getElementById('projectsGrid');
        projectsGrid.innerHTML = projects.map(project => `
            <div class="project-card" data-category="${project.category}">
                <img src="${project.image}" alt="${project.title}" class="project-image">
                <div class="project-info">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <a href="${project.link}" class="project-link" target="_blank">View Project</a>
                </div>
            </div>
        `).join('');
    
        // Remove the initMasonry() call as we're using CSS Grid instead
    }
    
 

    function renderSkills() {
        const skillsContainer = document.getElementById('skillsContainer');
        skillsContainer.innerHTML = skills.map(skill => `
            <div class="skill-item">
                <i class="${skill.icon} skill-icon"></i>
                <p class="skill-name">${skill.name}</p>
                <div class="skill-progress">
                    <div class="skill-progress-bar" style="width: 0%"></div>
                </div>
                <div class="skill-details">${skill.details}</div>
            </div>
        `).join('');
        animateSkillBars();
    }

    function renderBlogPosts() {
        const blogGrid = document.getElementById('blogGrid');
        blogGrid.innerHTML = blogPosts.map(post => `
            <div class="blog-card">
                <div class="blog-card-inner">
                    <div class="blog-card-front">
                        <img src="${post.image}" alt="${post.title}" class="blog-image">
                        <div class="blog-info">
                            <h3 class="blog-title">${post.title}</h3>
                            <p class="blog-excerpt">${post.excerpt}</p>
                        </div>
                    </div>
                    <div class="blog-card-back">
                        <h3 class="blog-title">${post.title}</h3>
                        <p class="blog-full-content">${post.content}</p>
                        <a href="${post.link}" class="blog-link">Read More</a>
                    </div>
                </div>
            </div>
        `).join('');
        animateBlogCards();
    }

    function setupProjectFilter() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');
                projectCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                initMasonry();
            });
        });
    }

    function setupDarkMode() {
        const toggleButton = document.getElementById('toggleMode');
        const icon = toggleButton.querySelector('i');
        const root = document.documentElement;
    
        toggleButton.addEventListener('click', () => {
            root.classList.toggle('dark-mode');
            if (root.classList.contains('dark-mode')) {
                icon.classList.replace('fa-moon', 'fa-sun');
                root.style.setProperty('--background-color', '#1a1a1a');
                root.style.setProperty('--text-color', '#ffffff');
            } else {
                icon.classList.replace('fa-sun', 'fa-moon');
                root.style.setProperty('--background-color', '#0a0a0a');
                root.style.setProperty('--text-color', '#ffffff');
            }
        });
    }

    function setupHamburgerMenu() {
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }

    function setupCustomCursor() {
        const cursor = document.getElementById('cursor');
        const cursorBorder = document.getElementById('cursorBorder');

        document.addEventListener('mousemove', (e) => {
            gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
            gsap.to(cursorBorder, { x: e.clientX, y: e.clientY, duration: 0.3 });
        });

        document.addEventListener('mousedown', () => {
            gsap.to(cursorBorder, { scale: 0.8, duration: 0.2 });
        });

        document.addEventListener('mouseup', () => {
            gsap.to(cursorBorder, { scale: 1, duration: 0.2 });
        });

        const hoverElements = document.querySelectorAll('a, button, .project-card, .blog-card, .skill-item');
        hoverElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                gsap.to(cursorBorder, { scale: 1.5, duration: 0.2 });
                cursor.style.opacity = '0.5';
            });
            element.addEventListener('mouseleave', () => {
                gsap.to(cursorBorder, { scale: 1, duration: 0.2 });
                cursor.style.opacity = '1';
            });
        });
    }

    function initializeAnimations() {
        gsap.from('.hero h1', { opacity: 0, y: 50, duration: 1, delay: 0.2 });
        gsap.from('.hero p', { opacity: 0, y: 50, duration: 1, delay: 0.4 });
        gsap.from('.cta-buttons', { opacity: 0, y: 50, duration: 1, delay: 0.6 });
        gsap.from('.profile-pic', { opacity: 0, scale: 0.8, duration: 1, delay: 0.8 });

        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            gsap.from(section, {
                opacity: 0,
                y: 50,
                duration: 1,
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                }
            });
        });
    }

    function setupScrollToTop() {
        const scrollToTopButton = document.getElementById('scrollToTop');
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 100) {
                scrollToTopButton.classList.add('visible');
            } else {
                scrollToTopButton.classList.remove('visible');
            }
        });

        scrollToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    function setupTypingEffect() {
        const typingText = document.getElementById('typingText');
        const phrases = [
            'Creative Developer',
            'Tech Innovator',
            'Problem Solver',
            'Code Enthusiast'
        ];
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
    
        function type() {
            const currentPhrase = phrases[phraseIndex];
    
            if (isDeleting) {
                typingText.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingText.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
            }
    
            if (!isDeleting && charIndex === currentPhrase.length) {
                isDeleting = true;
                setTimeout(type, 1500); // Pause at end of phrase
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                setTimeout(type, 500); // Pause before starting new phrase
            } else {
                setTimeout(type, isDeleting ? 50 : 100);
            }
        }
    
        type();
    }

    function setupContactForm() {
        const contactForm = document.getElementById('contactForm');
        const successMessage = document.getElementById('successMessage');

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add your form submission logic here
            successMessage.classList.add('show');
            contactForm.reset();
            setTimeout(() => {
                successMessage.classList.remove('show');
            }, 3000);
        });
    }

    function initParticles() {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#ffffff" },
                shape: { type: "circle", stroke: { width: 0, color: "#000000" }, polygon: { nb_sides: 5 } },
                opacity: { value: 0.5, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
                size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
                line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
                move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } }
            },
            interactivity: {
                detect_on: "canvas",
                events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
                modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
            },
            retina_detect: true
        });
    }

    function initTilt() {
        VanillaTilt.init(document.querySelector(".profile-pic"), {
            max: 25,
            speed: 400,
            glare: true,
            "max-glare": 0.5
        });
    }

    function animateTimelineItems() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.5 });
        timelineItems.forEach(item => observer.observe(item));
    }

    function revealAboutText() {
        const aboutText = document.querySelector('.about-text');
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                aboutText.classList.add('revealed');
            }
        }, { threshold: 0.5 });
        observer.observe(aboutText);
    }

    function animateSkillBars() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target.querySelector('.skill-progress-bar');
                    const skill = skills.find(s => s.name === entry.target.querySelector('.skill-name').textContent);
                    progressBar.style.width = `${skill.progress}%`;
                }
            });
        }, { threshold: 0.5 });
        document.querySelectorAll('.skill-item').forEach(item => observer.observe(item));
    }

    function initMasonry() {
        new Masonry('#projectsGrid', {
            itemSelector: '.project-card',
            columnWidth: '.project-card',
            percentPosition: true,
            transitionDuration: '0.3s'
        });
    }

    function animateBlogCards() {
        gsap.from('.blog-card', {
            opacity: 0,
            y: 50,
            stagger: 0.2,
            duration: 1,
            scrollTrigger: {
                trigger: '.blog-section',
                start: 'top 80%'
            }
        });
    }

    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }

    function initTextScramble() {
        class TextScramble {
            constructor(el) {
                this.el = el;
                this.chars = '!<>-_\\/[]{}—=+*^?#________';
                this.update = this.update.bind(this);
            }
            setText(newText) {
                const oldText = this.el.innerText;
                const length = Math.max(oldText.length, newText.length);
                const promise = new Promise((resolve) => this.resolve = resolve);
                this.queue = [];
                for (let i = 0; i < length; i++) {
                    const from = oldText[i] || '';
                    const to = newText[i] || '';
                    const start = Math.floor(Math.random() * 40);
                    const end = start + Math.floor(Math.random() * 40);
                    this.queue.push({ from, to, start, end });
                }
                cancelAnimationFrame(this.frameRequest);
                this.frame = 0;
                this.update();
                return promise;
            }
            update() {
                let output = '';
                let complete = 0;
                for (let i = 0, n = this.queue.length; i < n; i++) {
                    let { from, to, start, end, char } = this.queue[i];
                    if (this.frame >= end) {
                        complete++;
                        output += to;
                    } else if (this.frame >= start) {
                        if (!char || Math.random() < 0.28) {
                            char = this.randomChar();
                            this.queue[i].char = char;
                        }
                        output += `<span class="dud">${char}</span>`;
                    } else {
                        output += from;
                    }
                }
                this.el.innerHTML = output;
                if (complete === this.queue.length) {
                    this.resolve();
                } else {
                    this.frameRequest = requestAnimationFrame(this.update);
                    this.frame++;
                }
            }
            randomChar() {
                return this.chars[Math.floor(Math.random() * this.chars.length)];
            }
        }

        const phrases = [
            'Welcome to my portfolio',
            'Explore my projects',
            'Check out my skills',
            'Get in touch'
        ];

        const el = document.querySelector('.text-scramble');
        const fx = new TextScramble(el);

        let counter = 0;
        const next = () => {
            fx.setText(phrases[counter]).then(() => {
                setTimeout(next, 2000);
            });
            counter = (counter + 1) % phrases.length;
        };

        next();
    }

    function initParallaxEffect() {
        const parallaxElements = document.querySelectorAll('.parallax');
        window.addEventListener('scroll', () => {
            parallaxElements.forEach(element => {
                const scrolled = window.pageYOffset;
                const rate = scrolled * -0.3;
                element.style.transform = `translate3d(0px, ${rate}px, 0px)`;
            });
        });
    }

    function filterProjects() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');
    
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');
                
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
    
                projectCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
    
   

    // Initialize all functions
    setupTypingEffect();
    renderProjects();
    filterProjects();
    renderSkills();
    renderBlogPosts();
    setupProjectFilter();
    setupDarkMode();
    setupHamburgerMenu();
    setupCustomCursor();
    initializeAnimations();
    setupScrollToTop();
    setupContactForm();
    initParticles();
    initTilt();
    animateTimelineItems();
    revealAboutText();
    initSmoothScroll();
    initTextScramble();
    initParallaxEffect();
});
