let amigo = {
    nome: 'Jose',
    sexo: 'Masculino',
    idade: 20,
    peso : 85.4,
    engodar(p=0) {
        console.log('Engordou!');
        this.peso += p;
    }
};
amigo.engodar(5);
console.log(`O ${amigo.nome} pesa ${amigo.peso}`);