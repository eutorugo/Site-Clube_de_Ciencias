async function Laboratorios(){
    var resultado = await fetch("https://ko6qqthj.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27equipe%27%5D%0A",
    {
        method: "GET"
    })

    var respostaEmJson = await resultado.json()
    var resultadoAPI = respostaEmJson.result
    return resultadoAPI
}
async function APRESENTAR(){

    var resultadoAPI = await Laboratorios();
    console.log(resultadoAPI);

    document.getElementById("nomeEquipe-1").innerText = resultadoAPI[0].nome
    document.getElementById("cargoEquipe-1").innerText = resultadoAPI[0].cargo
    document.getElementById("imagemEquipe-1").src = resultadoAPI[0].imagem
     

    document.getElementById("nomeEquipe-2").innerText = resultadoAPI[1].nome
    document.getElementById("cargoEquipe-2").innerText = resultadoAPI[1].cargo
   

    document.getElementById("nomeEquipe-3").innerText = resultadoAPI[2].nome
    document.getElementById("cargoEquipe-3").innerText = resultadoAPI[2].cargo
    

    document.getElementById("nomeEquipe-4").innerText = resultadoAPI[3].nome
    document.getElementById("cargoEquipe-4").innerText = resultadoAPI[3].cargo
    

    document.getElementById("nomeEquipe-5").innerText = resultadoAPI[4].nome
    document.getElementById("cargoEquipe-5").innerText = resultadoAPI[4].cargo
    

    document.getElementById("nomeEquipe-6").innerText = resultadoAPI[5].nome
    document.getElementById("cargoEquipe-6").innerText = resultadoAPI[5].cargo
    

    document.getElementById("nomeEquipe-7").innerText = resultadoAPI[6].nome
    document.getElementById("cargoEquipe-7").innerText = resultadoAPI[6].cargo
    

    document.getElementById("nomeEquipe-8").innerText = resultadoAPI[7].nome
    document.getElementById("cargoEquipe-8").innerText = resultadoAPI[7].cargo
   

}

APRESENTAR()