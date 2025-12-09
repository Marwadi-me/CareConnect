function changeButtonColor() {
    var button = document.querySelector('.nav-button');
    var colors = ['#00796b', '#d32f2f', '#1976d2', '#7b1fa2', '#f57c00'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    button.style.backgroundColor = randomColor;
}
window.onload = function() {
    var button = document.querySelector('.nav-button');
    if (button) {
        button.onclick = changeButtonColor;
    }

    setupServiceCardHover();
    setupContactFormValidation();
};


function setupServiceCardHover() {
    var cards = document.querySelectorAll('.service-card');
    for (var i = 0; i < cards.length; i++) {
        cards[i].onmouseenter = function() {
            this.style.backgroundColor = '#e0f7fa';
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'all 0.3s ease';
        };
        cards[i].onmouseleave = function() {
            this.style.backgroundColor = '#fff';
            this.style.transform = 'scale(1)';
        };
    }
}


function setupContactFormValidation() {
    var form = document.querySelector('.contact-form form');
    if (form) {
        form.onsubmit = function(event) {
            event.preventDefault();
            var name = document.querySelector('input[name="name"]').value;
            var email = document.querySelector('input[name="email"]').value;
            var message = document.querySelector('textarea[name="message"]').value;

            if (name === '' || email === '' || message === '') {
                alert('Please fill in all fields!');
                return false;
            }
            if (email.indexOf('@') === -1) {
                alert('Please enter a valid email address!');
                return false;
            }
            form.reset();
            return false;
        };
    }
}



function animateHeroText() {
    var heroTitle = document.querySelector('.hero h1');
    
    if (heroTitle) {
        var colors = ['#004d40', '#d32f2f', '#1976d2', '#7b1fa2'];
        var currentColorIndex = 0;
        
        setInterval(function() {
            currentColorIndex = (currentColorIndex + 1) % colors.length;
            heroTitle.style.color = colors[currentColorIndex];
            heroTitle.style.transition = 'color 1s ease';
        }, 2000);
    }
}
window.addEventListener('load', animateHeroText);




