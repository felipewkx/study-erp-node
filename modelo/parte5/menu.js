// menu.js
const readline = require('readline');

function criarMenu(titulo, opcoes) {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log(`\n==============================`);
    console.log(`    ${titulo.toUpperCase()}    `);
    console.log(`==============================`);

    opcoes.forEach((opt, index) => {
        console.log(`${index + 1}. ${opt.texto}`);
    });

    console.log(`0. Sair`);
    console.log(`==============================`);

    rl.question("Escolha uma opção: ", (escolha) => {

        if (escolha === '0') {
            console.log("Encerrando sistema...");
            rl.close();
            return;
        }

        const indice = parseInt(escolha) - 1;
        const opcaoSelecionada = opcoes[indice];

        if (opcaoSelecionada && typeof opcaoSelecionada.acao === 'function') {

            opcaoSelecionada.acao(rl, () => {
                rl.close();
                criarMenu(titulo, opcoes);
            });

        } else {
            console.log("⚠️ Opção inválida!");
            rl.close();
            criarMenu(titulo, opcoes);
        }
    });
}

module.exports = { criarMenu };