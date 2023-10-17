    async function Noticias(){
        var not = await fetch("", {
            method: "GET"
        })
        var respostaEmJson = await not.json()
        var dados = respostaEmJson.result[0]

        document.getElementById("").querySelector("").innerText = dados.titulo
        document.getElementById("").querySelector("").innerText = dados.subtitulo
        document.getElementById("").querySelector("").innerText = dados.conteudo
        document.getElementById("").querySelector("").innerText = dados.img2
        document.getElementById("").querySelector("").innerText = dados.data
        
        console.log(respostaEmJson)
    }

    Noticias()