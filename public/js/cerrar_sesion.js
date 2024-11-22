const cerrar_sesion = () => {
    let data = new FormData();
    data.append("metodo", "cerrar_sesion");

    fetch("./app/controller/Login.php", {
        method: "POST",
        body: data
    })
    .then(respuesta => respuesta.json())
    .then(respuesta => {
        swal({
            title: "Cierre de sesión",
            text: respuesta[1],
            icon: "success",
            buttons: false,
            timer: 2000 // Muestra el mensaje durante 2 segundos
        }).then(() => {
            window.location = "login";
        });
    });
}

// Asignar el evento al botón de cerrar sesión
$("#btn_cerrar").on('click', () => {
    cerrar_sesion();
});
