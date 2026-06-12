if (!localStorage.getItem('token')) {

    window.location.href =
        '../index.html';

}

async function registrarIncapacidad() {

    try {

        const datos = {

            empleado_id:
                document.getElementById(
                    'empleado_id'
                ).value,

            fecha_inicio:
                document.getElementById(
                    'fecha_inicio'
                ).value,

            fecha_fin:
                document.getElementById(
                    'fecha_fin'
                ).value,

            tipo:
                document.getElementById(
                    'tipo'
                ).value,

            diagnostico_general:
                document.getElementById(
                    'diagnostico_general'
                ).value,

            entidad_medica:
                document.getElementById(
                    'entidad_medica'
                ).value,

            observaciones:
                document.getElementById(
                    'observaciones'
                ).value

        };

        const respuesta = await fetch(

            'http://localhost/backend-incapacidades/ms-incapacidades/public/incapacidades',

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
            'Error registrando incapacidad'
        );
    }
}

async function cargarIncapacidades() {

    try {

        const respuesta = await fetch(
            'http://localhost/backend-incapacidades/ms-incapacidades/public/incapacidades'
        );

        const incapacidades =
            await respuesta.json();

        const tabla =
            document.getElementById(
                'tablaIncapacidades'
            );

        tabla.innerHTML = '';

        incapacidades.forEach(
            incapacidad => {

                tabla.innerHTML += `

                <tr>

                    <td>${incapacidad.id}</td>

                    <td>${incapacidad.empleado_id}</td>

                    <td>${incapacidad.tipo}</td>

                    <td>${incapacidad.fecha_inicio}</td>

                    <td>${incapacidad.fecha_fin}</td>

                    <td>${incapacidad.dias_incapacidad}</td>

                    <td>${incapacidad.estado}</td>

                </tr>

                `;
            }
        );

    } catch (error) {

        console.error(error);

        alert(
            'Error cargando incapacidades'
        );
    }
}

cargarIncapacidades();
