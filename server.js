const http = require("http")

// funcao para criar um servidor
// req = sao requisicoes para servidor
// res = sao respostas do servidor
const servidor = http.createServer((req, res) => {
    console.log(req.method)
    console.log(req.url)
    res.statusCode = 200
    
    // criando um <h1> com res.end
    res.end("<h1>Resposta servidor com res.end</h1>")
})

// dizendo para servidor em qual porta ele deve escutar, monitorar, rodas etc..

servidor.listen(3001, () => {
    console.log("servidor rodando")
})

// no terminal ele vai retornar esse console.log acima, porem no navegador voce vai reparar que ele vai ficar rodando como se estivesse carregando infinitamente, isso se deve que so inicializar o servidor nao pasta eh necessario dar alguma resposta para o browser

