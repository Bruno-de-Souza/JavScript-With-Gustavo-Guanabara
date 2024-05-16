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
                img.setAttribute('src', '/c:/Users/bruno/OneDrive/Documentos/Developer Files/JavScript-With-Gustavo-Guanabara/Exercícios/aula14/bebe-masculino.jpg');
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', '/c:/Users/bruno/OneDrive/Documentos/Developer Files/JavScript-With-Gustavo-Guanabara/Exercícios/aula14/jovem-masculino.jpg');
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', '/c:/Users/bruno/OneDrive/Documentos/Developer Files/JavScript-With-Gustavo-Guanabara/Exercícios/aula14/adulto-masculino.jpg');
            } else {
                //idoso
                img.setAttribute('src', '/c:/Users/bruno/OneDrive/Documentos/Developer Files/JavScript-With-Gustavo-Guanabara/Exercícios/aula14/idoso-masculino.jpg');
            }
        } else if (sexo[1].checked) {
            genero = 'Mulher';
            if (idade >= 0  && idade < 10) {
                //criança
            } else if (idade < 21) {
                //jovem
            } else if (idade < 50) {
                //adulto
            } else {
                //idoso
            }
        }
        res.style.textAlign = 'center';
        img.innerHTML = `Detectamos ${genero} com ${idade} anos!`;
        res.appendChild(img);
    }
}