 const voluntariado = [
    {
      img: "./assets/img/unb.png",
      titulo: "Monitor de Estrutura de Dados 1 - UnB",
      periodo: "04/2025 - presente",
      descricao: "Auxiliei discentes na resolução de problemas com estruturas de dados em C."
    },
    {
      img: "./assets/img/unb.png",
      titulo: "Monitor de Orientação a objetos - UnB",
      periodo: "10/2024 - 02/2025",
      descricao: "Auxiliei discentes na resolução de problemas e paradigmas da Orientação a objetos, utilizando Python."
    }
  ];

  const containerVol = document.getElementById("container-voluntariado");

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