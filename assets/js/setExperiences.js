  const experiencias = [
    {
      img: "./assets/img/cnpq.png",
      titulo: "Pesquisador - PIBIC",
      periodo: "08/2025 - presente",
      descricao: "Desenvolvimento de uma API inteligente para processamento de prontuários médicos, utilizando técnicas avançadas de visão computacional, incluindo OCR e OpenCV, para extração e análise automatizada de informações."
    },
    {
      img: "./assets/img/orc_color.png",
      titulo: "Assessor de projetos - Orc'estra Gamificação",
      periodo: "01/2025 - presente",
      descricao: "Participei da elicitação e priorização de requisitos de projetos e atuei no desenvolvimento de um sistema mobile gamificado. Além disso, participei da elaboração de manuais internos de capacitação destinado aos colaboradores da empresa."
    },
    {
      img: "./assets/img/orc_color.png",
      titulo: "Trainee - Orc'estra Gamificação",
      periodo: "09/2024 - 01/2025",
      descricao: "Participei de treinamentos e capacitações de Figma, Gamificação, Github, HTML/CSS e React"
    }
  ];

  const containerExp = document.getElementById("container-experiencias");

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