// trabalhando com a lib process

const process = require("process")

// Pedir para usuario entrar com informacoes

// stdin = entrada
// data = o que queremos que ele digite
// keyboard = tudo que usuario digitar vai cair dentro desse argumento
//  process.exit() = para sair do modo digitacao apos digitar e apertar enter

console.log("digite seu nome")

process.stdin.on("data", (keyboard) => {
    process.stdin.write(`Texto digitado pelo usuario ${keyboard}`)
    process.exit()
})