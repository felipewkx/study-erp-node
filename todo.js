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

function interagir() {
  rl.question("Escolha uma opção: ", function (resposta) {
    console.clear();
    switch (resposta) {
      case '0': rl.close(); return;
      case '1': listarTarefas(); break;
      case '2': adicionarTarefa(); break;
      case '3': concluirTarefa(); break;
      case '4': removerTarefa(); break;
      default:
        console.log("Opção inválida!");
        menu();
        break;
    }
  });
}

function interagirSecundario() {
  rl.question("Escolha uma opção: ", function (resposta) {
    console.clear();
    if (resposta === '0') { rl.close(); return; }
    if (resposta === '9') { menu(); return; }
    console.log("Opção inválida!");
    menuVoltar();
  });
}

function listarTarefas() {
  console.log("| TAREFAS");
  if (tarefas.length === 0) {
    console.log("Sem Tarefas");
  } else {
    console.table(tarefas);
  }
  menuVoltar();
}

function adicionarTarefa(nomeDaTarefa) {
  if (nomeDaTarefa === undefined) {
    console.log("| ADICIONAR TAREFA");
    rl.question("Qual a tarefa? ", function (nome) {
      adicionarTarefa(nome);
    });
    return;
  }
  tarefas.push({ id: proximoId++, nome: nomeDaTarefa, status: "Nao concluido" });
  console.log("Tarefa adicionada com sucesso!");
  menu();
}

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
