if (!localStorage.getItem('token')) {

    window.location.href =
        '../index.html';

}

async function registrarEmpleado() {

    try {

        const datos = {

            nombres:
                document.getElementById(
                    'nombres'
                ).value,

            apellidos:
                document.getElementById(
                    'apellidos'
                ).value,

            documento:
                document.getElementById(
                    'documento'
                ).value,

            correo:
                document.getElementById(
                    'correo'
                ).value,

            telefono:
                document.getElementById(
                    'telefono'
                ).value,

            cargo:
                document.getElementById(
                    'cargo'
                ).value,

            area:
                document.getElementById(
                    'area'
                ).value,

            fecha_ingreso:
                document.getElementById(
                    'fecha_ingreso'
                ).value

        };

        const respuesta = await fetch(

            'http://localhost/backend-incapacidades/ms-empleados/public/empleados',

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
            'Error registrando empleado'
        );
    }
}

async function cargarEmpleados() {

    try {

        const respuesta = await fetch(
            'http://localhost/backend-incapacidades/ms-empleados/public/empleados'
        );

        const empleados =
            await respuesta.json();

        const tabla =
            document.getElementById(
                'tablaEmpleados'
            );

        tabla.innerHTML = '';

        empleados.forEach(
            empleado => {

                tabla.innerHTML += `

                <tr>

                    <td>${empleado.id}</td>

                    <td>${empleado.nombres}</td>

                    <td>${empleado.apellidos}</td>

                    <td>${empleado.cargo}</td>

                    <td>${empleado.area}</td>

                </tr>

                `;
            }
        );

    } catch (error) {

        console.error(error);

        alert(
            'Error cargando empleados'
        );
    }
}

cargarEmpleados();