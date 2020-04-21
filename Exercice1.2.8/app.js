


class ArbreMerkel {

    constructor(Data) {

        this.Data = Data;
    }

    hashFeuilles() {

        var k;
        for (k = 0; k < Data.length; k++) {

            (Data[k].cont) = (hashString(Data[k].cont).substr(0, 8));

            console.log(Data[k])

        }

        return Data;
    }

    hashNoeuds(Noeuds) {

        var k;
        var r = [];
        var data = { filsG: null, cont: "", filsD: null }
        for (k = 0; k < Noeuds.length; k++) {


            var ha = Noeuds[k].cont.concat(Noeuds[(k + 1)].cont)
            data.cont = (hashString(ha)).substr(0, 8)
            data.filsG = Noeuds[k].cont
            data.filsD = Noeuds[k + 1].cont
            console.log(data)
            r.push(data);

            k++
        }
        console.log(r.length)
        if (r.length > 1) { monArbre.hashNoeuds(r) }



        return r;
    }


}

function hashString(value) {
    //hashString: Function (value) {

    hash = crypto.createHash('sha256');
    hash.update(value);
    return hash.digest('hex');
}


var crypto = require('crypto');

var SHA256 = require("crypto-js/sha256");

var Data = [{ filsG: null, cont: "lapin", filsD: null }, { filsG: null, cont: "carotte", filsD: null },
{ filsG: null, cont: "champs", filsD: null }, { filsG: null, cont: "arbre", filsD: null }];

let monArbre = new ArbreMerkel(Data)

var Feuilles = monArbre.hashFeuilles(Data)
// console.log(Feuilles[0])
// console.log(Feuilles[1])
// console.log(Feuilles[2])
// console.log(Feuilles[3])

var Noeuds = monArbre.hashNoeuds(Feuilles)
// console.log(Noeuds[0])
// console.log(Noeuds[1])

//var Racine  = monArbre.hashRacine(Noeuds)

//console.log(Racine[0])


//////////////////////////////////// deux code 

// source https://github.com/miguelmota/merkletreejs
const { MerkleTree } = require('merkletreejs')
//const SHA256 = require('crypto-js/sha256')

const leaves = ['lapin', 'carotte', 'champs', 'arbre'].map(x => SHA256(x))
const tree = new MerkleTree(leaves, SHA256)
const root = (tree.getRoot().toString('hex')).substr(0, 8)

const leaf = SHA256('lapin')
const proof = tree.getProof(leaf)
console.log(tree.verify(proof, leaf, root)) // true


// const badLeaves = ['a', 'x', 'c', 'd'].map(x => SHA256(x))
// const badTree = new MerkleTree(badLeaves, SHA256)
// const badLeaf = SHA256('x')
// const badProof = tree.getProof(badLeaf)
// console.log(tree.verify(badProof, leaf, root)) // false

MerkleTree.print(tree)