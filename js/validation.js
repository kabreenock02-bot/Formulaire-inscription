function validerEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(email)) {
        alert("Email valide !");
    } else {
        alert("Email invalide !");
    }
}
