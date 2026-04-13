// 1. O Verificador de Clima
    // O Problema: O programa recebe uma temperatura.
    // A Lógica:
        // Se for menor que 15: "Está frio, leve um casaco."
        // Entre 15 e 25: "Clima agradável."
        // Acima de 25: "Está calor, hidrate-se."

const args = process.argv.slice(2);

const temperatura = args[0];

if (temperatura < 15) {
    console.log("Está frio, leve um casaco.");
} else if (temperatura <= 25) {
    console.log("Clima agradável.");
} else {
    console.log("Está calor, hidrate-se.");
}

console.log({
    temperatura
   
})

