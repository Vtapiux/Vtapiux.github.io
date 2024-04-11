document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.language-button');
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        const language = this.getAttribute('data-lang');
        fetchTranslations(language);
      });
    });
  });
  
  function fetchTranslations(lang) {
    fetch('json/languages.json')
      .then(response => response.json())
      .then(data => {
        document.getElementById('hello_world').textContent = data[lang].hello_world;
        document.getElementById('msg_enter').textContent = data[lang].msg_enter;
      })
      .catch(error => console.error('Error loading the language file: ', error));
  }