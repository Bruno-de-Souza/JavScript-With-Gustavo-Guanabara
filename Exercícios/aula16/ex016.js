function contar() {
    var txtIn = document.getElementById('txtIn');
    var txtFim = document.getElementById('txtFim');
    var txtPasso = document.querySelector('div#txtPasso');
    var res = document.querySelector('div#res');
    if (txtIn.value == null || txtIn.value == "") {
        res.innerHTML = `Impossível contar!`;
    } else { 
        var total = 0;
        for (var i = Number(txtIn.value); i <= Number(txtFim.value); i += Number(txtPasso.value)) {
            total += i;
        }
        res.innerHTML = `Contando: `;
    }
}