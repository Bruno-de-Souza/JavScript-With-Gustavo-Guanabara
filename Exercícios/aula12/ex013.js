var hora = new Date();
var horaAtual = hora.getHours();
var minAtual = hora.getMinutes();
if(horaAtual < 12 ) {
    console.log('Bom dia!');
} else if (horaAtual <= 18) {
    console.log('Boa tarde!');
} else {
    console.log('Boa noite!');
}
console.log(`Agora são exatamente ${horaAtual} horas e ${minAtual} minutos!`);