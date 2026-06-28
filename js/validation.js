function validerTelephone(telephone) {
    var regex = /^[0-9]{8}$/;
    if (regex.test(telephone)) {
        alert("Numero valide !");
    } else {
        alert("Numero invalide ! Il doit contenir 8 chiffres.");
    }
}
