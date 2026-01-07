// EXERCICI 2.1 – Nombre total d'accidents

function exercici01() {
    let zona = document.getElementById("resultats");
    zona.innerHTML = "";
    let total = obj.length;
    zona.innerHTML = "<h3>Nombre total d'accidents:</h3>" + total;
}

// EXERCICI 2.2 – Dia de la setmana amb més accidents

function exercici02() {
    let zona = document.getElementById("resultats");
    zona.innerHTML = "";
    let comptador = {};
    for (let i = 0; i < obj.length; i++) {
        let dia = obj[i].diaSet;
        if (comptador[dia] === undefined) {
            comptador[dia] = 1;
        } else {
            comptador[dia]++;
        }
    }
    let diaMax = "";
    let max = 0;
    for (let dia in comptador) {
        if (comptador[dia] > max) {
            max = comptador[dia];
            diaMax = dia;
        }
    }
    zona.innerHTML = "<h3>Dia de la setmana amb més accidents:</h3>" + diaMax + " (" + max + ")";
}

// EXERCICI 2.3 –-> Llista d'accidents per districte

function exercici03() {
    let zona = document.getElementById("resultats");
    zona.innerHTML = "<h3>Accidents per districtes:</h3>";
    let comptador = [];
    for (let i = -1; i <= 10; i++) {
        comptador[i] = 0;
    }
    for (let i = 0; i < obj.length; i++) {
        let nd = obj[i].nDist;
        comptador[nd]++;
    }
    let ul = document.createElement("ul");
    let liAltres = document.createElement("li");
    liAltres.textContent = "Altres: " + comptador[-1];
    ul.appendChild(liAltres);
    for (let i = 1; i <= 10; i++) {
        let li = document.createElement("li");
        li.textContent = "Districte " + i + ": " + comptador[i];
        ul.appendChild(li);
    }
    zona.appendChild(ul);
}

// EXERCICI 2.4 –-> Accidents d’un districte seleccionat

function exercici04() {
    creaFormulari();
    let sel = document.getElementById("districtes");
    sel.addEventListener("change", function () {
        let districteSeleccionat = sel.value;
        let total = 0;
        for (let i = 0; i < obj.length; i++) {
            if (obj[i].districte === districteSeleccionat) {
                total++;
            }
        }
        let zona = document.getElementById("resultats");
        zona.innerHTML += "<p><strong>Accidents al districte seleccionat:</strong> " + total + "</p>";
    });
}

// ACTIVACIÓ DELS BOTONS DEL MENÚ

document.getElementById("exer01").addEventListener("click", function (e) {
    e.preventDefault();
    exercici01();
});
document.getElementById("exer02").addEventListener("click", function (e) {
    e.preventDefault();
    exercici02();
});
document.getElementById("exer03").addEventListener("click", function (e) {
    e.preventDefault();
    exercici03();
});
document.getElementById("exer04").addEventListener("click", function (e) {
    e.preventDefault();
    exercici04();
});
