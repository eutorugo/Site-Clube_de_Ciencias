const URL = 
const conteudo =


fetch {(
    method: "GET",
)}
    .then(result  => result.json())
    .then(((result))=>(
        result.forEach( => {
            var pergunta = document.createElement("h3");
            pergunta.innerText = '$(.pergunta)'
        });

    ))