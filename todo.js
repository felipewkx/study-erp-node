const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let tarefas = [];
let proximoId = 1;

function boasVindas() {
    console.log("====================");
    console.log(" BEM VINDO A LISTA DE TAREFAS! ");
}

function menu() {
    console.log("====================");
    console.log("1. Listar Tarefas");
    console.log("2. Adicionar Tarefa");
    console.log("3. Concluir Tarefa");
    console.log("4. Remover Tarefa");
    console.log("0. Sair");
    console.log("====================");
    interagir();
}

function menuVoltar() {
    console.log("====================");
    console.log("9. Voltar");
    console.log("0. Sair");
    console.log("====================");
    interagirSecundario();
}
// Limpa o console, exibe as opções, aguarda a resposta e se for inválida exibe a msg de erro e volta para o menu
function interagir() {
    rl.question("Escolha uma opção: ", function (resposta) {
        console.clear();
        switch (resposta) {
            case '0': rl.close(); return;
            case '1': listarTarefas(); break;
            case '2': adicionarTarefa(); break;
            case '3': concluirTarefa(); break;
            case '4': removerTarefa(); break;
            default: console.log("Opção inválida!"); menu(); break;
        }
    });
}
// Assim como o interagir principal, mas para os submenus, com Sair e Voltar
function interagirSecundario() {
    rl.question("Escolha uma opção: ", function (resposta) {
        console.clear();
        if (resposta === '0') { rl.close(); return; }
        if (resposta === '9') { menu(); return; }
        console.log("Opção inválida!");
        menuVoltar();
    });
}
// Lista as tarefas, se não tiver nenhuma, exibe a msg de Sem Tarefas, além do submenu de Voltar e Sair
function listarTarefas() {
    console.log("| TAREFAS");
    if (tarefas.length === 0) {
        console.log("Sem Tarefas");
    } else {
        console.table(tarefas);
    }
    menuVoltar();
}
// Começa pedindo o nome da tarefa, pois é sempre undefined na primeira chamada. Testa se é repetido via 'some', ignorando maísculas
// e minúsculas. Se for repetido, exibe msg de erro e volta ao menu principal. Se não for repetido,
// adiciona a tarefa no array com id, nome e status Nao Concluido, exibe a mensagem de sucesso e volta para o menu principal
function adicionarTarefa(nomeDaTarefa) {
    if (nomeDaTarefa === undefined) {
        console.log("| ADICIONAR TAREFA");
        rl.question("Qual a tarefa? ", function (nome) {
            adicionarTarefa(nome);
        });
        return;
    }
    const jaExiste = tarefas.some(t => t.nome.toLowerCase() === nomeDaTarefa.toLowerCase());
    if (jaExiste) {
        console.log("Erro: Já existe uma tarefa com este nome!");
        menuVoltar();
    } else {
        tarefas.push({ id: proximoId++, nome: nomeDaTarefa, status: "Nao concluido" });
        console.log("Tarefa adicionada com sucesso!");
        menu();
    }
}

// Começa pedindo o ID ou o Nome da tarefa, pois é sempre undefined na primeira chamada.
// Recebe o ID ou o Nome, procura no array via findIndex, se não encontrar exibe msg de erro
// Se encontrar, muda o status para Concluído, exibe a mensagem de sucesso e volta para o menu principal
function concluirTarefa(entrada) {
  if (entrada === undefined) {
    console.log("| CONCLUIR TAREFA");
    rl.question("Digite o ID ou o Nome da tarefa: ", function (res) {
      concluirTarefa(res);
    });
    return;
  }

  const index = tarefas.findIndex(t => 
    t.id === parseInt(entrada) || 
    t.nome.toLowerCase() === entrada.toLowerCase()
  );

  if (index === -1) {
    console.log("Tarefa não encontrada!");
  } else {
    tarefas[index].status = "Concluido";
    console.log(`Tarefa '${tarefas[index].nome}' marcada como Concluído!`);
  }
  menu();
}
// Começa pedindo o ID ou Nome da tarefa, pois é sempre undefined na primeira chamada.
// Recebe o ID ou o Nome, preocura no array via findIndex, buscando o ID como valor numérico previamente fornecido pra lista de tarefas,
// ou o Nome, ignorando maiúsculas e minúsculas. Se não encontrar, exibe msg de erro
// Se encontrar, cria a const removida, usando splice no index encontrado do array tarefas
// e exibe a msg de sucesso com o nome da tarefa removida
function removerTarefa(entrada) {
  if (entrada === undefined) {
    console.log("| REMOVER TAREFA");
    rl.question("Digite o ID ou o Nome da tarefa: ", function (res) {
      removerTarefa(res);
    });
    return;
  }

  const index = tarefas.findIndex(t => 
    t.id === parseInt(entrada) || 
    t.nome.toLowerCase() === entrada.toLowerCase()
  );

  if (index === -1) {
    console.log("Tarefa não encontrada!");
  } else {
    const removida = tarefas.splice(index, 1);
    console.log(`Tarefa '${removida[0].nome}' removida com sucesso!`);
  }
  menu();
}

function principal() {
  console.clear();
  boasVindas();
  menu();
}

principal();