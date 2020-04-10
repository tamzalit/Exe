

class Circle { //class declaration
    //constructor avec un seul  parameter
    constructor(rayon) {
        this.rayon = rayon; 
    }
    get area() { 
        return 3.14 * Math.pow(this.rayon, 2); 
    }
    get perim() { //setter
        return 3.14 * (this.rayon *2); 
    }
}
var circle1 = new Circle(5); //nouvelle class instance


console.log(circle1.area); 

console.log(circle1.perim); 