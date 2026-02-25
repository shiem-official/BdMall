window.addEventListener("load", function() {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("hide");
    }, 800); // small delay for smooth effect
});

        // Mobile categories button functionality
        document.querySelector('.mobile-categories-btn').addEventListener('click', function() {
            document.querySelector('.main-navigation').classList.toggle('active');
            
            // Toggle icon between bars and times for both menu toggles
            const icon1 = document.querySelector('.mobile-menu-toggle i');
            const icon2 = this.querySelector('i');
            
            if (icon1.classList.contains('fa-bars')) {
                icon1.classList.remove('fa-bars');
                icon1.classList.add('fa-times');
                icon2.classList.remove('fa-bars');
                icon2.classList.add('fa-times');
            } else {
                icon1.classList.remove('fa-times');
                icon1.classList.add('fa-bars');
                icon2.classList.remove('fa-times');
                icon2.classList.add('fa-bars');
            }
        });

    
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 10); // 5 days from now

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = endDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((distance / (1000 * 60)) % 60);
        const seconds = Math.floor((distance / 1000) % 60);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();

const backToTop = document.getElementById("backToTop");

// Show button when scrolling down
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

// Smooth scroll to top
backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});