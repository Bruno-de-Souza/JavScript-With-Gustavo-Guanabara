function contar() {
    var txtIn = document.getElementById('txtIn');
    var txtFim = document.getElementById('txtFim');
    var txtPasso = document.getElementById('txtPasso');
    var res = document.querySelector('div#res');
    if (txtIn.value == null || txtIn.value == "") {
        res.innerHTML = `Impossível contar!`;
    } else { 
        var total = '';
        var emoji = String.fromCodePoint(0x1F449);
        var emoji2 = String.fromCodePoint(0x1F3C1);
        for (var i = Number(txtIn.value); i <= Number(txtFim.value); i += Number(txtPasso.value)){
            total += `${i} ${emoji}`;
        }
        res.innerHTML = `${total} ${emoji2}`;
    }
}