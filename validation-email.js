unction validerNom(nom) {
if (nom.trim() === "") {
return "Le nom ne peut pas etre vide.";
}
if (/\d/.test(nom)) {
return "Le nom ne doit pas contenir de chiffres.";
}
return null; // valide
}