// 1.1 Nom i cognoms
document.getElementById("nom").addEventListener("blur", function () {
    let parts = this.value.trim().split(" ");
    let resultat = "";
    for (let i = 0; i < parts.length; i++) {
        if (parts[i].length > 0) {
            resultat += parts[i][0].toUpperCase() +
                        parts[i].substring(1).toLowerCase() + " ";
        }
    }
    this.value = resultat.trim();
});

// 1.2 Rang d'edats
document.getElementById("edat").addEventListener("change", function () {
    if (this.value === "") {
        alert("Has de seleccionar un rang d'edat.");
    }
});

// 1.3 Codi postal
document.getElementById("cp").addEventListener("blur", function () {
    let cp = this.value;

    if (cp.length !== 5) {
        alert("El codi postal ha de tenir 5 dígits.");
        this.value = "";
        return;
    }

    for (let i = 0; i < cp.length; i++) {
        if (cp[i] < "0" || cp[i] > "9") {
            alert("El codi postal només pot contenir números.");
            this.value = "";
            return;
        }
    }
});

// 1.4 Correu electrònic
document.getElementById("email").addEventListener("blur", function () {
    let email = this.value;
    let arroves = 0;
    let posArrova = -1;

    for (let i = 0; i < email.length; i++) {
        if (email[i] === "@") {
            arroves++;
            posArrova = i;
        }
    }

    if (arroves !== 1) {
        alert("El correu ha de tenir exactament una @.");
        this.value = "";
        return;
    }

    let hiHaPunt = false;
    for (let i = posArrova + 1; i < email.length; i++) {
        if (email[i] === ".") hiHaPunt = true;
    }

    if (!hiHaPunt) {
        alert("Falta un punt després de la @.");
        this.value = "";
    }
});

// 1.5 Contrasenya
document.getElementById("pass").addEventListener("blur", function () {
    let p = this.value;

    if (p.length < 8) {
        alert("La contrasenya ha de tenir almenys 8 caràcters.");
        this.value = "";
        return;
    }

    let maj = false, min = false, digits = 0, especial = false;
    let especials = "!@#$%^&*()_+[]-={} ;:\\|,.<>/?";

    for (let i = 0; i < p.length; i++) {
        let c = p[i];

        if (c >= "A" && c <= "Z") maj = true;
        else if (c >= "a" && c <= "z") min = true;
        else if (c >= "0" && c <= "9") digits++;
        else if (especials.includes(c)) especial = true;
    }

    if (!maj || !min || digits < 2 || !especial) {
        alert("La contrasenya ha de tenir: mínim 1 majúscula, 1 minúscula, 2 dígits i 1 caràcter especial.");
        this.value = "";
    }
});

// Mostrar contrasenya
document.getElementById("showPass").addEventListener("change", function () {
    let camp = document.getElementById("pass");
    camp.type = this.checked ? "text" : "password";
});

// 1.6 Confirmar contrasenya
document.getElementById("pass2").addEventListener("blur", function () {
    if (this.value !== document.getElementById("pass").value) {
        alert("Les contrasenyes no coincideixen.");
        this.value = "";
    }
});

// Mostrar confirmar contrasenya
document.getElementById("showPass2").addEventListener("change", function () {
    let camp = document.getElementById("pass2");
    camp.type = this.checked ? "text" : "password";
});

// 1.8 Esborrar
document.getElementById("esborrar").addEventListener("click", function () {
    document.getElementById("formulari").reset();
    document.getElementById("resultat").innerText = "";
});

// 1.9 Enviar
document.getElementById("enviar").addEventListener("click", function () {

    let nom = document.getElementById("nom").value;
    let edat = document.getElementById("edat").value;
    let cp = document.getElementById("cp").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    let pass2 = document.getElementById("pass2").value;
    let priv = document.getElementById("privacitat").checked;

    if (!nom || !edat || !cp || !email || !pass || !pass2 || !priv) {
        alert("Has d'omplir tots els camps correctament i acceptar la política de privacitat.");
        return;
    }

    document.getElementById("resultat").innerText =
        "Formulari enviat correctament!\n" +
        "Nom: " + nom + "\n" +
        "Edat: " + edat + "\n" +
        "Codi postal: " + cp + "\n" +
        "Email: " + email;
});
