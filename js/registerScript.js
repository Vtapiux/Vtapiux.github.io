// Función para generar un hash SHA256
function generarSHA256(str) {
    // Aquí puedes usar una librería como CryptoJS o una API web para generar el hash
    return CryptoJS.SHA256(str).toString();
  }
  
//   function generarID() {
//     // Esta función generará un ID aleatorio de 4 dígitos
//     return Math.floor(Math.random() * 9000) + 1000;
//   }
  
  // Función que se ejecutará cuando se haga clic en el botón
  function enviarRegistro() {

    event.preventDefault(); // Prevenir el envío predeterminado del formulario

    // Crear un objeto XMLHttpRequest
    let xhr = new XMLHttpRequest();
  
    // Configurar la solicitud POST a la URL del servidor
    xhr.open('POST', 'http://monsterballgo.com/api/register.php', true);
  
    // Establecer la cabecera para el tipo de contenido
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  
    // Crear una función para manejar la respuesta del servidor
    xhr.onload = function () {
      // Verificar si la solicitud fue exitosa
      if (xhr.status >= 200 && xhr.status < 400) {
        // Intentar analizar la respuesta JSON del servidor
        try {
          let response = JSON.parse(xhr.responseText);
          console.log(response);
          // Manejar la respuesta aquí
        } catch (e) {
          // Manejar errores al analizar la respuesta JSON
          console.error('Error al analizar la respuesta:', e);
        }
      } else {
        // Manejar otros errores de la solicitud
        console.error('Error en la solicitud:', xhr.status);
      }
    };
  
    // Obtener los valores del formulario
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
  
    // Aplicar el hash SHA256 a la contraseña
    let hashedPassword = generarSHA256(password);
  
    // Generar un ID aleatorio
    let id = document.getElementById('id').value;
  
    // Formatear los datos para enviarlos como x-www-form-urlencoded
    let data = `token=code37&id=${id}&username=${encodeURIComponent(username)}&pass=${encodeURIComponent(hashedPassword)}&firstname=${encodeURIComponent(firstname)}&lastname=${encodeURIComponent(lastname)}&email=${encodeURIComponent(email)}`;
    
    console.log(data);

    // Enviar la solicitud con los datos
    xhr.send(data);
  }
  
  // Agregar el evento click al botón
  document.getElementById('sing_up_button').addEventListener('click', enviarRegistro);
  