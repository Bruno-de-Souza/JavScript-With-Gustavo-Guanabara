let num = document.querySelector('input#num');
let list = document.querySelector('select#list');
let res = document.getElementById('res');
let values = [];

function isNumeroValido(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inLista(n, lis) {
    if (lis.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

function adicionar() {
    if (isNumeroValido(num.value) && !inLista(num.value, values)) {
        values.push(Number(num.value)); 1
        console.log(`Valores: ${values}!`);
        let node = document.createElement('option');
        node.text = `Valor ${num.value} foi adicionado na lista!`;
        list.appendChild(node);
        res.innerHTML = '';
    }
    else {
        window.alert('Valor inválido ou já encontrado na lista!');
    }
    num.value = '';
    num.focus();
}

function finalizar() {
    if (values.length == 0) {
        window.alert('[ERRO] Nenhum valor adicionado!');
    } else {
        let total = values.length;
        let maior = values[0];
        let menor = values[0];
        let soma = 0;
        let media = 0;
        let par = Number(num.value);
        let impar = Number(num.value);

        if (Number(num.value) % 2 == 0) {
            par += Number(num.value);
        } else {
            impar += Number(num.value);
        }

        for (let posicao in values) {
            soma += values[posicao];
            if (values[posicao] > maior) {
                maior = values[posicao];
            }
            if (values[posicao] < menor) {
                menor = values[posicao];
            }
        }
        media = soma / total;
        res.innerHTML = '';
        res.innerHTML += `<p>Total de números cadastrados: ${total}</p>`;
        res.innerHTML += `<p>O maior número cadastrado é: ${maior}<p/>`;
        res.innerHTML += `<p>O menor número cadastrado é: ${menor}<p/>`;
        res.innerHTML += `<p>A soma dos números cadastrados é: ${soma}<p/>`;
        res.innerHTML += `<p>A média dos números cadastrados é: ${media}<p/>`;
        res.innerHTML += `<p>Total de números pares é: ${par}<p/>`;
    }
}