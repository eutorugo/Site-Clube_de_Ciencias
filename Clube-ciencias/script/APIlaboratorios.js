async function Laboratorios(){
    var resultado = await fetch("https://ko6qqthj.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27laboratorios%27%5D%7B%0A++++titulo%2C%0A++++descricao%2C%0A++++%22imagem%22%3Aimagem.asset-%3Eurl%0A%7D%0A",
    {
        method: "GET"
    })

    var respostaEmJson = await resultado.json()
    var resultadoAPI = respostaEmJson.result
    return resultadoAPI
}
async function APRESENTAR (){

    var resultadoAPI = await Laboratorios()
    console.log(resultadoAPI)

    document.getElementById("tituloLab-1").innerText = resultadoAPI[4].titulo
    document.getElementById("descLab-1").innerText = resultadoAPI[4].descricao
    document.getElementById("imagemPre-1").src = resultadoAPI[4].imagem
 
    document.getElementById("tituloLab-2").innerText = resultadoAPI[1].titulo
    document.getElementById("descLab-2").innerText = resultadoAPI[1].descricao


    document.getElementById("tituloLab-3").innerText = resultadoAPI[2].titulo
    document.getElementById("descLab-3").innerText = resultadoAPI[2].descricao


    document.getElementById("tituloLab-4").innerText = resultadoAPI[0].titulo
    document.getElementById("descLab-4").innerText = resultadoAPI[0].descricao


    document.getElementById("tituloLab-5").innerText = resultadoAPI[3].titulo
    document.getElementById("descLab-5").innerText = resultadoAPI[3].descricao
}

APRESENTAR()
   



    






