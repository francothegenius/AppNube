let miTitulo,miClave,miTexto;


    document.getElementById("botoncito").addEventListener("click", getData);
    async function getData() {
      try {
        var response = await fetch(
          "https://1uazs074uc.execute-api.us-east-1.amazonaws.com/dev/casaElectrica"
        );
        response = await response.json();
        console.log(response);
        t = document.getElementById("caja")
        t1 = document.getElementById("t1")
        t2 = document.getElementById("t2")
        t3 = document.getElementById("t3")

        t.innerHTML = response["result"][0]["Direccion"];
        t1.innerHTML = "Resultado 1 de casa electrica";
        t2.innerHTML = response["result"][0]["Consumo"];
        t3.innerHTML = response["result"][0]["TipoEnergia"];

        ta = document.getElementById("caja1")
        ta1 = document.getElementById("ta1")
        ta2 = document.getElementById("ta2")
        ta3 = document.getElementById("ta3")

        ta.innerHTML = response["result"][1]["Direccion"];
        ta1.innerHTML = "Resultado 2 de casa electrica";
        ta2.innerHTML = response["result"][1]["Consumo"];
        ta3.innerHTML = response["result"][1]["TipoEnergia"];

        tb = document.getElementById("caja2")
        tb1 = document.getElementById("tb1")
        tb2 = document.getElementById("tb2")
        tb3 = document.getElementById("tb3")

        tb.innerHTML = response["result"][2]["Direccion"];
        tb1.innerHTML = "Resultado 3 de casa electrica";
        tb2.innerHTML = response["result"][2]["Consumo"];
        tb3.innerHTML = response["result"][2]["TipoEnergia"];
      } catch (err) {
        console.error(err);
      }
    }


    document.getElementById("botoncito2").addEventListener("click", getData2);
    async function getData2() {
      try {
        var response = await fetch(
          "https://1uazs074uc.execute-api.us-east-1.amazonaws.com/dev/casaEolica"
        );
        response = await response.json();
        console.log(response);
        t = document.getElementById("caja")
        t1 = document.getElementById("t1")
        t2 = document.getElementById("t2")
        t3 = document.getElementById("t3")
        
        t.innerHTML = response["result"][0]["Direccion"];
        t1.innerHTML = "Resultado 1 de casa eolica";
        t2.innerHTML = response["result"][0]["Consumo"];
        t3.innerHTML = response["result"][0]["TipoEnergia"];

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

      } catch (err) {
        console.error(err);
      }
    }

    document.getElementById("botoncito3").addEventListener("click", getData3);
    async function getData3() {
      try {
        var response = await fetch(
          "https://1uazs074uc.execute-api.us-east-1.amazonaws.com/dev/casaSolar"
        );
        response = await response.json();
        console.log(response);
        t = document.getElementById("caja")
        t1 = document.getElementById("t1")
        t2 = document.getElementById("t2")
        t3 = document.getElementById("t3")
        
        t.innerHTML = response["result"][0]["Direccion"];
        t1.innerHTML = "Resultado 1 de casa solar";
        t2.innerHTML = response["result"][0]["Consumo"];
        t3.innerHTML = response["result"][0]["TipoEnergia"];

        ta = document.getElementById("caja1")
        ta1 = document.getElementById("ta1")
        ta2 = document.getElementById("ta2")
        ta3 = document.getElementById("ta3")
        
        ta.innerHTML = response["result"][1]["Direccion"];
        ta1.innerHTML = "Resultado 2 de casa solar";
        ta2.innerHTML = response["result"][1]["Consumo"];
        ta3.innerHTML = response["result"][1]["TipoEnergia"];

        tb = document.getElementById("caja2")
        tb1 = document.getElementById("tb1")
        tb2 = document.getElementById("tb2")
        tb3 = document.getElementById("tb3")
        
        tb.innerHTML = response["result"][2]["Direccion"];
        tb1.innerHTML = "Resultado 3 de casa solar";
        tb2.innerHTML = response["result"][2]["Consumo"];
        tb3.innerHTML = response["result"][2]["TipoEnergia"];

      } catch (err) {
        console.error(err);
      }
    }

    document.getElementById("botoncito4").addEventListener("click", getData4);
    async function getData4() {
      try {
        var response = await fetch(
          "https://1uazs074uc.execute-api.us-east-1.amazonaws.com/dev/precioEnergia"
        );
        response = await response.json();
        console.log(response);
        t = document.getElementById("caja")
        t1 = document.getElementById("t1")
        t2 = document.getElementById("t2")
        t3 = document.getElementById("t3")
        
        t.innerHTML = response["result"][0]["Tipo"];
        t1.innerHTML = "Resultado 1 de precio de energia";
        t2.innerHTML = response["result"][0]["Nombre"];
        t3.innerHTML = response["result"][0]["Precio"];

        ta = document.getElementById("caja1")
        ta1 = document.getElementById("ta1")
        ta2 = document.getElementById("ta2")
        ta3 = document.getElementById("ta3")
        
        ta.innerHTML = response["result"][1]["Tipo"];
        ta1.innerHTML = "Resultado 2 de precio de energia";
        ta2.innerHTML = response["result"][1]["Nombre"];
        ta3.innerHTML = response["result"][1]["Precio"];

        tb = document.getElementById("caja2")
        tb1 = document.getElementById("tb1")
        tb2 = document.getElementById("tb2")
        tb3 = document.getElementById("tb3")
        
        tb.innerHTML = response["result"][2]["Tipo"];
        tb1.innerHTML = "Resultado 3 de precio de energia";
        tb2.innerHTML = response["result"][2]["Nombre"];
        tb3.innerHTML = response["result"][2]["Precio"];

      } catch (err) {
        console.error(err);
      }
    }



/*
window.onload = function() {
    document.rellenar.ver.onclick = escribe
    document.rellenar2.ver2.onclick = escribe2
    document.rellenar3.ver3.onclick = escribe3
    document.rellenar4.ver4.onclick = escribe4
    //document.rellenar2.del.onclick=delt
}*/