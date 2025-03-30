document.addEventListener('DOMContentLoaded', function() {
    // Sidebar Toggle
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const closeSidebar = document.querySelector('.close-sidebar');
    const mainContent = document.querySelector('.main-content');
    
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.add('open');
        mainContent.classList.add('shift');
    });
    
    closeSidebar.addEventListener('click', () => {
        sidebar.classList.remove('open');
        mainContent.classList.remove('shift');
    });
    
    // Close sidebar when clicking outside
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
            sidebar.classList.remove('open');
            mainContent.classList.remove('shift');
        }
    });
    
    // Dark/Light Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle input');
    const body = document.body;
    
    // Check for saved theme preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
        themeToggle.checked = currentTheme === 'dark-theme';
    }
    
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            body.classList.add('dark-theme');
            body.classList.remove('light-theme');
            localStorage.setItem('theme', 'dark-theme');
        } else {
            body.classList.add('light-theme');
            body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light-theme');
        }
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
    
    sections.forEach(section => {
        appearOnScroll.observe(section);
    });
    
    // Floating header animation
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            navbar.classList.remove('scroll-up');
            return;
        }
        
        if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
            navbar.classList.remove('scroll-up');
            navbar.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
            navbar.classList.remove('scroll-down');
            navbar.classList.add('scroll-up');
        }
        
        lastScroll = currentScroll;
    });
});
// Portfolio Filter
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

if (filterButtons.length && portfolioItems.length) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
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
    
    // Initialize
    showTestimonial(0);
    setInterval(nextTestimonial, 5000);
}

document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.querySelector('.theme-toggle input');
  const body = document.body;

  // Initialize theme - dark by default
  function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    
    // If user previously chose light theme
    if (savedTheme === 'light') {
      body.classList.add('light-theme');
      themeToggle.checked = false; // Switch position for light mode
    }
    // Otherwise, dark mode remains default (no class needed)
  }

  // Toggle between themes
  themeToggle.addEventListener('change', function() {
    if (this.checked) {
      // Switch to dark mode
      body.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      // Switch to light mode
      body.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    }
  });

  // Initialize theme on load
  initTheme();
});
