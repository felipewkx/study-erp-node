const args = process.argv.slice(2);

const nome = args[0];
const salarioBruto = args[1];

const desconto = salarioBruto * 0.11
const salarioLiquido = salarioBruto - desconto;



console.log({
    nome,
    salarioLiquido,
   
})

