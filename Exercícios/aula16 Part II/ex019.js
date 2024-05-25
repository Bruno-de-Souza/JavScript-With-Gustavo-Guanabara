function gerar() {
    let numero = document.getElementById('txtNum');
    let tab = document.getElementById('tabuada');
    let num = Number(numero.value);
    let resultado = document.getElementById('res');
    if (num == null || num == '' || num == 0) {
        window.alert('Valor Invalído!');
    } else {
        let myNodeP = document.createElement('p');
        let myNodeText = document.createTextNode('Resultado: ');
        myNodeP.appendChild(myNodeText);
        resultado.appendChild(myNodeP);
        tab.innerHTML = '';
        for (var i = 1; i <=10; i++) {
            let myNode = document.createElement('option');
            myNode.text += `${num} X ${i} = ${num * i}`;
            tab.appendChild(myNode);
        }
    }
}