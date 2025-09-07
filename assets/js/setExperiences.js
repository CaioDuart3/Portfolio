  const experiencias = [
    {
      img: "./assets/img/cnpq.png",
      titulo: "Pesquisador - PIBIC",
      periodo: "08/2025 - presente",
      descricao: "Desenvolvimento de uma API inteligente para processamento de prontuários médicos, utilizando técnicas avançadas de visão computacional, incluindo OCR e OpenCV, para extração e análise automatizada de informações."
    },
    {
      img: "./assets/img/orc.svg",
      titulo: "Assessor de projetos - Orc'estra (Empresa Júnior)",
      periodo: "01/2025 - presente",
      descricao: "Participei da elicitação e priorização de requisitos de projetos e atuei no desenvolvimento de um sistema mobile gamificado. Além disso, participei da elaboração de manuais internos de capacitação destinado aos colaboradores da empresa."
    },
    {
      img: "./assets/img/orc.svg",
      titulo: "Trainee - Orc'estra (Empresa Júnior)",
      periodo: "09/2024 - 01/2025",
      descricao: "Participei de treinamentos e capacitações de Figma, Gamificação, Github, HTML/CSS e React"
    },
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