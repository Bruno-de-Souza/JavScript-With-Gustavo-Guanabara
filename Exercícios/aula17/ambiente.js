let numeros = [8, 2, 9, 6, 3, 7, 10];
numeros.sort();
//console.log(`Meu vetor é o : ${numeros}!`);

/*console.log(`Meu vertor ordernado crescente é ${numeros.sort()}`);
numeros[5] = 8;
console.log(`Meu vetor após adicionar um valor na última posição: ${numeros}!`);
numeros.push(6);
console.log(`Meu vetor após utilizar o método push ${numeros}!`);
console.log(`Minha quantidade de elementos no meu vetor é ${numeros.length}!`);
console.log(`O primeiro valor do vetor é: ${numeros[0]}`);*/

/*for (let pos = 0; pos < numeros.length; pos++) {
    console.log(`A posiçao ${pos} tem o valor ${numeros[pos]}`);
}*/

//Só podemos utilizar o "for in" em objetos e arrays no JS
let par = [];
let impar = [];
for (let pos in numeros) {
    console.log(`A posiçao ${pos} tem o valor ${numeros[pos]} no meu array usando o "For in"!`);
    if (numeros[pos] % 2 == 0) {
        console.log(`O valor ${numeros[pos]} é par!`);
        par += numeros[pos];
    } 
    else {
        console.log(`O valor ${numeros[pos]} é ímpar!`);
        impar += numeros[pos];
    }
}
console.log(`Total de pares é ${par.length}`);
console.log(`Total de ímpars é ${impar.length}`);

//Utilizando o indexOf
//console.log(`Meu indídice de valor 9 no meu array é: ${numeros.indexOf(9)}`);

/*let value = numeros.indexOf(0);
if (value == -1) {
    console.log('Valor nao encontrado!');
} else {
    console.log(`O valor está na posição ${value}`);
}*/