const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function printarNumeros(valores, index) {
  if (index === valores.length) {
    console.log('Valores inseridos:', valores.join(', '));
    rl.close();
    return;
  }

  const valor = parseFloat(valores[index]);

  if (!isNaN(valor)) {
    console.log(`Número ${index + 1}: ${valor}`);
  } else {
    console.log(`Valor na posição ${index + 1} não é numérico.`);
  }

  printarNumeros(valores, index + 1);
}

function lerCincoNumeros() {
  rl.question('Insira 5 números separados por vírgula: ', (input) => {
    const valores = input.split(',');

    if (valores.length !== 5) {
      console.log('Você deve inserir exatamente 5 números separados por vírgula.');
      lerCincoNumeros();
      return;
    }

    printarNumeros(valores, 0);
  });
}

lerCincoNumeros();
