document.addEventListener('DOMContentLoaded', function () {
    const particlesContainer = document.getElementById('particles');
    const particles = [];

    // Create particles
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.width = `${Math.random() * 20 + 10}px`; // Random size between 10 and 30 pixels
        particle.style.height = particle.style.width;
        particle.style.backgroundColor = getRandomColor(); // Adjusted color function
        particle.style.borderRadius = '50%'; // Make it a circle
        particle.style.opacity = '40%';
        particlesContainer.appendChild(particle);
        particles.push(particle);
    }

    // Set initial positions
    setInitialPositions();

    // Update particle positions on mousemove
    // document.addEventListener('mousemove', function (event) {
    //     const mouseX = event.clientX;
    //     const mouseY = event.clientY;
    //     particles.forEach(function (particle) {
    //         const particleRect = particle.getBoundingClientRect();
    //         const particleX = particleRect.left + particleRect.width / 2;
    //         const particleY = particleRect.top + particleRect.height / 2;
    //         const deltaX = mouseX - particleX;
    //         const deltaY = mouseY - particleY;
    //         const angle = Math.atan2(deltaY, deltaX);
    //         const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    //         const speed = 0.1; // Adjust the speed as needed
    //         const translateX = Math.cos(angle) * distance * speed;
    //         const translateY = Math.sin(angle) * distance * speed;
    //         particle.style.transform = `translate(${translateX}px, ${translateY}px)`;
    //     });
    // });
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return `${color}80`; // Adding '80' for lower alpha value (hex equivalent of 128)
}

function setInitialPositions() {
    const particles = document.querySelectorAll('.particle');
    particles.forEach(function (particle) {
        const rect = particle.getBoundingClientRect();
        particle.style.left = `${Math.random() * (window.innerWidth - rect.width)}px`;
        particle.style.top = `${Math.random() * (window.innerHeight - rect.height)}px`;
    });
}

document.addEventListener('DOMContentLoaded', function () {
    var introContainer = document.getElementById('introContainer');

    function checkVisibility() {
        var introContainerRect = introContainer.getBoundingClientRect();
        var windowHeight = window.innerHeight;

        if (introContainerRect.bottom >= 0 && introContainerRect.top <= windowHeight) {
            introContainer.classList.add('visible');
        } else {
            introContainer.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);

    // Initial check on page load
    checkVisibility();
});

AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
});