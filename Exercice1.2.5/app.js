class Noeud {
    constructor(valeur) {
        this.valeur = valeur
        this.gauche = undefined
        this.droite = undefined
    }

    ajouterValeur(v) {
        if (v < this.valeur) {
            if (this.gauche === undefined) {
                this.gauche = new Noeud(v)
            } else {
                this.gauche.ajouterValeur(v)
            }
        } else {
            if (this.droite === undefined) {
                this.droite = new Noeud(v)
            } else {
                this.droite.ajouterValeur(v)
            }
        }
    }

    afficherValeurThiaga() {
        console.log(this.valeur)
        if (this.gauche)
            this.gauche.afficherValeurThiaga()
        if (this.droite)
            this.droite.afficherValeurThiaga()
    }

    affichageInfixe() {
        let affichage = []
        if (this.gauche !== undefined)
            affichage = this.gauche.affichageInfixe()
        affichage.push(this.valeur)
        if (this.droite !== undefined)
            affichage = affichage.concat(this.droite.affichageInfixe())
        return affichage
    }
}

class Arbre {
    constructor(valeur) {
        this.racine = new Noeud(valeur)
    }

    ajouterValeur(valeur) {
        this.racine.ajouterValeur(valeur)
    }

    affichageInfixe() {
        if (this.racine !== undefined)
            return this.racine.affichageInfixe()
        return []
    }

    afficherArbre() {
        this.racine.afficherValeur()
        // A faire: Une fonction d'affichage de l'arbre
    }

    afficherArbreAli(g = this.racine.gauche, d = this.racine.droite) {
        let str;
        if (g !== undefined) {
            str += g.valeur + '\t';
            this.afficherArbreAli(g.gauche, g.droite);
        }
        if (d !== undefined) {
            str += d.valeur + '\n';
            this.afficherArbreAli(d.gauche, d.droite);
        }
    }

}

let monArbre = new Arbre(6)

console.log(monArbre)

monArbre.ajouterValeur(4)
monArbre.ajouterValeur(7)
monArbre.ajouterValeur(9)
monArbre.ajouterValeur(1)

monArbre.ajouterValeur(12)
monArbre.ajouterValeur(8)
monArbre.ajouterValeur(3)

console.log(monArbre)
console.log(monArbre.affichageInfixe())