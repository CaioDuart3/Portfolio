(function setExperiences() {
  // Função para renderizar experiências do JSON
  function renderExperiences() {
    const experiencias = portfolioData.experiences || [];
    const containerExp = document.getElementById("container-experiencias");

    if (!containerExp) {
      console.warn("Container experiencias não encontrado");
      return;
    }

    experiencias.forEach(exp => {
      const card = `
        <div class="container-experiencias">
          <div class="exp-item">
            <div class="exp-item-info">
              <div class="exp-item-info-name-icon">
                <img src="${exp.img}" alt="${exp.titulo}" />
                <h2>${exp.titulo}</h2>
              </div>
              <p>${exp.periodo}</p>
            </div>
            <p class="exp-info-text">
              ${exp.descricao}
            </p>
          </div>
        </div>
      `;
      containerExp.innerHTML += card;
    });
  }

  // Aguarda o carregamento dos dados do JSON antes de renderizar
  const checkDataInterval = setInterval(() => {
    if (Object.keys(portfolioData).length > 0) {
      clearInterval(checkDataInterval);
      renderExperiences();
    }
  }, 100);
})();