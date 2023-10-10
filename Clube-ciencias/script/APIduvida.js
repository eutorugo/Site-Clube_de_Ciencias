
        async function Duvidas(){
            var not = await fetch("https://ko6qqthj.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22duvidas%22%5D%7B%0A++%22id%22%3A_id%2C%0A++pergunta%2C%0A++++resposta%2C%0A%7D%0A", {
                method: "GET"
            })

            var respostaEmJson = await not.json()

            document.getElementById("pergunta").querySelector("span").innerText = respostaEmJson.pergunta
            document.getElementById("collapseExample").querySelector(".card-body").innerText = respostaEmJson.resposta;


            console.log(respostaEmJson)
        }
    Duvidas()