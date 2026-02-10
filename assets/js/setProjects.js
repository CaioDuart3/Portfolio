(function setProjects() {
  // Função para renderizar projetos do JSON
  function renderProjects() {
    const projetos = portfolioData.projects || [];
    const container = document.getElementById("container-projetos");

    if (!container) {
      console.warn("Container projetos não encontrado");
      return;
    }

    // Loop para criar os cards
    projetos.forEach((proj) => {
      // cria o HTML das badges
      const badges = proj.tecnologias
        .map((tec) => `<span class="badge">${tec}</span>`)
        .join("");

      // template do card
      const card = `
        <div class="projeto-item">
          <img src="${proj.img}" alt="${proj.titulo}" />
          <div class="projeto-item-inferior">
            <div class="projeto-item-inferior-texto">
              <p>${proj.descricao}</p>
              <h2>${proj.titulo}</h2>
              <div class="container-badge">
                ${badges}
              </div>
            </div>
            <div class="projeto-item-inferior-icons">
              <a href="${proj.github}" target="_blank" title="GitHub Repository">
                <!-- GitHub Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.544 2.914 1.186.092-.923.35-1.544.636-1.899-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </a>
              <a href="${proj.deploy}" target="_blank" title="Live Demo">
                <!-- Play Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      `;

      // insere no container
      container.innerHTML += card;
    });
  }

  // Aguarda o carregamento dos dados do JSON antes de renderizar
  const checkDataInterval = setInterval(() => {
    if (Object.keys(portfolioData).length > 0) {
      clearInterval(checkDataInterval);
      renderProjects();
    }
  }, 100);
})();
