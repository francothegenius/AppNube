let miTitulo,miClave,miTexto;


    document.getElementById("botoncito").addEventListener("click", getData);
    async function getData() {
      try {
        var response = await fetch(
          "https://1uazs074uc.execute-api.us-east-1.amazonaws.com/dev/casaElectrica"
        );
        response = await response.json();
        console.log(response);
        
        var news = document.getElementById("news");
        news.innerHTML = "";
        for(var i = 0; i < response["result"].length; i++) {
            
            var section = document.createElement("section");
            news.appendChild(section);
            
            var header = document.createElement("header");
            section.appendChild(header);
            var h3 = document.createElement("h3");
            h3.innerHTML = "Resultado "+(i+1)+ " de casa electrica: ";
            header.appendChild(h3);
            var p = document.createElement("p");
            p.innerHTML = response["result"][i]["Direccion"];
            news.appendChild(p);
            var p2 = document.createElement("p");
            p2.innerHTML = response["result"][i]["Consumo"];
            news.appendChild(p2);
            var p3 = document.createElement("p");
            p3.innerHTML = response["result"][i]["TipoEnergia"];
            news.appendChild(p3);

        }
     
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

        var news = document.getElementById("news");
        news.innerHTML = "";
        for(var i = 0; i < response["result"].length; i++) {
            
            var section = document.createElement("section");
            news.appendChild(section);
            
            var header = document.createElement("header");
            section.appendChild(header);
            var h3 = document.createElement("h3");
            h3.innerHTML = "Resultado "+(i+1)+ " de casa eolica: ";
            header.appendChild(h3);
            var p = document.createElement("p");
            p.innerHTML = response["result"][i]["Direccion"];
            news.appendChild(p);
            var p2 = document.createElement("p");
            p2.innerHTML = response["result"][i]["Consumo"];
            news.appendChild(p2);
            var p3 = document.createElement("p");
            p3.innerHTML = response["result"][i]["TipoEnergia"];
            news.appendChild(p3);

        }

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
        
        var news = document.getElementById("news");
        news.innerHTML = "";
        for(var i = 0; i < response["result"].length; i++) {
            
            var section = document.createElement("section");
            news.appendChild(section);
            
            var header = document.createElement("header");
            section.appendChild(header);
            var h3 = document.createElement("h3");
            h3.innerHTML = "Resultado "+(i+1)+ " de casa solar: ";
            header.appendChild(h3);
            var p = document.createElement("p");
            p.innerHTML = response["result"][i]["Direccion"];
            news.appendChild(p);
            var p2 = document.createElement("p");
            p2.innerHTML = response["result"][i]["Consumo"];
            news.appendChild(p2);
            var p3 = document.createElement("p");
            p3.innerHTML = response["result"][i]["TipoEnergia"];
            news.appendChild(p3);

        }

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
        
        var news = document.getElementById("news");
        news.innerHTML = "";
        for(var i = 0; i < response["result"].length; i++) {
            
            var section = document.createElement("section");
            news.appendChild(section);
            
            var header = document.createElement("header");
            section.appendChild(header);
            var h3 = document.createElement("h3");
            h3.innerHTML = "Resultado "+(i+1)+ " de precio de energia: ";
            header.appendChild(h3);
            var p = document.createElement("p");
            p.innerHTML = response["result"][i]["Tipo"];
            news.appendChild(p);
            var p2 = document.createElement("p");
            p2.innerHTML = response["result"][i]["Nombre"];
            news.appendChild(p2);
            var p3 = document.createElement("p");
            p3.innerHTML = response["result"][i]["Precio"];
            news.appendChild(p3);

        }

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