var pierwszyDiv = document.createElement('div');
pierwszyDiv.setAttribute("id","uchwyt");

document.body.appendChild(pierwszyDiv);

var naglowek = document.createElement("h1");
naglowek.style.color = "red";
naglowek.innerHTML = "Tekst testowy"

var uchwyt = document.getElementById("uchwyt");
uchwyt.appendChild(naglowek);