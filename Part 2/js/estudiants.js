// EXERCICI 2.1 – Nombre total d'accidents
function exercici01() {
    // Accedeix a la zona on es mostraran els resultats
    let zona = document.getElementById("resultats");
    zona.innerHTML = ""; // Neteja el contingut anterior

    // Calcula el total d'accidents (nombre d'elements a l'objecte)
    let total = obj.length;

    // Mostra el resultat a la pàgina
    zona.innerHTML = "<h3>Nombre total d'accidents:</h3>" + total;
}

// EXERCICI 2.2 – Dia de la setmana amb més accidents
function exercici02() {
    let zona = document.getElementById("resultats");
    zona.innerHTML = ""; // Neteja el contingut anterior

    let comptador = {}; // Objecte per comptar els accidents per dia

    // Recorre tots els accidents i compta quants n'hi ha per cada dia
    for (let i = 0; i < obj.length; i++) {
        let dia = obj[i].diaSet;
        if (comptador[dia] === undefined) {
            comptador[dia] = 1;
        } else {
            comptador[dia]++;
        }
    }

    // Busca quin dia té més accidents
    let diaMax = "";
    let max = 0;
    for (let dia in comptador) {
        if (comptador[dia] > max) {
            max = comptador[dia];
            diaMax = dia;
        }
    }

    // Mostra el resultat
    zona.innerHTML = "<h3>Dia de la setmana amb més accidents:</h3>" + diaMax + " (" + max + ")";
}

// EXERCICI 2.3 – Llista d'accidents per districte
function exercici03() {
    let zona = document.getElementById("resultats");
    zona.innerHTML = "<h3>Accidents per districtes:</h3>";

    let comptador = [];

    // Inicialitza el comptador per a cada districte (del -1 al 10)
    for (let i = -1; i <= 10; i++) {
        comptador[i] = 0;
    }

    // Recorre els accidents i compta quants n'hi ha per cada districte
    for (let i = 0; i < obj.length; i++) {
        let nd = obj[i].nDist;
        comptador[nd]++;
    }

    // Crea una llista HTML amb els resultats
    let ul = document.createElement("ul");

    // Afegeix els accidents del districte -1 (altres)
    let liAltres = document.createElement("li");
    liAltres.textContent = "Altres: " + comptador[-1];
    ul.appendChild(liAltres);

    // Afegeix els accidents dels districtes del 1 al 10
    for (let i = 1; i <= 10; i++) {
        let li = document.createElement("li");
        li.textContent = "Districte " + i + ": " + comptador[i];
        ul.appendChild(li);
    }

    // Mostra la llista a la pàgina
    zona.appendChild(ul);
}

// EXERCICI 2.4 – Accidents d’un districte seleccionat
function exercici04() {
    // Crea el formulari amb el desplegable de districtes
    creaFormulari();

    // Quan l’usuari selecciona un districte...
    let sel = document.getElementById("districtes");
    sel.addEventListener("change", function () {
        let districteSeleccionat = sel.value;
        let total = 0;

        // Compta quants accidents hi ha al districte seleccionat
        for (let i = 0; i < obj.length; i++) {
            if (obj[i].districte === districteSeleccionat) {
                total++;
            }
        }

        // Mostra el resultat a la pàgina
        let zona = document.getElementById("resultats");
        zona.innerHTML += "<p><strong>Accidents al districte seleccionat:</strong> " + total + "</p>";
    });
}

// ACTIVACIÓ DELS BOTONS DEL MENÚ
// Quan es fa clic a cada botó, s’executa la funció corresponent

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
