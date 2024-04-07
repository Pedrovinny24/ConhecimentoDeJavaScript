// criar uma função
// calcular o IMC
// formula é peso / (altura * altura);

function imc(valorPeso, valorAltura) {
    const peso = valorPeso;
    const altura = valorAltura;
    
    const resultadoImc = peso / (altura * altura);
    console.log(`Seu imc é ${resultadoImc}`);
}

imc(71, 1.80);