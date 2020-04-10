
let input = process.stdin;
// Set input character encoding.
input.setEncoding('utf-8');

input.on('data', entree => {

    const nombreTrouver = parseInt(entree);

 // rechercheDichotomique

    a = 1;
    b = 100;
    k = nombreTrouver;

    while (a <= b) {

          console.log({ a });
          console.log({ b });

        t = Math.floor((a + b) / 2)

        if (t == k) { ok = 1; break }

        else {

            if (k < t) 
            { b = t - 1 }

            else 
            { a = t + 1 }

        }
    }



})
