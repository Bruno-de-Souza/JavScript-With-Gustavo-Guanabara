function gerar() {
    let numero = document.getElementById('txtNum');
    let tab = document.getElementById('tabuada');
    let num = Number(numero.value);
    for (var i = 1; i <=10; i++) {
        tab.innerHTML += `${num} X ${i} = ${num * i} <br>`;
    }
}