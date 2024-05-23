function calcular() {
    var num = document.getElementById('num');
    var seltab = document.getElementById('seltab');
    if (num.value == null || num.value == "" || num.value == 0) {
        window.alert('[Erro!] Valor inválido!');
    } else {
        seltab.innerHTML = '';
        for (var i = 1; i <= 10; i++) {
            let item = document.createElement('option');
            item.text += `${num.value} x ${i} = ${num.value * i}`;
            seltab.appendChild(item);
        }
    }
 }