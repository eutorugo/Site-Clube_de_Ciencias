async function Laboratorios(){
    var resultado = await fetch("https://ko6qqthj.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27laboratorios%27%5D%0A",
    {
        method: "GET"
    })

    var respostaEmJson = await resultado.json()

    var resultadoAPI = respostaEmJson.result[4]
    
    document.getElementById("tituloLab-1").innerText = resultadoAPI.titulo
    document.getElementById("descLab-1").innerText = resultadoAPI.descricao

    var resultadoAPI = respostaEmJson.result[3]

    document.getElementById("tituloLab-2").innerText = resultadoAPI.titulo
    document.getElementById("descLab-2").innerText = resultadoAPI.descricao

    var resultadoAPI = respostaEmJson.result[0]

    document.getElementById("tituloLab-3").innerText = resultadoAPI.titulo
    document.getElementById("descLab-3").innerText = resultadoAPI.descricao

    var resultadoAPI = respostaEmJson.result[1]

    document.getElementById("tituloLab-4").innerText = resultadoAPI.titulo
    document.getElementById("descLab-4").innerText = resultadoAPI.descricao

    var resultadoAPI = respostaEmJson.result[2]

    document.getElementById("tituloLab-5").innerText = resultadoAPI.titulo
    document.getElementById("descLab-5").innerText = resultadoAPI.descricao

   



    


    console.log(respostaEmJson)
}

Laboratorios()




