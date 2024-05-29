function add() {
    let num = window.document.getElementById('num');
    let res = window.document.getElementById('res');
    let values = new Array(100);
    let index = 0;
    let resp = '';
    let n = Number(num.value);
    if (n == null || n == '' || n <= 0) {
        window.alert('[ERRO] Valor inválido!');
    } else {
        if (index < values.length) {
            values[index] = n;
            index++;
            document.getElementById('res').n = '';
        } else {
            window.alert('Limite de valores atingidos!');
        }
        for (let i = 0; i < index; i++) {
            resp += values[i];
            let node = document.createElement('option');
            node.text = `Valor ${resp} foi adicionado!`;
            res.appendChild(node);
        }
    }
}
