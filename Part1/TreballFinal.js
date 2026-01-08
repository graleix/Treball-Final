// 1.1 — Quan el camp de nom perd el focus, es formata el text
document.getElementById("nom").addEventListener("blur", function () {
    let parts = this.value.trim().split(" "); // Separa el text en paraules
    let resultat = "";

    // Recorre cada paraula i la transforma: primera lletra en majúscula, la resta en minúscula
    for (let i = 0; i < parts.length; i++) {
        if (parts[i].length > 0) {
            resultat += parts[i][0].toUpperCase() +
                        parts[i].substring(1).toLowerCase() + " ";
        }
    }

    this.value = resultat.trim(); // Assigna el resultat formatat al camp
});

// 1.2 — Comprovació que s’ha seleccionat un rang d’edat
document.getElementById("edat").addEventListener("change", function () {
    if (this.value === "") {
        alert("Has de seleccionar un rang d'edat.");
    }
});

// 1.3 — Validació del codi postal
document.getElementById("cp").addEventListener("blur", function () {
    let cp = this.value;

    // Comprova que tingui exactament 5 caràcters
    if (cp.length !== 5) {
        alert("El codi postal ha de tenir 5 dígits.");
        this.value = "";
        return;
    }

    // Comprova que tots els caràcters siguin números
    for (let i = 0; i < cp.length; i++) {
        if (cp[i] < "0" || cp[i] > "9") {
            alert("El codi postal només pot contenir números.");
            this.value = "";
            return;
        }
    }
});

// 1.4 — Validació del correu electrònic
document.getElementById("email").addEventListener("blur", function () {
    let email = this.value;
    let arroves = 0;
    let posArrova = -1;

    // Compta quantes arroves hi ha i guarda la posició
    for (let i = 0; i < email.length; i++) {
        if (email[i] === "@") {
            arroves++;
            posArrova = i;
        }
    }

    // Ha de tenir exactament una @
    if (arroves !== 1) {
        alert("El correu ha de tenir exactament una @.");
        this.value = "";
        return;
    }

    // Comprova que hi hagi almenys un punt després de la @
    let hiHaPunt = false;
    for (let i = posArrova + 1; i < email.length; i++) {
        if (email[i] === ".") hiHaPunt = true;
    }

    if (!hiHaPunt) {
        alert("Falta un punt després de la @.");
        this.value = "";
    }
});

// 1.5 — Validació de la contrasenya
document.getElementById("pass").addEventListener("blur", function () {
    let p = this.value;

    // Comprova que tingui almenys 8 caràcters
    if (p.length < 8) {
        alert("La contrasenya ha de tenir almenys 8 caràcters.");
        this.value = "";
        return;
    }

    // Variables per comprovar els requisits
    let maj = false, min = false, digits = 0, especial = false;
    let especials = "!@#$%^&*()_+[]-={} ;:\\|,.<>/?";

    // Recorre cada caràcter i comprova si compleix els requisits
    for (let i = 0; i < p.length; i++) {
        let c = p[i];

        if (c >= "A" && c <= "Z") maj = true;
        else if (c >= "a" && c <= "z") min = true;
        else if (c >= "0" && c <= "9") digits++;
        else if (especials.includes(c)) especial = true;
    }

    // Si no compleix tots els requisits, mostra error
    if (!maj || !min || digits < 2 || !especial) {
        alert("La contrasenya ha de tenir: mínim 1 majúscula, 1 minúscula, 2 dígits i 1 caràcter especial.");
        this.value = "";
    }
});

// Mostrar o amagar la contrasenya principal
document.getElementById("showPass").addEventListener("change", function () {
    let camp = document.getElementById("pass");
    camp.type = this.checked ? "text" : "password";
});

// 1.6 — Confirmació de la contrasenya
document.getElementById("pass2").addEventListener("blur", function () {
    if (this.value !== document.getElementById("pass").value) {
        alert("Les contrasenyes no coincideixen.");
        this.value = "";
    }
});

// Mostrar o amagar la confirmació de contrasenya
document.getElementById("showPass2").addEventListener("change", function () {
    let camp = document.getElementById("pass2");
    camp.type = this.checked ? "text" : "password";
});

// 1.8 — Botó per esborrar el formulari
document.getElementById("esborrar").addEventListener("click", function () {
    document.getElementById("formulari").reset(); // Reinicia tots els camps
    document.getElementById("resultat").innerText = ""; // Esborra el missatge final
});

// 1.9 — Botó per enviar el formulari
document.getElementById("enviar").addEventListener("click", function () {
    // Recull els valors dels camps
    let nom = document.getElementById("nom").value;
    let edat = document.getElementById("edat").value;
    let cp = document.getElementById("cp").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    let pass2 = document.getElementById("pass2").value;
    let priv = document.getElementById("privacitat").checked;

    // Comprova que tots els camps estiguin plens i la política acceptada
    if (!nom || !edat || !cp || !email || !pass || !pass2 || !priv) {
        alert("Has d'omplir tots els camps correctament i acceptar la política de privacitat.");
        return;
    }

    // Mostra un missatge de confirmació amb les dades
    document.getElementById("resultat").innerText =
        "Formulari enviat correctament!\n" +
        "Nom: " + nom + "\n" +
        "Edat: " + edat + "\n" +
        "Codi postal: " + cp + "\n" +
        "Email: " + email;
});