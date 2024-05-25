function gerar() {
    let numero = document.getElementById('txtNum');
    let num = Number(numero.value);
    if (num == null || num == '' || num == 0) {
        window.alert('Valor Invalído!');
    } else {
        let myNodeP = document.createElement('p');
        let myNodeText = document.createTextNode('Resultado: ');
        myNodeP.appendChild(myNodeText);
        document.getElementById('res').appendChild(myNodeP);
        document.getElementById('tabuada').innerHTML = '';
        for (var i = 1; i <=10; i++) {
            let myNode = document.createElement('option');
            myNode.text += `${num} X ${i} = ${num * i}`;
            document.getElementById('tabuada').appendChild(myNode);
        }
    }
}