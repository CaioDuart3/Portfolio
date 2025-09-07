(function setProjects() {
  const projetos = [
    {
      img: "./assets/img/mmts.png",
      descricao: "Sistema Gerenciador",
      titulo: "Mamutes do Cerrado",
      tecnologias: ["Django", "JS"],
      github: "https://github.com/FGA0138-MDS-Ajax/2024.2-Aries",
      deploy:
        "https://administrative-cora-caioduart3-b3c98e61.koyeb.app/#quemsomos",
    },
    {
      img: "./assets/img/Medconnect.png",
      descricao: "Avaliador de hospitais",
      titulo: "MedConnect",
      tecnologias: ["Django", "Figma"],
      github: "https://github.com/CaioDuart3/medconnect-verde-pantano",
      deploy: "https://medconnect-verde-pantano.vercel.app/",
    },
    {
      img: "./assets/img/lp_Outcom.png",
      descricao: "Desenvolvido para a Out.com",
      titulo: "Landing page",
      tecnologias: ["HTML", "JS", "CSS"],
      github: "https://github.com/CaioDuart3/lp_Outcom",
      deploy: "https://outcom.netlify.app/",
    },
  ];

  const container = document.getElementById("container-projetos");

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
            <a href="${proj.github}" target="_blank">
              <!-- ícone GitHub -->
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26V21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z" fill="white"/>
              </svg>
            </a>
            <a href="${proj.deploy}" target="_blank">
              <!-- ícone externo -->
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                <path d="M5.68746 17.5C5.68746 15.0063 7.71454 12.9792 10.2083 12.9792H16.0416V10.2083H10.2083C6.18329 10.2083 2.91663 13.475 2.91663 17.5C2.91663 21.525 6.18329 24.7917 10.2083 24.7917H16.0416V22.0208H10.2083C7.71454 22.0208 5.68746 19.9938 5.68746 17.5ZM11.6666 18.9583H23.3333V16.0417H11.6666V18.9583ZM24.7916 10.2083H18.9583V12.9792H24.7916C27.2854 12.9792 29.3125 15.0063 29.3125 17.5C29.3125 19.9938 27.2854 22.0208 24.7916 22.0208H18.9583V24.7917H24.7916C28.8166 24.7917 32.0833 21.525 32.0833 17.5C32.0833 13.475 28.8166 10.2083 24.7916 10.2083Z" fill="white"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    `;

    // insere no container
    container.innerHTML += card;
  });
})();
