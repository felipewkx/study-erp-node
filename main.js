const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let estoque = [];

function boasVindas() {
    console.log("====================");
    console.log(" BEM VINDO AO ERP NODE! ");
}

function menu() {
    console.log("====================");
    console.log("1. Consultar Estoque");
    console.log("2. Adicionar Item");
    console.log("3. Remover Item");
    console.log("0. Sair");
    console.log("====================");

    interagir();
}

function menuVoltar() {
    console.log("====================");
    console.log("9. Voltar");
    console.log("0. Sair");
    console.log("====================");

    interagir();
}

function interagir() {
    rl.question("Escolha uma opção: ", function (resposta) {
        console.clear();

        if (resposta === '0') {
            rl.close();
            return;
        }

        if (resposta === '1') {
            consultarEstoque();
            return;
        }

        if (resposta === '2') {
            adicionarItem();
            return;
        }

        if (resposta === '3') {
            removerItem();
            return;
        }

        if (resposta === '9') {
            menu();
            return;
        }

        menu();
    });
}

function consultarEstoque() {
    console.log("| ESTOQUE");

    if (estoque.length === 0) {
        console.log("Estoque vazio.");
    } else {
        console.table(estoque);
    }

    menuVoltar();
}

function adicionarItem(itemNome, itemQuantidade) {
    console.log("| ADICIONAR ITEM");

    if (itemNome === undefined) {
        rl.question("Qual o nome do item? ", function (nomeDoItem) {
            adicionarItem(nomeDoItem);
        });
        return;
    }

    if (itemQuantidade === undefined) {
        rl.question("Qual é a quantidade? ", function (quantidadeDoItem) {
            adicionarItem(itemNome, quantidadeDoItem);
        });
        return;
    }

    const quantidade = Number(itemQuantidade);

    if (isNaN(quantidade)) {
        console.log("Quantidade inválida!");
        menu();
        return;
    }

    estoque.push({
        nome: itemNome,
        quantidade: quantidade,
    });

    console.log("Item adicionado com sucesso!");
    menu();
}

function removerItem(nomeItem, quantidadeRemover) {
    console.log("| REMOVER ITEM");

    if (nomeItem === undefined) {
        rl.question("Qual o nome do item para remover? ", function (nome) {
            removerItem(nome);
        });
        return;
    }

    if (quantidadeRemover === undefined) {
        rl.question("Qual a quantidade para remover? ", function (qtd) {
            removerItem(nomeItem, qtd);
        });
        return;
    }

    const index = estoque.findIndex(item => item.nome === nomeItem);

    if (index === -1) {
        console.log("Item não encontrado!");
    } else {
        const quantidade = Number(quantidadeRemover);

        if (isNaN(quantidade)) {
            console.log("Quantidade inválida!");
            menu();
            return;
        }

        estoque[index].quantidade -= quantidade;

        if (estoque[index].quantidade <= 0) {
            estoque.splice(index, 1);
            console.log("Item removido completamente!");
        } else {
            console.log("Quantidade atualizada!");
        }
    }

    menu();
}

function principal() {
    console.clear();
    boasVindas();
    menu();
}

principal();