//Initialisation de la liste
var L = [];
//Entrée du nombre à convertir
var n = 10;

//Code de l'algorithme
do {
	var r = n % 2;
	L.push(r);
	n = (n - r) / 2;
} while (n != 0);

//Affichage de la liste
//println(L);
//Affichage du nombre en binaire en parcourant la liste
for (var i = L.length - 1; i >= 0; i--) {
	//print(L[i]);
}