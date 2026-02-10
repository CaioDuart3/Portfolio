(function swapMode(){
    const html = document.documentElement;
    const toggleButton = document.getElementById('toggle-mode');
    
    // Detecta preferência salva, padrão é dark
    function initTheme() {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        html.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    }

    // Atualiza o visual do ícone conforme o tema
    function updateThemeIcon(theme) {
        const sunElements = document.querySelectorAll('.sun-icon');
        const moonElements = document.querySelectorAll('.moon-icon');
        
        if (theme === 'dark') {
            sunElements.forEach(el => el.style.display = 'none');
            moonElements.forEach(el => el.style.display = 'block');
        } else {
            sunElements.forEach(el => el.style.display = 'block');
            moonElements.forEach(el => el.style.display = 'none');
        }
    }

    // Toggle entre dark e light mode
    function toggleMode() {
        const currentTheme = html.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    }

    // Event listener para o botão
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleMode);
    }

    // Handler para o alert do sem-deploy
    document.addEventListener('click', (e) => {
        const element = e.target;
        if (element.classList.contains('sem-deploy')) {
            alert('O deploy deste site ainda não foi realizado, mas sinta-se à vontade para olhar o repositório.');
        }
    });

    // Inicializa o tema ao carregar
    initTheme();
})();

// Scroll animations
(function scrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Anima seções ao scroll
    const sections = document.querySelectorAll('#projetos, #experiencias, #voluntariado, #habilidades, #estatisticas, #cta-section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 600ms ease';
        observer.observe(section);
    });
})();

// Render skills, statistics and CTA from JSON
(function renderDynamicSections() {
    function renderSkills() {
        const skills = portfolioData.skills || [];
        const habilidadesDiv = document.getElementById('habilidades');
        
        if (!habilidadesDiv) return;
        
        const containerHTML = document.querySelector('.container-habilidades');
        if (!containerHTML) return;
        
        containerHTML.innerHTML = '';
        
        skills.forEach(skillGroup => {
            const skillsHTML = skillGroup.items
                .map(skill => `<span class="skill-tag">${skill}</span>`)
                .join('');
            
            const groupHTML = `
                <div class="habilidade-grupo">
                    <h3>${skillGroup.category}</h3>
                    <div class="habilidades-list">
                        ${skillsHTML}
                    </div>
                </div>
            `;
            
            containerHTML.innerHTML += groupHTML;
        });
    }

    function renderStatistics() {
        const stats = portfolioData.statistics || [];
        const statsContainer = document.querySelector('.stats-container');
        
        if (!statsContainer) return;
        
        statsContainer.innerHTML = '';
        
        stats.forEach(stat => {
            const statHTML = `
                <div class="stat-card">
                    <h2 class="stat-number">${stat.number}</h2>
                    <p class="stat-label">${stat.label}</p>
                </div>
            `;
            
            statsContainer.innerHTML += statHTML;
        });
    }

    function renderCTA() {
        const cta = portfolioData.cta;
        const ctaSection = document.getElementById('cta-section');
        
        if (!ctaSection || !cta) return;
        
        const buttonsHTML = cta.buttons
            .map(btn => `
                <a href="${btn.url}" target="_blank" class="cta-btn cta-btn ${btn.class}">
                    ${btn.text}
                </a>
            `)
            .join('');
        
        ctaSection.innerHTML = `
            <div class="cta-content">
                <h2>${cta.title}</h2>
                <p>${cta.description}</p>
                <div class="cta-buttons">
                    ${buttonsHTML}
                </div>
            </div>
        `;
    }

    // Aguarda o carregamento dos dados do JSON antes de renderizar
    const checkDataInterval = setInterval(() => {
        if (Object.keys(portfolioData).length > 0) {
            clearInterval(checkDataInterval);
            renderSkills();
            renderStatistics();
            renderCTA();
        }
    }, 100);
})();
