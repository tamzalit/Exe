function fact(nb) {
    
    if (nb === 0) {
        return 1;
    }
    // procodure recursive
    return nb * fact(nb - 1);
    
}
console.log(fact(3));