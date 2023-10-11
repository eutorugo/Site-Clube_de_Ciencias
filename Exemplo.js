    async function Noticias(){
            var not = await fetch("https://run.mocky.io/v3/5b8bf8a2-3479-4142-8b3f-7d95a8a0472e", {
        method: "GET"
            })

    var respostaEmJson = await not.json()
    var dados = respostaEmJson.result[0]

    document.getElementById("descClube").innerText = dados.descrica
    document.getElementById("imgClube").src = dados.image

    console.log(respostaEmJson)
        }