if (!localStorage.getItem('token')) {

    window.location.href =
        '../index.html';

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
