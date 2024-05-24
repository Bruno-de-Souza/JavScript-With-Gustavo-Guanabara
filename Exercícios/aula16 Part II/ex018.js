function contar() {
    let inicio = window.document.getElementById('nI');
    let fim = document.getElementById('nF');
    let passo = document.getElementById('nP');
    let resp = document.querySelector('div#res');
    let numI = Number(inicio.value);
    let numF = Number(fim.value);
    let numP = Number(passo.value);
    let emoji = `\u{1F449}`;
    let emoji2 = '\u{1F3C1}';
    if (numP == null || numP == '' || numP == 0) {
        window.alert('Impossivél contar! Assumindo Passo 1!');
        let c = '';
        for (var i = numI; i >= numF; i = i - 1) {
            c += i +`${emoji}`;
        }
        resp.innerHTML = `Contando: <br> ${c} ${emoji2}`;
    } else if (numI > numF) {
        let c = '';
        for (var i = numI; i >= numF; i = i - numP) {
            c += i +`${emoji}`;
        }
        resp.innerHTML = `Contando: <br> ${c} ${emoji2}`;
    } else {
        let c = '';
        for (var i = numI; i <= numF; i += numP) {
            c += i + `${emoji}`;
        }
        resp.innerHTML = `Contando: <br> ${c} ${emoji2}`;
    }
}