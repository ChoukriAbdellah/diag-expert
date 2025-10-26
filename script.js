// ============================================
// DOM Content Loaded
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    initChatbot();
    initMobileMenu();
    initSmoothScroll();
    initFormSubmission();
});

// ============================================
// Chatbot Functionality
// ============================================
function initChatbot() {
    const chatbotIcon = document.getElementById('chatbot-icon');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbotSend = document.getElementById('chatbot-send');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotMessages = document.getElementById('chatbot-messages');
    
    // Toggle chatbot window
    if (chatbotIcon) {
        chatbotIcon.addEventListener('click', function() {
            chatbotWindow.classList.toggle('active');
            chatbotInput.focus();
        });
    }
    
    // Close chatbot
    if (chatbotClose) {
        chatbotClose.addEventListener('click', function() {
            chatbotWindow.classList.remove('active');
        });
    }
    
    // Send message
    if (chatbotSend) {
        chatbotSend.addEventListener('click', sendMessage);
    }
    
    // Send on Enter key
    if (chatbotInput) {
        chatbotInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
    
    function sendMessage() {
        const userMessage = chatbotInput.value.trim();
        
        if (userMessage === '') return;
        
        // Add user message
        addMessage(userMessage, 'user');
        chatbotInput.value = '';
        
        // Simulate bot response
        setTimeout(() => {
            const botResponse = getBotResponse(userMessage);
            addMessage(botResponse, 'bot');
        }, 500);
    }
    
    function addMessage(text, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chatbot-message ${type}-message`;
        messageDiv.textContent = text;
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
    
    function getBotResponse(userMessage) {
        const message = userMessage.toLowerCase();
        
        if (message.includes('prix') || message.includes('tarif') || message.includes('cout')) {
            return "Nos tarifs commencent à partir de 50€ par diagnostic. Pour un devis personnalisé, veuillez remplir notre formulaire de contact. Envoyez-moi votre email si vous souhaitez que je vous mette en relation ! 📧";
        }
        
        if (message.includes('devis')) {
            return "Pour obtenir un devis gratuit et personnalisé, je vous invite à remplir notre formulaire en ligne : https://diag-expert.fr/prix-contact.html#devis-form. Ou appelez-nous directement au 01 23 45 67 89.";
        }
        
        if (message.includes('diagnostic')) {
            return "Nous proposons tous les diagnostics immobiliers obligatoires : DPE, Gaz, Électricité, Amiante, Plomb, Termites, Loi Carrez, Loi Boutin, et plus encore. Lequel vous intéresse ?";
        }
        
        if (message.includes('contact') || message.includes('telephone') || message.includes('tel')) {
            return "Vous pouvez nous joindre :\n📞 Téléphone : 01 23 45 67 89\n📧 Email : contact@diag-expert.fr\n⏰ Lun-Ven : 8h-19h | Sam : 9h-17h";
        }
        
        if (message.includes('delai') || message.includes('rapid')) {
            return "Nous proposons des interventions rapides sous 24-48h selon votre disponibilité. Le rapport de diagnostic est disponible sous 24h après la visite. 🚀";
        }
        
        if (message.includes('zone') || message.includes('intervention')) {
            return "Nous intervenons sur toute la France métropolitaine. Nos techniciens se déplacent à domicile pour réaliser vos diagnostics. Dans quelle ville souhaitez-vous faire intervenir ?";
        }
        
        if (message.includes('merci') || message.includes('remercie')) {
            return "De rien ! N'hésitez pas si vous avez d'autres questions. 😊";
        }
        
        if (message.includes('bonjour') || message.includes('salut') || message.includes('hello')) {
            return "Bonjour ! 👋 Comment puis-je vous aider aujourd'hui ?";
        }
        
        // Default response
        return "Merci pour votre message ! Pour des informations précises sur nos services, tarifs ou pour prendre rendez-vous, je vous recommande de :\n1️⃣ Remplir notre formulaire de devis gratuit\n2️⃣ Nous appeler au 01 23 45 67 89\n3️⃣ Nous envoyer un email à contact@diag-expert.fr\nComment puis-je vous aider davantage ?";
    }
}

// ============================================
// Mobile Menu Toggle
// ============================================
function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });
    }
}

// ============================================
// Smooth Scrolling
// ============================================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip empty or just # links
            if (href === '#' || href === '#0' || !href) {
                e.preventDefault();
                return;
            }
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
// Form Submission
// ============================================
function initFormSubmission() {
    const devisForm = document.getElementById('devisForm');
    
    if (devisForm) {
        devisForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(devisForm);
            const formObject = {};
            formData.forEach((value, key) => {
                if (formObject[key]) {
                    if (Array.isArray(formObject[key])) {
                        formObject[key].push(value);
                    } else {
                        formObject[key] = [formObject[key], value];
                    }
                } else {
                    formObject[key] = value;
                }
            });
            
            // Show success message
            const formContainer = devisForm.closest('.form-container');
            const successMessage = document.getElementById('form-success');
            
            if (successMessage) {
                devisForm.style.display = 'none';
                successMessage.style.display = 'block';
                
                // Scroll to success message
                successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // Log form data (in production, send to server)
                console.log('Form submitted:', formObject);
                
                // In production, you would send this data to your server
                // Example:
                // fetch('/api/devis', {
                //     method: 'POST',
                //     headers: { 'Content-Type': 'application/json' },
                //     body: JSON.stringify(formObject)
                // })
                // .then(response => response.json())
                // .then(data => console.log('Success:', data))
                // .catch(error => console.error('Error:', error));
            }
        });
    }
}

// ============================================
// Scroll to Top Button (optional enhancement)
// ============================================
window.addEventListener('scroll', function() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollTopBtn = document.getElementById('scroll-top-btn');
    
    if (scrollTopBtn) {
        if (scrollTop > 300) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    }
});

// ============================================
// Header Scroll Effect (optional enhancement)
// ============================================
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    
    if (header) {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.15)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    }
});

// ============================================
// Add CSS for mobile menu (if needed)
// ============================================
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .nav-menu {
            position: fixed;
            top: 70px;
            left: 0;
            width: 100%;
            background: white;
            flex-direction: column;
            padding: 20px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            transform: translateX(-100%);
            transition: transform 0.3s ease;
        }
        
        .nav-menu.active {
            transform: translateX(0);
        }
        
        .mobile-menu-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .mobile-menu-toggle.active span:nth-child(2) {
            opacity: 0;
        }
        
        .mobile-menu-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    }
`;
document.head.appendChild(style);
