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

    // const numeros = randomList(100, 5);
    const numeros = [4, 10, 7, 8, 3, 9]
    console.log(numeros);

    /* INSERIR SEU CÓDIGO AQUI */
    let i = 1;
    for (let x = 0; x < numeros.length - 1; x++) {
        let pino = numeros[i];
        let j = i - 1;
        for (let y = 0; y < i; y++) {
            if (j >= 0 && numeros[j] > pino) {
                numeros[j + 1] = numeros[j];
                j = j - 1;
            }
        }
        console.log({ i })
        console.log('antes ', numeros)
        numeros[j + 1] = pino;
        console.log('depois', numeros)
        console.log('---')
        await sleep(2);

        i = i + 1;
    }
    console.log(numeros)
}

main();