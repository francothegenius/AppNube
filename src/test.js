let miTitulo,miClave,miTexto;

function escribe() {
    escribir = document.getElementById("caja")
    miTitulo = "<h1>" + document.rellenar.titulo.value + "</h1>"
    miClave = "<h3>" + document.rellenar.clave.value + "</h3>"
    miTexto = "<p>" + document.rellenar.texto.value + "</p>"
    escribir.innerHTML = miTitulo + miClave + miTexto
    }
/*function delt() {
    escribir = document.getElementById("caja")
    escribir.innerHTML = ""
}*/
document.getElementById("demo").innerHTML = "Hello JavaScript!";
window.onload = function() {
    document.rellenar.ver.onclick = escribe
    //document.rellenar2.del.onclick=delt
}