// Función para generar un hash SHA256
function generarSHA256(str) {
    // Aquí puedes usar una librería como CryptoJS o una API web para generar el hash
    return CryptoJS.SHA256(str).toString();
}


// Función que se ejecutará cuando se haga clic en el botón
function enviarRegistro() {
    // Crear un objeto XMLHttpRequest
    let xhr = new XMLHttpRequest();

    // Configurar la solicitud POST a la URL del servidor
    xhr.open('POST', 'http://monsterballgo.com/api/login.php', true);

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

                // Verificar si hay un error en la respuesta del servidor
                if (response.error) {
                    // Manejar el error, por ejemplo, mostrando un mensaje de error al usuario
                    console.error('Error en el inicio de sesión:', response.error);
                } else {
                    // Manejar aquí el caso de inicio de sesión exitoso
                    console.log('Inicio de sesión exitoso:', response);
                    // Construir la URL con los datos del usuario
                    let profileUrl = `session.html?username=${encodeURIComponent(response.username)}&xp=${encodeURIComponent(response.xp)}&email=${encodeURIComponent(response.email)}&credits=${encodeURIComponent(response.credits)}&firstname=${encodeURIComponent(response.firstname)}&lastname=${encodeURIComponent(response.lastname)}&pfp_url=${encodeURIComponent(response.pfp_url)}`;
                    // Redirigir al usuario a la página de perfil con los datos
                    window.location.href = profileUrl;
                }


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
    let user = document.getElementById('user').value;
    let password = document.getElementById('password').value;
    // Aplicar el hash SHA256 a la contraseña
    let hashedPassword = generarSHA256(password);

    console.log(user);
    console.log(password);

    // Formatear los datos para enviarlos como x-www-form-urlencoded
    let data = `token=code37&user=${encodeURIComponent(user)}&pass=${encodeURIComponent(hashedPassword)}`;
    // let data = "token=code37&user=asbo&pass=34659348569";
    console.log(data);
    // Enviar la solicitud con los datos
    xhr.send(data);
}



document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevenir el envío predeterminado del formulario

    // Resto del código para enviar el formulario, manejar la respuesta del servidor, etc.
    // Agregar el evento click al botón
    document.getElementById('sign_in').addEventListener('click', enviarRegistro);
});
