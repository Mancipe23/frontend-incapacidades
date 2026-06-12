if (!localStorage.getItem('token')) {

    window.location.href =
        '../index.html';

}

async function registrarSeguimiento() {

    try {

        const datos = {

            incapacidad_id:
                document.getElementById(
                    'incapacidad_id'
                ).value,

            fecha:
                document.getElementById(
                    'fecha'
                ).value,

            comentario:
                document.getElementById(
                    'comentario'
                ).value,

            estado:
                document.getElementById(
                    'estado'
                ).value,

            usuario_responsable:
                document.getElementById(
                    'usuario_responsable'
                ).value

        };

        const respuesta = await fetch(

            'http://localhost/backend-incapacidades/ms-seguimiento/public/seguimientos',

            {
                method: 'POST',

                headers: {
                    'Content-Type':
                        'application/json'
                },

                body: JSON.stringify(
                    datos
                )
            }
        );

        const resultado =
            await respuesta.json();

        alert(
            resultado.mensaje
        );

        location.reload();

    } catch (error) {

        console.error(error);

        alert(
            'Error registrando seguimiento'
        );
    }
}

async function cargarSeguimientos() {

    try {

        const respuesta = await fetch(
            'http://localhost/backend-incapacidades/ms-seguimiento/public/seguimientos'
        );

        const seguimientos =
            await respuesta.json();

        const tabla =
            document.getElementById(
                'tablaSeguimientos'
            );

        tabla.innerHTML = '';

        seguimientos.forEach(
            seguimiento => {

                tabla.innerHTML += `

                <tr>

                    <td>${seguimiento.id}</td>

                    <td>${seguimiento.incapacidad_id}</td>

                    <td>${seguimiento.fecha}</td>

                    <td>${seguimiento.comentario}</td>

                    <td>${seguimiento.estado}</td>

                    <td>${seguimiento.usuario_responsable}</td>

                </tr>

                `;
            }
        );

    } catch (error) {

        console.error(error);

        alert(
            'Error cargando seguimientos'
        );
    }
}

cargarSeguimientos();