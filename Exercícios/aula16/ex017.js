function calcular() {
    var num = document.getElementById('num');
    var res = document.querySelector('div#res');

    if (num.value == null || num.value == "" || num.value == 0) {
        window.alert('[Erro!] Valor inválido!');
    } else {
        var total = '';
        for (var i = 1; i <= 10; i++) {
            total += `${num.value} x ${i} = ${num.value * i}` + '<br>';
        }
        res.innerHTML = `${total}`;
    }
 }