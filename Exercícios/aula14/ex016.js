function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var txtano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    if (txtano.value.length == 0 || Number(txtano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var sexo = document.getElementsByName('radsex')
        var idade = ano - Number(txtano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (sexo[0].checked) {
            genero = 'Homem';
            if (idade >= 0  && idade < 10) {
                //criança
                img.setAttribute('src', 'bebe-masculino.jpg');
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'homem-jovem.jpg');
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homem-adulto.jpg');
            } else {
                //idoso
                img.setAttribute('src', 'homem-idoso.jpg');
            }
        } else if (sexo[1].checked) {
            genero = 'Mulher';
            if (idade >= 0  && idade < 10) {
                //criança
                img.setAttribute('src', 'bebe-feminino.jpg');
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'mulher-jovem.jpg');
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'mulher-adulta.jpg');
            } else {
                //idoso
                img.setAttribute('src', 'mulher-idosa.jpg');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!`;
        res.appendChild(img);
    }
}