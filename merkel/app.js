
var crypto = require('crypto');

var SHA256 = require("crypto-js/sha256");




function hashString(value) {
    hash = crypto.createHash('sha256');
    hash.update(value);
    return hash.digest('hex');
}


function hashFeuilles(tab) {
    var k;
    var r = [];

    ;



    for (k = 0; k < tab.length; k++) {


        (tab[k].cont) = (hashString(tab[k].cont).toString().substr(0, 8));


    }

    //console.log(tab)
    return tab;
}



function hashNoeuds(Noeuds) {

    console.log(Noeuds)
    var k;
    var r = Noeuds.split(" ");
    data = [{ "cont": '' }]
    for (k = 0; k < 4; k++) {

        console.log(k)



        // console.log(JSON.stringify(hashFeuilles(r)).const)
        // r[k].filsD = r[k+1].cont;

        var ha = Noeuds[k].concat(Noeuds[(k + 1)].cont)
        // data = (hashString(r[k].cont).substr(0, 8));
        //data.cont  = (hashString(ha).substr(0, 8));
        data = [{ "cont": (hashString(ha)) }]
        r.push(data);

        k++

    }
    console.log(r)


    return r;
}

//  var tab =  [{"filsG": null,"cont": "lapin","filsD": null,"niv":2},{"filsG": null,"cont": "carotte","filsD": null,"niv":2},
//  {"filsG": null,"cont": "champs","filsD": null,"niv":2},{"filsG": null,"cont": "arbre","filsD": null,"niv":2},

//  {"filsG": null,"cont": "","filsD": null,"niv":1},{"filsG": null,"cont": "","filsD": null,"niv":1},

//  {"filsG": null,"cont": "","filsD": null,"niv":0},

//  ];

//  var Data =  [{"filsG": null,"cont": "lapin","filsD": null},{"filsG": null,"cont": "carotte","filsD": null},
//  {"filsG": null,"cont": "champs","filsD": null},{"filsG": null,"cont": "arbre","filsD": null}
// ];

var Data = [{ "cont": "lapin" }, { "cont": "carotte" },
{ "cont": "champs" }, { "cont": "arbre" }
];





//JSON.stringify(hashFeuilles(Data));

var Noeuds = (JSON.stringify(hashFeuilles(Data)))

//console.log(Noeuds);

var roo = (JSON.stringify(hashNoeuds(Noeuds)))





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