

function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Difference2Entier(a, b) {
    return Math.abs(a - b);
}
//Utilisation

//La variable contient un nombre aléatoire compris entre 1 et 100
var entier = entierAleatoire(1, 100);

console.log({ entier })


let input = process.stdin;
// Set input character encoding.
input.setEncoding('utf-8');

input.on('data', entree => {
    const nombrePropose = parseInt(entree);

    console.log({ nombrePropose })

    var myVariable;
    difference = Difference2Entier(nombrePropose, entier);

    console.log({ difference })

    switch (true) {


        case (difference == 0): //

            console.log("bonne reponse")
            break;

        case (difference <= 5): //
            console.log("tres proche")

            break;

        //case (difference == 6): //
        //case (difference == 7): //
        //case (difference == 8): //
        //case (difference == 9): //
        //case (difference == 10): //


        case (difference > 5) && (difference <= 10): //

            console.log(" proche ")

            break;

        case (difference > 10): //
            console.log("superieur")

            break;
    }

})


