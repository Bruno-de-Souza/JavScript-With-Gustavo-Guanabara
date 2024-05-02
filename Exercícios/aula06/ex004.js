var nome = window.prompt('Qual é o seu nome?');
document.write(`Olá, ${nome}! Seu nome tem ${nome.length} letras. <br/>`);
document.write(`Seu nome em maiúsculo é ${nome.toUpperCase()}. <br/>`);
document.write(`Seu nome em minúsculo é ${nome.toLowerCase()}. <br/>`)


/*

n1 1545.5
n1.toFixed(2)  "1545.50"
n1.toFixed(2).replace('.', ',')  "1545,50"
n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})  "R$ 1.545,50"

*/