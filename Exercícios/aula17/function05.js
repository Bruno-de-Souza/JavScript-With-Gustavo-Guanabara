//Recursividade
function fatorialRecursivo(n1) {
    if (n1 == 1) {
        return 1;
    } else {
        return n1 * fatorialRecursivo(n1 - 1);
    }
}
console.log(fatorialRecursivo(5));

/*

5! = 5 x 4 x 3 x 2x 1
5! = 5 x 4

n! = n X (n - 1)
1! = 1

*/