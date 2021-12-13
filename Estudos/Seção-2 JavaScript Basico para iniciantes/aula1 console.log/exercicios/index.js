// console.log('Meu nome é "PEDRO". Estou aprendendo JS as ' + 10 + ' da manhã');
// console.log('Meu nome é "PEDRO". Estou aprendendo JS as ', 10, ' da manhã');

let nome = 'PEDRO';
let hora = new Date();
let periodo = '';
 
if(hora.getHours() > 0 && hora.getHours() < 6){
    periodo = 'madrugada';
} else if (hora.getHours() >= 6 && hora.getHours() < 12){
    periodo = 'manhã';
} else if (hora.getHours() >= 12 && hora.getHours() <= 18){
    periodo = 'tarde';
} else {
    periodo = 'noite';
}
 
console.log(`Olá, meu nome é "${nome}".
Estou aprendendo JavaScript ás ${hora.getHours()} da ${periodo}`);