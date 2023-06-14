const fs = require ("fs")

// como criar um arquivo, caso faca em um arquivo existente ele apaga tudo e sobre escreve seu conteudo

fs.writeFile("arquivo-feito-node-aula-file.txt", "Este arquivo foi feito com o nodeJS", err => {
    console.log("1 Caso algo de errado veja :", err)
})

// serve para por um conteudo apos o conteudo anterior

fs.appendFile("arquivo-feito-node-aula-file.txt", ", Esse texto foi inserido com o appendFile", err => {
    console.log("2 Caso algo de errado veja :", err)
})

// renomeando arquivo com rename

fs.rename("arquivo-feito-node-aula-file.txt", "renomeado-arquivo-feito-node-aula-file.txt", err => {
    console.log("3 Caso algo de errado veja :", err)
})

// deletando um arquivo com unlink

fs.writeFile("novo-arquivo.txt", "uma pena serei deletado", err => {console.log("4 Algo deu errado", err)})

fs.unlink("novo-arquivo.txt", err => {
    console.log("5 Algo deu errado, ", err)
})

// mostrando o diretorio atual similar pwd

console.log(__dirname)