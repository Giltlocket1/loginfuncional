// Función para mostrar un mensaje de error con SweetAlert
const mensaje_error = (msj) => {
    swal({
        title: "Error!",
        text: msj,
        icon: "warning",
        button: "Aceptar"
    });
}

// Función para mostrar un mensaje de éxito con SweetAlert
const mensaje_exito = (msj) => {
    swal({
        title: "Correcto!",
        text: msj,
        icon: "success",
        button: "Aceptar"
    });
}

// Función para validar que los campos no estén vacíos y que la contraseña sea segura
const validar_campos = () => {
    const nombre = $("#nombre").val().trim();
    const apellido = $("#apellido").val().trim();
    const usuario = $("#usuario").val().trim();
    const password = $("#password").val().trim();

    // Validación de campos vacíos
    if (nombre === "" || apellido === "" || usuario === "" || password === "") {
        mensaje_error("Todos los campos deben estar llenos.");
        return false;
    }

    // Validación de la contraseña (mínimo 8 caracteres, una mayúscula y un carácter especial)
    const regexPassword = /^(?=.*[A-Z])(?=.*\W).{8,}$/;
    if (!regexPassword.test(password)) {
        mensaje_error("La contraseña debe tener al menos 8 caracteres, una mayúscula y un carácter especial.");
        return false;
    }

    return true;
}

// Función para iniciar el registro
const iniciar_registro = () => {
    // Validar los campos antes de proceder
    if (!validar_campos()) return; // Detener si los campos no cumplen con las validaciones

    let data = new FormData();
    data.append("nombre", $("#nombre").val());
    data.append("apellido", $("#apellido").val());
    data.append("usuario", $("#usuario").val());
    data.append("password", $("#password").val());
    data.append("metodo", "iniciar_registro");

    fetch("./app/controller/Registro.php", {
        method: "POST",
        body: data
    })
    .then(respuesta => respuesta.json())
    .then(respuesta => {
        if (respuesta[0] == 1) {
            mensaje_exito(respuesta[1]); // Mostrar mensaje de éxito
            setTimeout(() => {
                window.location = "login";
            }, 2000); // Redirigir después de un breve retraso
        } else {
            mensaje_error(respuesta[1]); // Mostrar mensaje de error
        }
    });
}

// Evento de clic en el botón de registro
$("#btn_registro").on('click', () => {
    iniciar_registro();
});
