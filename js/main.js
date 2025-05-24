document.addEventListener('DOMContentLoaded', function () {
    // Sidebar Toggle
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const closeSidebar = document.querySelector('.close-sidebar');
    const mainContent = document.querySelector('.main-content');

    sidebarToggle?.addEventListener('click', () => {
        sidebar?.classList.add('open');
        mainContent?.classList.add('shift');
    });

    closeSidebar?.addEventListener('click', () => {
        sidebar?.classList.remove('open');
        mainContent?.classList.remove('shift');
    });

    // Close sidebar when clicking outside
    document.addEventListener('click', (e) => {
        setTimeout(() => {
            if (!sidebar?.contains(e.target) && !sidebarToggle?.contains(e.target)) {
                sidebar?.classList.remove('open');
                mainContent?.classList.remove('shift');
            }
        }, 50); // delay to avoid conflict with toggle click
    });

    // Dark/Light Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle input');
    const body = document.body;

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.remove('dark-theme', 'light-theme');
        body.classList.add(currentTheme);
        if (themeToggle) themeToggle.checked = currentTheme === 'dark-theme';
    }

    themeToggle?.addEventListener('change', () => {
        const newTheme = themeToggle.checked ? 'dark-theme' : 'light-theme';
        body.classList.remove('dark-theme', 'light-theme');
        body.classList.add(newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // Animate sections on scroll
    const sections = document.querySelectorAll('section');
    const appearOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => appearOnScroll.observe(section));

    // Floating header animation
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            navbar?.classList.remove('scroll-up');
            return;
        }

        if (currentScroll > lastScroll && !navbar?.classList.contains('scroll-down')) {
            navbar?.classList.remove('scroll-up');
            navbar?.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && navbar?.classList.contains('scroll-down')) {
            navbar?.classList.remove('scroll-down');
            navbar?.classList.add('scroll-up');
        }

        lastScroll = currentScroll;
    });

    // Portfolio Filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    if (filterButtons.length && portfolioItems.length) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filterValue = button.getAttribute('data-filter');

                portfolioItems.forEach(item => {
                    const match = filterValue === 'all' || item.getAttribute('data-category') === filterValue;
                    item.style.display = match ? 'block' : 'none';
                });
            });
        });
    }

    // Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial');
    if (testimonials.length) {
        let currentTestimonial = 0;

        function showTestimonial(index) {
            testimonials.forEach((testimonial, i) => {
                testimonial.style.display = i === index ? 'block' : 'none';
            });
        }

        function nextTestimonial() {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }

        showTestimonial(0);
        setInterval(nextTestimonial, 5000);
    }
});
