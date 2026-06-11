if (!localStorage.getItem('token')) {

    window.location.href =
        '../index.html';

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
