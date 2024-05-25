function gerar() {
    let numero = document.getElementById('txtNum');
    let tab = document.getElementById('tabuada');
    let num = Number(numero.value);
    if (num == null || num == '' || num == 0) {
        window.alert('Valor Invalído!');
    } else {
        tab.innerHTML = '';
        for (var i = 1; i <=10; i++) {
            let myNode = document.createElement('option');
            myNode.text += `${num} X ${i} = ${num * i}`;
            tab.appendChild(myNode);
        }
    }
}