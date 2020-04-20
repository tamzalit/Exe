// // Implémentation manuelle d'un programme de chiffrement et déchiffrement d'un masque jetable
// const crypto = require('crypto')

// const generateKeyMarc = message => {
//     return crypto.randomBytes(message.length)
// } 
    
// const chiffrerKarim = (message, cle) => {
//     let bufferMsg = Buffer.from(message)
//     let messageChiffre= []
//     let messageChiffreChaine = ''
//         for(let i= 0; i<message.length; i++){
//             messageChiffreChaine += (bufferMsg[i] ^ cle[i]).toString(16)
//             messageChiffre.push(bufferMsg[i] ^ cle[i])
//         }
//     console.log("Chiffré, chaîne ",messageChiffreChaine)
//     return messageChiffre
// }  

// // Message
// let message = "lala"
// console.log("message",message,"\t",Buffer.from(message))

// // Clé
// let cle = generateKeyMarc(message)
// console.log("cle\t\t",cle)

// // Chiffrement
// let messageChiffre = chiffrerKarim(message,cle)
// console.log("Chiffré, tableau", messageChiffre)
// console.log("Chiffré, Buffer ", Buffer.from(messageChiffre))

// // Déchiffrement

// const crypto = require('crypto')

// const dataString = [a,b];

// let dataBuffer = Buffer.from(dataString)

// crypto.createHash("sha256").update(dataBuffer).digest()

//Ecrire un programme de chiffrement type masque jetable
//  -générer une clé PRIVEE et clé PUBLIQUE
//  -SIGNER un message avec la clé privée
//  -VERIFIER la signature du message avec la clé PUBLIQUE
//  https://nodejs.org/api/crypto.html#crypto_class_sign

//générer une clé PRIVEE et clé PUBLIQUE
const crypto = require('crypto');
const { privateKey, publicKey } = crypto.generateKeyPairSync('ec', {
    namedCurve: 'secp256k1'
  });

//SIGNER un message avec la clé privée
const signerMessage = (message,clePrive) => {
    const sign = crypto.createSign('SHA256'); //créer une signature en utilisant un algorithme de hashage
    sign.update(message);
    sign.end()
    const signature = sign.sign(privateKey);
    console.log('signature Digitale  : ' + Buffer.from(signature).toString('base64'));
    return signature;
}

//VERIFIER la signature du message avec la clé PUBLIQUE
const verifierSignature = (message,clePublique) => {
    const verify = crypto.createVerify('SHA256')
    verify.update(message);
    verify.end()
    const statut = verify.verify(publicKey, signature)
    console.log('la signature Digitale est elle valable? : ' + statut)
    return statut;
}

let message = "message à signer";
let clePrive =privateKey;
let clePublique =publicKey;

let signature = signerMessage(message,clePrive);
//let statut = verifierSignature(message,clePublique);