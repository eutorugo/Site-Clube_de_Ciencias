
async function Noticias() {
    var noticias = await fetch("https://ko6qqthj.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22noticia%22%5D%7B%0A++%22id%22%3A_id%2C%0A++++titulo%2C%0A++++subtitulo%2C%0A++++conteudo%2C%0A++++%22imagem%22%3Aimagem.asset-%3Eurl%2C%0A++++data%0A%7D%0A", {
        method: "GET"
    });
    var respostaEmJson = await noticias.json();

    // Selecione o contêiner onde você deseja exibir as notícias
    const noticiasContainer = document.getElementById("noticiasContainer");

    // Itere por todas as notícias na resposta da API
    for (const noticia of respostaEmJson.result) {
        // Crie elementos HTML para cada conjunto de notícias
        const noticiaDiv = document.createElement("div");
        noticiaDiv.classList.add("noticia");

        const txtDiv = document.createElement("div");
        txtDiv.classList.add("txt");

        const tituloP = document.createElement("p");
        tituloP.classList.add("titulo");
        tituloP.innerText = noticia.titulo;

        const subtituloP = document.createElement("p");
        subtituloP.classList.add("subtitulo");
        subtituloP.innerText = noticia.subtitulo;

        const descricaoP = document.createElement("p");
        descricaoP.classList.add("descricao");
        descricaoP.innerText = noticia.conteudo;

        const dataP = document.createElement("p");
        dataP.classList.add("descricao");
        dataP.innerText = noticia.data;

        const picture = document.createElement("picture");
        const img = document.createElement("img");
        img.classList.add("img-noticia");
        img.alt = "";
        img.src = noticia.imagem;

        // Adicione os elementos ao contêiner de notícias
        txtDiv.appendChild(tituloP);
        txtDiv.appendChild(subtituloP);
        txtDiv.appendChild(descricaoP);
        txtDiv.appendChild(dataP);

        picture.appendChild(img);

        noticiaDiv.appendChild(txtDiv);
        noticiaDiv.appendChild(picture);

        noticiasContainer.appendChild(noticiaDiv);
    }

    console.log(respostaEmJson);
}

Noticias();








/*async function Noticias(){
        var not = await fetch("https://ko6qqthj.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22noticia%22%5D%7B%0A++%22id%22%3A_id%2C%0A++++titulo%2C%0A++++subtitulo%2C%0A++++conteudo%2C%0A++++%22imagem%22%3Aimagem.asset-%3Eurl%2C%0A++++data%0A%7D%0A", {
            method: "GET"
        })
        var respostaEmJson = await not.json()
        var dados = respostaEmJson.result[0]

        document.getElementById("idtit").innerText = dados.titulo
        document.getElementById("idsub").innerText = dados.subtitulo
        document.getElementById("idcont").innerHTML = dados.conteudo
        document.getElementById("idimg").src = dados.imagem
        document.getElementById("iddata").innerText = dados.data
        
        console.log(respostaEmJson)
    }

    Noticias()*/