main()
//requestAPI('https://api-monitora-scripts.onrender.com/scripts');



async function main() {
    try {
        const data = await fazGet("https://api-monitora-scripts.onrender.com/scripts")
        console.log(data)
        const tabela = document.getElementById('tabela')
        data.scripts.forEach(element => {
            const linha = criaLinha(element);
            tabela.appendChild(linha);
        })
    } catch (error) {
        console.error(error)
    }
}
async function fazGet(url) {
    var response = await fetch(url)
    const data = await response.json()
    return data
}
function fazPost(url, body) {
    const request = new Request(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    });
    fetch(request)
        alert("Resquest adicionado")
        .then(response => response.json())
        .then(body => console.log(body))
        .catch(error => console.error(error))
}

//Outras Func
function criaLinha(element) {
    linha = document.createElement("tr")
    tdId = document.createElement("th")
    tdname = document.createElement("td")
    tdFunc = document.createElement("td")
    tdLog = document.createElement("td")
    tdId.innerHTML = element.id
    tdname.innerHTML = element.name
    tdFunc.innerHTML = element.func
    tdLog.innerHTML = element.log

    linha.appendChild(tdId)
    linha.appendChild(tdname)
    linha.appendChild(tdFunc)
    linha.appendChild(tdLog)

    return linha
}
function novoScript() {
    let url = "https://api-monitora-scripts.onrender.com/scripts"
    let Valnome = document.getElementById("name").value
    let Valfunc = document.getElementById("func").value
    console.log(Valnome)
    console.log(Valfunc)

    body = {
        "name": Valnome,
        "func": Valfunc,
        "log": "teste2"
    }
    fazPost(url, body)
}

// function requestAPI(url) {
//     fetch(url)
//       .then(response => response.json)
//       .then(data => console.log(data))
// }












function sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}