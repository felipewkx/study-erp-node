// 2. Validador de Login (Operadores Lógicos)
    // O Problema: Simular um sistema onde o acesso
    // só é permitido se o usuário E a senha estiverem corretos.

    const args = process.argv.slice(2);

const login = args[0];
const senha = args[1];

if (login === "admin" && senha === "123456") {
    console.log("Acesso permitido.");
} else {
    console.log("Acesso negado.");
}

console.log({
    login: login,
    senha: senha
})

