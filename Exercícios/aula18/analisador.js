let num = document.querySelector('input#num');
let res = document.querySelector('select#res');
let resII = document.getElementById('resII');
let valores = [];

//Verifica se o número está no valor exigido
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

//Verifica se o número está dentro da lista
function inlista(n, l) { 
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

//Valida os valores inseridos
function add() {
    if (isNumero(num.value) && !inlista(num.value, valores)) {
        valores.push(Number(num.value));
        console.log(`Valores: ${valores}`);
        let node = document.createElement('option');
        node.text = `Valor ${num.value} adicionado!`;
        res.appendChild(node);
        resII.innerHTML = '';
    } else {
        window.alert('Valor inválido ou já encontrado na lista!');
    }
    num.value = '';
    num.focus();
}

//Valida a funcionalidade do botao Finalizar
function finalizar() {
    if (valores.length == 0) {
        window.alert('[ERRO!] Nenhum valor adicionado!');
    } else {
        //Declaraçâo das variavéis
        let total = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;

        //Varifica os valores da lista após finalizar
        for (let pos in valores) {
            soma += valores[pos];
            media = valores[pos] / 2;
            if (valores[pos] > maior) {
                maior = valores[pos];
            }
            if (valores[pos] < menor) {
                menor = valores[pos];
            }
        }
        resII.innerHTML = '';
        resII.innerHTML += `<p>Números cadastrados: ${total}.<p/>`;
        resII.innerHTML += `<p>Maior número informado: ${maior}.<p/>`;
        resII.innerHTML += `<p>Menor número informado: ${menor}<p/>`;
        resII.innerHTML += `<p>Soma dos valores: ${soma}<p/>`;
        resII.innerHTML += `<p>Média dos valores: ${media}<p/>`;
    }
}