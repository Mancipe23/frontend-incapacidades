document
.getElementById('btnLogin')
.addEventListener('click', async () => {

    const usuario =
        document.getElementById('usuario').value;

    const contrasena =
        document.getElementById('contrasena').value;

    const mensaje =
        document.getElementById('mensaje');

    try {

        const respuesta = await fetch(
            'http://localhost/backend-incapacidades/ms-auth/public/login',
            {
                method: 'POST',

                headers: {
                    'Content-Type':
                        'application/json'
                },

                body: JSON.stringify({
                    usuario,
                    contrasena
                })
            }
        );

        const data =
            await respuesta.json();

        if (
            respuesta.ok
        ) {

            mensaje.innerHTML =
                'Login correcto';

            localStorage.setItem(
                'token',
                data.token
            );

            window.location.href =
                'pages/dashboard.html';

        } else {

            mensaje.innerHTML =
                data.mensaje;
        }

    } catch (error) {

        mensaje.innerHTML =
            'Error de conexión';
    }
});
