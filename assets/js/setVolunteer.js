 (function setVolunteer() {
  // Função para renderizar voluntariado do JSON
  function renderVolunteer() {
    const voluntariado = portfolioData.volunteer || [];
    const containerVol = document.getElementById("container-voluntariado");

    if (!containerVol) {
      console.warn("Container voluntariado não encontrado");
      return;
    }

    voluntariado.forEach(vol => {
      const card = `
        <div class="container-experiencias">
          <div class="exp-item">
            <div class="exp-item-info">
              <div class="exp-item-info-name-icon">
                <img src="${vol.img}" alt="${vol.titulo}" />
                <h2>${vol.titulo}</h2>
              </div>
              <p>${vol.periodo}</p>
            </div>
            <p class="exp-info-text">
              ${vol.descricao}
            </p>
          </div>
        </div>
      `;
      containerVol.innerHTML += card;
    });
  }

  // Aguarda o carregamento dos dados do JSON antes de renderizar
  const checkDataInterval = setInterval(() => {
    if (Object.keys(portfolioData).length > 0) {
      clearInterval(checkDataInterval);
      renderVolunteer();
    }
  }, 100);
})();