async function main() {
    async function sleep(timeInSeconds) {
        return new Promise((resolve) => setTimeout(resolve, timeInSeconds * 1000));
    }

    function randomList(maxValue = 100, size = 10) {
        const numeros = [];

        for (let i = 0; i < size; i++) {

            const n = Math.round(Math.random() * maxValue);
            numeros.push(n);
        }

        return numeros;
    }

    const numeros = randomList(1000, 50).sort((a, b) => a - b);
    const buscar = Math.round((Math.random() * 49));
    const alvo = numeros[buscar];
    console.log('Lista de números:', numeros);
    console.log(`Onde está o número ${alvo}?`);

    let baixo = 0;
    let alto = numeros.length - 1;
    let meio;
    let encontrado = false;
    let posicao = -1;

    for (let x = 0; x < numeros.length; x++) {

        if (baixo <= alto && !encontrado) {

            meio = Math.floor((baixo + alto) / 2);

            if (numeros[meio] === alvo) {

                encontrado = true
                posicao = meio

            } else {

                if (numeros[meio] < alvo) {
                    // Se o que eu quero é maior, descarto a metade da esquerda
                    baixo = meio + 1

                } else {
                    // Se o que eu quero é menor, descarto a metade da direita
                    alto = meio - 1
                }
            }
        }
    }

    if (encontrado) {
        console.log(`O número ${alvo} está na posição:`, posicao);
    } else {
        console.log("Não encontrado.");
    }


}

main();