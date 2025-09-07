(function swapMode(){
    let isDarkMode = true;

    function setDarkMode() {
        document.documentElement.style.setProperty('--corPrincipal', '#080808');
        document.documentElement.style.setProperty('--corSecundaria', '#191919');
        document.documentElement.style.setProperty('--corTerciaria', '#2a2a2a');
        document.documentElement.style.setProperty('--corText', '#ffffff');
        document.documentElement.style.setProperty('--corTextSecundaria', '#C5C5C5');
        document.documentElement.style.setProperty('--corTextTerciaria', '#8491A0');
        changeSvgFill('white'); 
        isDarkMode = true;
    }

    function setLightMode() {
        document.documentElement.style.setProperty('--corPrincipal', '#f5f5f5');
        document.documentElement.style.setProperty('--corSecundaria', 'linear-gradient(to bottom, #eaeaea, transparent)');
        document.documentElement.style.setProperty('--corTerciaria', '#dcdcdc');
        document.documentElement.style.setProperty('--corText', '#080808');
        document.documentElement.style.setProperty('--corTextSecundaria', '#333333');
        document.documentElement.style.setProperty('--corTextTerciaria', '#555555');
        changeSvgFill('black'); 
        isDarkMode = false;
    }

    function toggleMode() {
        if (isDarkMode) {
            setLightMode();
        } else {
            setDarkMode();
        }
    }

    function changeSvgFill(color) {
        const elements = document.querySelectorAll('svg [fill]');
        elements.forEach(element => {
            const currentFill = element.getAttribute('fill');
            if (currentFill === 'white' || currentFill === 'black') {
                element.setAttribute('fill', color);
            }
        });
    }

    // Detecta hora atual para definir o tema inicial
    function setModeByTime() {
        const hour = new Date().getHours();
        if (hour >= 6 && hour < 18) {
            setLightMode(); // Dia → Light
        } else {
            setDarkMode();  // Noite → Dark
        }
    }

    // Inicializa com base na hora
    setModeByTime();

    const toggleButton = document.getElementById('toggle-mode');
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleMode);
    }

    document.addEventListener('click', (e) => {
        const element = e.target;
        if (element.classList.contains('sem-deploy')) {
            alert('O deploy deste site ainda não foi realizado, mas sinta-se à vontade para olhar o repositório.');
        }
    });
})();
