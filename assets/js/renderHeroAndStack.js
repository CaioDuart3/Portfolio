// Render Hero Section (Início) from JSON
(function renderHeroSection() {
  function renderInicio() {
    const info = portfolioData.personalInfo;
    const social = portfolioData.social;
    
    if (!info) return;
    
    const inicioDiv = document.getElementById('inicio');
    if (!inicioDiv) return;
    
    // Extract first name for styling
    const nameParts = info.name.split(' ');
    const firstName = nameParts[0];
    const restOfName = nameParts.slice(1).join(' ');
    
    const socialLinksHTML = `
      <a href="${social.github}" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.544 2.914 1.186.092-.923.35-1.544.636-1.899-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
        </svg>
      </a>
      <a href="${social.linkedin}" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="36" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.735-2.004 1.44-.103.25-.129.599-.129.948v5.417h-3.554V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.931-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.134-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </a>
    `;
    
    const buttonsHTML = `
      <a href="${social.whatsapp}" target="_blank">
        <button class="btn-entrar-contato">Entrar em contato</button>
      </a>
      <a href="${info.cvFile}" download>
        <button class="btn-baixar-cv">Baixar CV</button>
      </a>
    `;
    
    const heroHTML = `
      <div class="elementos-inicio">
        <div class="elementos-inicio-texto">
          <h1>Olá, me chamo <b class="colorir-texto">${firstName} ${restOfName}</b></h1>
          <p>
            ${info.description}
          </p>
        </div>
        <div class="elementos-inicio-contatos">
          ${socialLinksHTML}
        </div>
        <div class="elementos-inicio-btn">
          ${buttonsHTML}
        </div>
      </div>
      <img class="formato-img-perfil" src="${info.profileImage}" alt="${info.name}" />
    `;
    
    inicioDiv.innerHTML = heroHTML;
  }

  // Aguarda o carregamento dos dados do JSON antes de renderizar
  const checkDataInterval = setInterval(() => {
    if (Object.keys(portfolioData).length > 0) {
      clearInterval(checkDataInterval);
      renderInicio();
    }
  }, 100);
})();

// Render Stack Section from JSON
(function renderStackSection() {
  function renderStack() {
    const stack = portfolioData.stack || [];
    const ferramentasDiv = document.getElementById('ferramentas');
    
    if (!ferramentasDiv) return;
    
    const stackContainer = ferramentasDiv.querySelector('div');
    if (!stackContainer) return;
    
    const stackHTML = stack
      .map(tech => `
        <abbr title="${tech.name}">
          <img src="${tech.icon}" alt="${tech.name}" />
        </abbr>
      `)
      .join('');
    
    stackContainer.innerHTML = stackHTML;
  }

  // Aguarda o carregamento dos dados do JSON antes de renderizar
  const checkDataInterval = setInterval(() => {
    if (Object.keys(portfolioData).length > 0) {
      clearInterval(checkDataInterval);
      renderStack();
    }
  }, 100);
})();
