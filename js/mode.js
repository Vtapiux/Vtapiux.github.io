function toggleMode(mode) {
    const html = document.getElementById('html');
    const modeButton = document.getElementById('mode-button');
    const currentMode = html.getAttribute('data-mode');

    if (mode === 'dark') {
        html.setAttribute('data-mode', 'dark');
    } else {
        html.setAttribute('data-mode', 'light');
    }
}