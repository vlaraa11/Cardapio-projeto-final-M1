 // Alternar entre modo claro e escuro
  function toggleMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    toggleModeButton.textContent = isDarkMode ? "Modo Claro" : "Modo Escuro";
  }
