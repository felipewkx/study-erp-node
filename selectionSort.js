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

    const numeros = randomList(100, 5);
    /* INSERIR SEU CÓDIGO AQUI */
    console.log(numeros);

    let i = 0;
    for (let x = 0; x < numeros.length - 1; x++) {

        let indice_do_menor = i;
        let j = i + 1;

        for (let y = 0; y < numeros.length; y++) {
            if (numeros[j] < numeros[indice_do_menor]) {
                indice_do_menor = j;
            }
            j = j + 1;
        }

        console.log({ i });
        console.log('antes ', numeros);


        let temp = numeros[i];
        numeros[i] = numeros[indice_do_menor];
        numeros[indice_do_menor] = temp;

        console.log('depois', numeros)
        console.log('---------------')
        await sleep(2)

        i = i + 1;
    }
    console.log(numeros)
}

main();