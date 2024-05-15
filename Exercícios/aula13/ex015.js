function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var horaAtual = data.getHours();
    var minutoAtual = data.getMinutes();
    msg.innerHTML = `Agora sâo ${horaAtual} horas e ${minutoAtual} minutos!`;
    if (horaAtual >= 0 && horaAtual < 12) {
        //Bom dia
        img.src = '/Exercícios/aula13/foto-manhã.jpg'
        document.body.style.background = '#85A0B0';
    } else if (horaAtual >= 12 && horaAtual <= 18) {
        //Boa tarde
        img.src = '/Exercícios/aula13/foto-tarde.jpg'
        document.body.style.background = '#35738E';
    } else {
        //Boa noite
        img.src = '/Exercícios/aula13/foto-noite.jpg'
        document.body.style.background = '#C0A2A0';
    }
}