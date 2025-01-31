async function Equipe() {
        var resultado = await fetch("https://ko6qqthj.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27equipe%27%5D%7C+order%28_createdAt%C2%A0desc%29%7B%0A++nome%2C%0A++cargo%2C%0A++%22imagem%22%3Aimagem.asset-%3Eurl%0A%7D%0A", {
            method: "GET"
        });

        var respostaEmJson = await resultado.json();
        var resultadoAPI = respostaEmJson.result;
        return resultadoAPI;
    }

    async function APRESENTAR() {
        var resultadoAPI = await Equipe();
        console.log(resultadoAPI);

        const sep = document.getElementById("sep");

        for (let i = 0; i < resultadoAPI.length; i++) {
            const equipe = resultadoAPI[i];

            const criarDivTotal = document.createElement("div");
            criarDivTotal.className = "divtotal";
        
            const criarDiv = document.createElement("div");
            criarDiv.className = "profs";

            const criarImagem = document.createElement("img");
            criarImagem.src = equipe.imagem;
            criarImagem.alt = "";

            const criarDivId = document.createElement("div");
            criarDivId.id = "nome";

            const criarNome = document.createElement("h3");
            criarNome.innerText = equipe.nome;

            const criarCargo = document.createElement("p");
            criarCargo.innerText = equipe.cargo;

            criarDiv.appendChild(criarImagem);
            criarDivId.appendChild(criarNome);
            criarDivId.appendChild(criarCargo);

            criarDivTotal.appendChild(criarDiv)
            criarDivTotal.appendChild(criarDivId)

            
            sep.appendChild(criarDivTotal)
        }
    }

    APRESENTAR();