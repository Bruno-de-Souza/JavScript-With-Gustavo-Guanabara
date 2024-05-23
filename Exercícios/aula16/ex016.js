function contar() {
    var txtIn = document.getElementById('txtIn');
    var txtFim = document.getElementById('txtFim');
    var txtPasso = document.getElementById('txtPasso');
    var res = document.querySelector('div#res');
    //Validando os valores inseridos
    if (txtIn.value == null || txtIn.value == "" || txtIn.value == 0 || txtFim.value == null || txtFim.value == "" || txtFim.value == 0) {
        res.innerHTML = `Impossível contar!`;
    } else if (txtPasso.value == null || txtPasso.value == "" || txtPasso.value == 0) {
        window.alert('[Erro] Passo Inválido! Considerando Passo 1!');
        txtPasso.value = 1;
        var total = '';
        var emoji = '\u{1F449}';
        var emoji2 = '\u{1F3C1}';
        //Contagem crescente
        for (var i = Number(txtIn.value); i <= Number(txtFim.value); i += Number(txtPasso.value)){
            total += `${i} ${emoji}`;
        }
        //Contagem decrescente
        for (var i = Number(txtIn.value); i > Number(txtFim.value); i = i - Number(txtPasso.value)) {
            total = total + `${i} ${emoji}`;
        }
        res.innerHTML = `Contando: <br> ${total} ${emoji2}`;
    } else if (txtIn.value > txtFim.value) {
        var total = '';
        var emoji = String.fromCodePoint(0x1F449);
        var emoji2 = String.fromCodePoint(0x1F3C1);
        for (var i = Number(txtIn.value); i > Number(txtFim.value); i = i - Number(txtPasso.value)) {
            total += `${i} ${emoji}`;
        }
        res.innerHTML = `Contando: <br> ${total} ${emoji2}`;
    } else { 
        var total = '';
        var emoji = String.fromCodePoint(0x1F449);
        var emoji2 = String.fromCodePoint(0x1F3C1);
        for (var i = Number(txtIn.value); i <= Number(txtFim.value); i += Number(txtPasso.value)){
            total += `${i} ${emoji}`;
        }
        res.innerHTML = `Contando: <br> ${total} ${emoji2}`;
    }
} 