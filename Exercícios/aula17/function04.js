// Fatorial de 5!: 5 x 4 x 3 x 2 x 1 = 120
function fatorial(n) {
    let fat = 1;
    for (let res = n; res > 1; res--) {
        fat = fat * res;
    }
    return fat;
}
console.log(fatorial(3));