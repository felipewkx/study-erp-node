// 3. Calculadora de IMC (Lógica Matemática + Condicionais)
    // O Problema: Receber peso e altura e calcular
    // o Índice de Massa Corporal: $IMC = peso/altura^2.
    // A Lógica: Exibir uma mensagem diferente para cada faixa
    // (Abaixo do peso, Peso normal, Sobrepeso, etc.).
    // Dica: No JavaScript, para elevar ao quadrado,
    // podemos usar altura * altura ou Math.pow(altura, 2).
    

const args = process.argv.slice(2);

if (args.length < 2) {
    console.log("-----------------------------------------");
    console.log("   🏋️  BEM-VINDO À CALCULADORA DE IMC 🏋️   ");
    console.log("-----------------------------------------");
    console.log("Como usar: node imc.js PESO ALTURA");
    console.log("Exemplo:   node imc.js 80 1.80");
    console.log("-----------------------------------------");

     if (args.length < 3) {
    console.log("Erro: Você esqueceu de digitar o peso ou a altura.");
    process.exit(1); // "Parei porque o usuário não mandou os dados."
}

    process.exit(); // Para a execução aqui


}

const peso = Number(args[0]);
const altura = Number(args[1]);

const imc = peso / (altura * altura);


if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc < 24.9) { 
    console.log("Peso normal");
} else if (imc < 29.9) {
    console.log("Sobrepeso");
} else if (imc < 34.9) { 
    console.log("Obesidade grau 1");
} else if (imc < 39.9) { 
    console.log("Obesidade grau 2");
} else {
    console.log("Obesidade grau 3");
}

console.log({ peso, altura, imc: imc.toFixed(2) });


