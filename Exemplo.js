<script>
    async function Noticias(){
            var not = await fetch("https://run.mocky.io/v3/5b8bf8a2-3479-4142-8b3f-7d95a8a0472e", {
        method: "GET"
            })

    var respostaEmJson = await not.json()

    document.getElementById("1h").innerText = respostaEmJson.titulo1
    document.getElementById("1p").innerText = respostaEmJson.conteudo1
    document.getElementById("1i").src = respostaEmJson.img1

    document.getElementById("2h").innerText = respostaEmJson.titulo2
    document.getElementById("2p").innerText = respostaEmJson.conteudo2
    document.getElementById("2i").src = respostaEmJson.img2

    document.getElementById("3h").innerText = respostaEmJson.titulo3
    document.getElementById("3p").innerText = respostaEmJson.conteudo3
    document.getElementById("3i").src = respostaEmJson.img3

    console.log(respostaEmJson)
        }
</script>