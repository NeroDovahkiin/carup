$("#formsServicio").css("display","none");
$(".mapo").css("display","none");



function Busqueda(){
    event.preventDefault();
    $("#divDatosUsuario").css("display","none");
    $("#formsServicio").css("display","inherit");
}

function mostrarMapa(){
    event.preventDefault();
    $(".mapo").css("display","inherit");
}

function ocultarMapa(){
    event.preventDefault();
    $(".mapo").css("display","none");
}