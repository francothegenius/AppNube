let miTitulo,miClave,miTexto;
const Http = new XMLHttpRequest();
const url='https://raw.githubusercontent.com/francothegenius/AppNube/htmlBranch/src/rut/ele.json';
Http.open("GET", url);
Http.send();


    const requestURL = 'https://raw.githubusercontent.com/francothegenius/AppNube/htmlBranch/src/rut/ele.json';
    const request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    
function escribe() {
    escribir = document.getElementById("caja")
    //miTitulo = "<h1>" + document.rellenar.titulo.value + "</h1>"
    const superHeroes = request.response;
    escribir.innerHTML = superHeroes["result"][1]["Direccion"];
    }
function delt() {
    escribir = document.getElementById("caja")
    escribir.innerHTML = Http.responseText
}/**/

window.onload = function() {
    document.rellenar.ver.onclick = escribe
    document.rellenar2.del.onclick=delt
}