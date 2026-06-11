if (!localStorage.getItem('token')) {

    window.location.href =
        '../index.html';

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
