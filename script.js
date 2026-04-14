let estoque = [];
let proximoId = 1;

let estado = "menu";
let temp = {};

const chat = document.getElementById("chat");
const input = document.getElementById("input");

function print(msg) {
    chat.innerHTML += `<div class="msg">${msg}</div>`;
    chat.scrollTop = chat.scrollHeight;
}

function boasVindas() {
    print("====================");
    print("BEM VINDO AO ERP WEB!");
}

function menu() {
    estado = "menu";
    print("====================");
    print("1. Consultar Estoque");
    print("2. Adicionar Item");
    print("3. Remover Item");
    print("0. Sair");
    print("====================");
}

function menuVoltar() {
    estado = "voltar";
    print("====================");
    print("9. Voltar");
    print("0. Sair");
    print("====================");
}

function consultarEstoque() {
    print("| ESTOQUE");

    if (estoque.length === 0) {
        print("Estoque vazio.");
    } else {
        estoque.forEach(item => {
            print(`ID: ${item.id} | Nome: ${item.nome} | Qtd: ${item.quantidade}`);
        });
    }

    menuVoltar();
}

function adicionarItem(nome, quantidade) {
    print("| ADICIONAR ITEM");

    if (!nome) {
        estado = "add_nome";
        print("Qual o nome do item?");
        return;
    }

    if (!quantidade) {
        temp.nome = nome;
        estado = "add_qtd";
        print("Qual é a quantidade?");
        return;
    }

    quantidade = Number(quantidade);

    if (isNaN(quantidade)) {
        print("Quantidade inválida!");
        menu();
        return;
    }

    const existente = estoque.find(item =>
        item.nome.toLowerCase() === nome.toLowerCase()
    );

    if (existente) {
        existente.quantidade += quantidade;
        print("Quantidade atualizada para item já existente!");
    } else {
        estoque.push({
            id: proximoId++,
            nome: nome,
            quantidade: quantidade
        });
        print("Item adicionado com sucesso!");
    }

    menu();
}

function removerItem(idOuNome, qtd) {
    print("| REMOVER ITEM");

    if (!idOuNome) {
        estado = "remover_id";
        print("Digite o ID ou nome do item:");
        return;
    }

    if (!qtd) {
        temp.idOuNome = idOuNome;
        estado = "remover_qtd";
        print("Qual a quantidade para remover?");
        return;
    }

    qtd = Number(qtd);

    if (isNaN(qtd)) {
        print("Quantidade inválida!");
        menu();
        return;
    }

    let index;
    const id = Number(idOuNome);

    if (!isNaN(id)) {
        index = estoque.findIndex(item => item.id === id);
    } else {
        index = estoque.findIndex(item =>
            item.nome.toLowerCase() === idOuNome.toLowerCase()
        );
    }

    if (index === -1) {
        print("Item não encontrado!");
        menu();
        return;
    }

    estoque[index].quantidade -= qtd;

    if (estoque[index].quantidade <= 0) {
        estoque.splice(index, 1);
        print("Item removido completamente!");
    } else {
        print("Quantidade atualizada!");
    }

    menu();
}

function enviar() {
    const valor = input.value.trim();
    if (!valor) return;

    print(`> ${valor}`);
    input.value = "";

    processar(valor);
}

function processar(valor) {

    if (estado === "menu") {
        if (valor === "1") return consultarEstoque();
        if (valor === "2") return adicionarItem();
        if (valor === "3") return removerItem();
        if (valor === "0") return print("Encerrado.");
        return menu();
    }

    if (estado === "voltar") {
        if (valor === "9") return menu();
        if (valor === "0") return print("Encerrado.");
        return menu();
    }

    if (estado === "add_nome") {
        return adicionarItem(valor);
    }

    if (estado === "add_qtd") {
        return adicionarItem(temp.nome, valor);
    }

    if (estado === "remover_id") {
        return removerItem(valor);
    }

    if (estado === "remover_qtd") {
        return removerItem(temp.idOuNome, valor);
    }
}

// Inicialização
boasVindas();
menu();