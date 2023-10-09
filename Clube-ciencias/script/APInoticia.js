   async function Noticias(){
        var not = await fetch("https://run.mocky.io/v3/5b8bf8a2-3479-4142-8b3f-7d95a8a0472e", {
            method: "GET"
        })

        var respostaEmJson = await not.json()
        document.getElementById("1h").innerText = respostaEmJson.titulo
        document.getElementById("1p").innerText = respostaEmJson.subtitulo
        document.getElementById("2p").innerText = respostaEmJson.conteudo
        document.getElementById("2i").src = respostaEmJson.img2
        document.getElementById("3h").innerText = respostaEmJson.data
        
        console.log(respostaEmJson)
    }

    Noticias()