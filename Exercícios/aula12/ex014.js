var day = new Date();
var dayOfWeek = day.getDay();
console.log(`Hoje é o dia ${dayOfWeek} da semana!`);

switch(dayOfWeek) {
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Segunda');
        break;
    case 2:
        console.log('Terça');
        break;
    case 3:
        console.log('Quarta');
        break;
    case 4:
        console.log('Quainta');
        break;
    case 5:
        console.log('Sexta');
        break;
    case 6: 
        console.log('Sábado');
        break;
    default:
        console.log('Dian inválido!');
        break;
}