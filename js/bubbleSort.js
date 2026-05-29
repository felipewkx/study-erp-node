const numeros = [];

// Repita 10 vezes
for (let i = 0; i < 10; i++) {
    // Adicione número aleatório entre 1 e 1000 a números
    const n = Math.round(Math.random() * 100);
    numeros.push(n)
} // Fim do Repita 10 vezes

console.log(numeros)

// mude 'tamanho' para 'tamanho de números'
const tamanho = numeros.length;

// Repita 'tamanho' vezes
for (let x = 1; x <= tamanho; x++) {
    // mude 'i' para '1'
    let i = 0;
    for (let y = 1; y < tamanho; y++) {

        // Se item 'i' de números for maior que item 'i' + 1 de 'números', então
        if (numeros[i] > numeros[i + 1]) {
            const temp = numeros[i];
            numeros[i] = numeros[i + 1]
            numeros[i + 1] = temp;
        }
        // Add '1' a 'i'
        i = i + 1;
    }
} // Fim do Repita 'tamanho' vezes

console.log(numeros)