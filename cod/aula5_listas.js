console.log('Discilinas');

const listaDeDisciplinas = new Array(
    'Tópicos Especiais',
    'Desenvolvimento Web',
    'Programação Orientada a objetos');

console.log("Disciplinas disponíveis");

listaDeDisciplinas.push('Nova Disciplina');

listaDeDisciplinas.splice(3,1);
console.log(listaDeDisciplinas);
console.log(listaDeDisciplinas[2]);
