/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
  // Taille de la chaîne
    var result = texte.length;
    return result;
}
var remplaceECar = function (texte) {
  // Remplace le e par espace
    var result = texte.replace("e", " ");
    return result;
}
var concatString = function (texte1, texte2) {
  // Concaténation de deux chaînes
    var result = texte1 + texte2;
    return result;
}
var afficherCar5 = function (texte) {
  // Récuperer le 5 caractére
    var result = texte.charAt(4);
    return result;
}
var afficher9Car = function (texte) {
  //Les chaines de caractères : Afficher les 9 premiers caractères
    var result = texte.slice(0,9);
    return result;
}
var majusculeString = function (texte) {
  // Les chaines de caractères : Mettre en majuscule la chaine
    var result = texte.toLocaleUpperCase();
    return result;
}
var minusculeString = function (texte) {
  // Les chaines de caractères : Mettre en minuscule la chaine
    var result = texte.toLocaleLowerCase();
    return result;
}
var SupprEspaceString = function (texte) {
  // Les chaines de caractères : Supprimer les espaces avant et après la chaine
    var result = texte.trim()
      return result;
}
var IsString = function (texte) {
  //Les chaines de caractères : Afficher true si le parametre d'entrée de la fonction est de type string
  var result = typeof(texte) === 'string';
    return result;
}
var AfficherExtensionString = function (texte) {
  // Les chaines de caractères : Afficher l'extension du fichier
    var result = texte.substring(texte.lastIndexOf(".")+1, texte.length);
    return result;
}
var NombreEspaceString = function (texte) {
  // Les chaines de caractères : Compter le nombre d'espace dans la chaine
    var result = texte.split(' ').length - 1;
    return result;
}
var InverseString = function (texte) {
  // Les chaines de caractères : Inverser une chaine de caractères
  var result = texte.split('').reverse().join('');
    return result;
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    var result = Math.pow(x,y);
    return result;
}
var valeurAbsolue = function (nombre) {
    var result = Math.abs(nombre);
    return result;
}
var valeurAbsolueArray = function (array) {
  //Les nombres et opérations mathématiques : Afficher les valeurs absolues de plusieurs nombres
    var result = array.map(Math.abs);
    return result;
}
var sufaceCercle = function (rayon) {
  //Les nombres et opérations mathématiques : Calculer la surface d'un cercle en fonction de son rayon. L'arondir à l'entier le plus proche
    var result = Math.PI * (rayon * rayon);
    var result = Math.round(result);
    return result;
}
var hypothenuse = function (ab, ac) {
  // Les nombres et opérations mathématiques : Calculer l'hypthènuse d'un triangle rectangle
    var result =  Math.hypot(ab, ac);
    return result;
}
var calculIMC = function (poids, taille) {
  //Les nombres et opérations mathématiques : Calculer l'IMC (Poids / (taille x taille).Ne garder que deux chiffres après la virgule.
    var result = poids /(taille * taille);
    result = result.toFixed(2);
    result = parseFloat(result);
    return result;
}
