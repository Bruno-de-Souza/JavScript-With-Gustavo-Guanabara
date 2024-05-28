function add() {
    let num = window.document.getElementById('num');
    let res = window.document.getElementById('res');
    let values = [];
    let n = Number(num.value);
    if (n == null || n == '' || n <= 0) {
        window.alert('[ERRO] Valor inválido!');
    } else {
        res.innerHTML = '';
        for (let i = 0; i <= n; i++) {
            let node = document.createElement('option');
            node.text += `O número ${i} foi adicionado!`;
            res.appendChild(node); 
        }
    }
}