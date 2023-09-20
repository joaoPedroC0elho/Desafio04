function Aluno(nome) {
  this.nome = nome;
  this.notas = [];
}

Aluno.prototype.incluirNota = function(nota) {
  this.notas.push(nota);
};

Aluno.prototype.calcularMedia = function() {
  const total = this.notas.reduce((acc, nota) => acc + nota, 0);
  return total / this.notas.length;
};

function verificarAprovacao(aluno, callback) {
  const media = aluno.calcularMedia();
  if (media >= 6) {
    callback(aluno, 'APROVADO');
  } else {
    callback(aluno, 'REPROVADO');
  }
}

function exibirStatus(aluno, status) {
  console.log(`O aluno ${aluno.nome} está ${status} com média ${aluno.calcularMedia()}`);
}

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function obterNotasAluno(aluno) {
  rl.question(`Insira as notas para o aluno ${aluno.nome} (separadas por espaço): `, (input) => {
    const notas = input.split(' ').map(parseFloat);

    if (notas.length < 2) {
      console.log('Você deve inserir pelo menos duas notas.');
      obterNotasAluno(aluno);
      return;
    }

    notas.forEach((nota) => {
      aluno.incluirNota(nota);
    });

    verificarAprovacao(aluno, exibirStatus);
    rl.close();
  });
}

const aluno1 = new Aluno('João');
const aluno2 = new Aluno('Maria');

obterNotasAluno(aluno1);
