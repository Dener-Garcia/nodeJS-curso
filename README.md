# Node JS curso

### Criando arquivo package.json

Para organizar nossas bibliotecas e dependencias do projeto rode o comando abaixo para criar um arquivo package.json

    npm init -y

### Instalando biblioteca externa

Para realizar algumas atividades vamos instalar certas bibliotecas para trablahar com o node, lembre-se de verificar no package.json se apos a instalacao da lib ela esta listada.

- Biblioteca para trabalhar com datas e relogios

        npm install moment

- Biblioteca process para trabalhar com entradas e saidas de dados ja vem com o node nao precisa instalar

- Biblioteca fs para manipular arquivos

### Entradas e saidas de dados

Como enviar e receber dados para backend atraves do process

> Veja o arquivo io.js

    console.log("digite seu nome")
    process.stdin.on("data", (keyboard) => {
    process.stdin.write(`Texto digitado pelo usuario ${keyboard}`)
    process.exit()
    })

- stdin = entrada
- data = o que queremos que ele digite
- keyboard = tudo que usuario digitar vai cair dentro desse argumento
- process.exit() = para sair do modo digitacao apos digitar e apertar enter

### Manipulando arquivo (criar, remover e atualizar arquivos)

Como criar arquivos, renomear, deletar e atualizar o conteudo de algum arquivo no servidor pelo nodeJS com a lib FS

> Veja o arquivo file.js

        const fs = require ("fs")

> como criar um arquivo, caso faca em um arquivo existente ele apaga tudo e sobre escreve seu conteudo

        fs.writeFile("arquivo-feito-node-aula-file.txt", 
        "Este arquivo foi feito com o nodeJS", err => {
        console.log("1 Caso algo de errado veja :", err)
        })

> Atualizando conteudo dentro de um arquivo

        fs.appendFile("arquivo-feito-node-aula-file.txt", ", Esse texto foi inserido com o appendFile", err => {
        console.log("2 Caso algo de errado veja :", err)
        })

> Renomeando arquivo com rename

        fs.rename("arquivo-feito-node-aula-file.txt", "renomeado-arquivo-feito-node-aula-file.txt", err => {
        console.log("3 Caso algo de errado veja :", err)
        })

> Deletando um arquivo com unlink

        fs.writeFile("novo-arquivo.txt", "uma pena serei deletado", err => {console.log("4 Algo deu errado", err)})

        fs.unlink("novo-arquivo.txt", err => {
        console.log("5 Algo deu errado, ", err)
        })

> Mostrando o diretorio atual similar pwd

        console.log(__dirname)

### Verbos e status HTTP

Como sabemos o HTTP eh um protocolo de comunicacao na web.
O HTTP possui alguns verbos que ajudam a identificar que tipo de acao a gente quer realizar na URL qual a intencao que usuario tem.

ex: GET /users = queremos baixar os usuarios desse servidor

ex: POST /users = queremos criar usuarios

Um verbo junto com uma URL formal uma requisicao

- GET = Utilizados para solicitar dados do servidor
- POST = Utilizado para cadastrar dados no servidor
- PUT/PATCH = Utilizado para atualizar os dados no servidor de algo
- DELETE = Auto explicativo
> obs: No PUT e DELETE normalmente passamos junto um ID para apontar pra o lugar certo que queremos realizar a acao

#### Status

Estao relacionados as resposta de uma acao feita ao servidor, sao codigos numericos e cada um possui uma representacao

> Familia 200 = apresentados quando uma requisicao foi feita com sucesso

- 200 = Requisicao processada com sucesso, visto geralmente em uma resposta a um GET
- 201 = Registro criado com sucesso, visto geralmente em uma resposta a um POST

> Familia 400 = apresentados quando uma mensagem de erro ocorreo no cliente

- 400 = Sintaxe invalida
- 401 = Informa que o cliente precisa se autenticar
- 403 = Informa que o cliente mesmo autenticado, nao tem acesso ao recurso
- 422 = Requisicao bem formada, mas possui erros semanticos

> Familia 500 = quado o erro ocorre no servidor

### Montando um servidor HTTP com node JS puro

Um servidor web me permite acessar meu script atraves da web chamando uma URL e tendo respostas desse script que esta rodando em uma maquina

> Veja arquivo server.js

        const http = require("http")

- const http = require("http") = funcao para criar um servidor

        const servidor = http.createServer((req, res) => {
        console.log(req.method)
        console.log(req.url)
        res.statusCode = 200
    
- criando um H1 com res.end

        res.end("(h1)Resposta servidor com res.end(/h1)")
        })

- Dizendo para servidor em qual porta ele deve escutar, monitorar, rodas etc..

        servidor.listen(3001, () => {
        console.log("servidor rodando")
        })

No terminal ele vai retornar esse console.log acima, porem no navegador voce vai reparar que ele vai ficar rodando como se estivesse carregando infinitamente, isso se deve que so inicializar o servidor nao pasta eh necessario dar alguma resposta para o browser


