
var L = [];

chiffre = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']

var n = 466321;

do {   
    var r = n % 16;

    for (var i = chiffre.length - 1; i >= 0; i--) {

        //console.log(r);
           if (r == i)
        {var  hex =  chiffre[i]
        console.log(chiffre[i]);

        break;}

    }
  
    n = (n - r) / 16;

    L.push(hex);


} while (n != 0);
//Affichage de la liste

console.log(L);
var H = '0x';
//Affichage du nombre en Hex en parcourant la liste
 for (var i = L.length - 1; i >= 0; i--) {

     H = H.concat(L[i])
   
   
 }
 console.log(H);

