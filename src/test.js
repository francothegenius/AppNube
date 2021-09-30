let miTitulo,miClave,miTexto;
/*const Http = new XMLHttpRequest();
const url='https://raw.githubusercontent.com/francothegenius/AppNube/htmlBranch/src/rut/ele.json';
Http.open("GET", url);
Http.send();*/


    const requestURL = 'https://raw.githubusercontent.com/francothegenius/AppNube/htmlBranch/src/rut/ele.json';
    const request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    const requestURL2 = 'https://raw.githubusercontent.com/francothegenius/AppNube/htmlBranch/src/rut/2.json';
    const request2 = new XMLHttpRequest();
    request2.open('GET', requestURL2);
    request2.responseType = 'json';
    request2.send();

    const requestURL3 = 'https://raw.githubusercontent.com/francothegenius/AppNube/htmlBranch/src/rut/3.json';
    const request3 = new XMLHttpRequest();
    request3.open('GET', requestURL3);
    request3.responseType = 'json';
    request3.send();
    
    const requestURL4 = 'https://raw.githubusercontent.com/francothegenius/AppNube/htmlBranch/src/rut/4.json';
    const request4 = new XMLHttpRequest();
    request4.open('GET', requestURL4);
    request4.responseType = 'json';
    request4.send();

function escribe() {
    const info = request.response;
    t = document.getElementById("caja")
    t1 = document.getElementById("t1")
    t2 = document.getElementById("t2")
    t3 = document.getElementById("t3")
    
    t.innerHTML = info["result"][0]["Direccion"];
    t1.innerHTML = "Resultado 1 de casa electrica";
    t2.innerHTML = info["result"][0]["Consumo"];
    t3.innerHTML = info["result"][0]["TipoEnergia"];

    ta = document.getElementById("caja1")
    ta1 = document.getElementById("ta1")
    ta2 = document.getElementById("ta2")
    ta3 = document.getElementById("ta3")
    
    ta.innerHTML = info["result"][1]["Direccion"];
    ta1.innerHTML = "Resultado 2 de casa electrica";
    ta2.innerHTML = info["result"][1]["Consumo"];
    ta3.innerHTML = info["result"][1]["TipoEnergia"];

    tb = document.getElementById("caja2")
    tb1 = document.getElementById("tb1")
    tb2 = document.getElementById("tb2")
    tb3 = document.getElementById("tb3")
    
    tb.innerHTML = info["result"][2]["Direccion"];
    tb1.innerHTML = "Resultado 3 de casa electrica";
    tb2.innerHTML = info["result"][2]["Consumo"];
    tb3.innerHTML = info["result"][2]["TipoEnergia"];
}
function escribe2() {
    const info2 = request2.response;
    t = document.getElementById("caja")
    t1 = document.getElementById("t1")
    t2 = document.getElementById("t2")
    t3 = document.getElementById("t3")
    
    t.innerHTML = info2["result"][0]["Direccion"];
    t1.innerHTML = "Resultado 1 de casa eolica";
    t2.innerHTML = info2["result"][0]["Consumo"];
    t3.innerHTML = info2["result"][0]["TipoEnergia"];

    ta = document.getElementById("caja1")
    ta1 = document.getElementById("ta1")
    ta2 = document.getElementById("ta2")
    ta3 = document.getElementById("ta3")
    
    ta.innerHTML = "";
    ta1.innerHTML = "";
    ta2.innerHTML = "";
    ta3.innerHTML = "";

    tb = document.getElementById("caja2")
    tb1 = document.getElementById("tb1")
    tb2 = document.getElementById("tb2")
    tb3 = document.getElementById("tb3")
    
    tb.innerHTML = ""
    tb1.innerHTML = "";
    tb2.innerHTML = "";
    tb3.innerHTML = "";
}

function escribe3() {
    const info = request3.response;
    t = document.getElementById("caja")
    t1 = document.getElementById("t1")
    t2 = document.getElementById("t2")
    t3 = document.getElementById("t3")
    
    t.innerHTML = info["result"][0]["Direccion"];
    t1.innerHTML = "Resultado 1 de casa solar";
    t2.innerHTML = info["result"][0]["Consumo"];
    t3.innerHTML = info["result"][0]["TipoEnergia"];

    ta = document.getElementById("caja1")
    ta1 = document.getElementById("ta1")
    ta2 = document.getElementById("ta2")
    ta3 = document.getElementById("ta3")
    
    ta.innerHTML = info["result"][1]["Direccion"];
    ta1.innerHTML = "Resultado 2 de casa solar";
    ta2.innerHTML = info["result"][1]["Consumo"];
    ta3.innerHTML = info["result"][1]["TipoEnergia"];

    tb = document.getElementById("caja2")
    tb1 = document.getElementById("tb1")
    tb2 = document.getElementById("tb2")
    tb3 = document.getElementById("tb3")
    
    tb.innerHTML = info["result"][2]["Direccion"];
    tb1.innerHTML = "Resultado 3 de casa solar";
    tb2.innerHTML = info["result"][2]["Consumo"];
    tb3.innerHTML = info["result"][2]["TipoEnergia"];
}

function escribe3() {
    const info = request3.response;
    t = document.getElementById("caja")
    t1 = document.getElementById("t1")
    t2 = document.getElementById("t2")
    t3 = document.getElementById("t3")
    
    t.innerHTML = info["result"][0]["Direccion"];
    t1.innerHTML = "Resultado 1 de casa solar";
    t2.innerHTML = info["result"][0]["Consumo"];
    t3.innerHTML = info["result"][0]["TipoEnergia"];

    ta = document.getElementById("caja1")
    ta1 = document.getElementById("ta1")
    ta2 = document.getElementById("ta2")
    ta3 = document.getElementById("ta3")
    
    ta.innerHTML = info["result"][1]["Direccion"];
    ta1.innerHTML = "Resultado 2 de casa solar";
    ta2.innerHTML = info["result"][1]["Consumo"];
    ta3.innerHTML = info["result"][1]["TipoEnergia"];

    tb = document.getElementById("caja2")
    tb1 = document.getElementById("tb1")
    tb2 = document.getElementById("tb2")
    tb3 = document.getElementById("tb3")
    
    tb.innerHTML = info["result"][2]["Direccion"];
    tb1.innerHTML = "Resultado 3 de casa solar";
    tb2.innerHTML = info["result"][2]["Consumo"];
    tb3.innerHTML = info["result"][2]["TipoEnergia"];
}

function escribe4() {
    const info = request4.response;
    t = document.getElementById("caja")
    t1 = document.getElementById("t1")
    t2 = document.getElementById("t2")
    t3 = document.getElementById("t3")
    
    t.innerHTML = info["result"][0]["Tipo"];
    t1.innerHTML = "Resultado 1 de precio de energia";
    t2.innerHTML = info["result"][0]["Nombre"];
    t3.innerHTML = info["result"][0]["Precio"];

    ta = document.getElementById("caja1")
    ta1 = document.getElementById("ta1")
    ta2 = document.getElementById("ta2")
    ta3 = document.getElementById("ta3")
    
    ta.innerHTML = info["result"][1]["Tipo"];
    ta1.innerHTML = "Resultado 2 de precio de energia";
    ta2.innerHTML = info["result"][1]["Nombre"];
    ta3.innerHTML = info["result"][1]["Precio"];

    tb = document.getElementById("caja2")
    tb1 = document.getElementById("tb1")
    tb2 = document.getElementById("tb2")
    tb3 = document.getElementById("tb3")
    
    tb.innerHTML = info["result"][2]["Tipo"];
    tb1.innerHTML = "Resultado 3 de precio de energia";
    tb2.innerHTML = info["result"][2]["Nombre"];
    tb3.innerHTML = info["result"][2]["Precio"];
}

/*function delt() {
    escribir = document.getElementById("caja")
    escribir.innerHTML = Http.responseText
}*/

window.onload = function() {
    document.rellenar.ver.onclick = escribe
    document.rellenar2.ver2.onclick = escribe2
    document.rellenar3.ver3.onclick = escribe3
    document.rellenar4.ver4.onclick = escribe4
    //document.rellenar2.del.onclick=delt
}