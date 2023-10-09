async function Clube(){
    var c = await fetch("https://ko6qqthj.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22clube%22%5D%7B%0A++descricao%2C%0A++%22imagem%22%3A+imagem.asset-%3Eurl%2C%0A++faixa_idade_fim%2C%0A++faixa_idade_inicio%0A%7D",{
        method: "GET"
    })

    var respostaEmJson = await c.json()
    document.getElementById("descClube").innerText = respostaEmJson.descricao

    
}

Clube()