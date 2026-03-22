let mensaje = "HTML y CSS es la base de todas las páginas web. Define la estructura de una página, mientras que CSS define su estilo.";

/** Funcion para mostrar mensaje de ingreso al blog */
function button() {
    onclick = alert("Accediendo a Frontend Mentor");
}

/** Funcion para mostrar acceso desde el título */
function titulo() {
    onclick = alert(mensaje);
}

/** Función para direccionar al blog **/
const acceso = document.getElementById("button").addEventListener("click", function() {
    window.open("http://www.frontendmentor.io?ref=challenge", "_blank");
});
