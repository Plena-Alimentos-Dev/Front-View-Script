main()



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
function confirmaExclusao(itemId){
    const url = "https://api-monitora-scripts.onrender.com/delete?id="
    const requestOptions = {
        method: 'DELETE'
    };
    fetch(`${url}${itemId}`,requestOptions)
    console.log('Item excluido')
    cancelaModalDel();
}






var itemId;
//Outras Func
function criaLinha(element) {
    linha = document.createElement("tr")
    tdId = document.createElement("th")
    tdname = document.createElement("td")
    tdFunc = document.createElement("td")
    tdLog = document.createElement("td")
    tdLog.classList.add("sLog")
    linha.setAttribute('data-id', element.id)

    divTxt = document.createElement("div")
    divTxt.classList.add("txt")
    pTxt = document.createElement("p")
    divTxt.appendChild(pTxt)
    divIcon = document.createElement("div")
    divIcon.classList.add("icon","hidden")
    spanBtn = document.createElement("span") //span do botão criado aqui
    spanBtn.id = "idIcon" //atribuido a ele
    spanBtn.setAttribute("type","button") //Atribuido ao tipo Button
    spanBtn.classList.add("fas","fa-trash") //formataçao
    /* Evento para que possa deletar o item */
    spanBtn.addEventListener("click", function(event){
        var linhaSel = event.target.closest('tr');
        itemId = linhaSel.getAttribute('data-id');
        console.log("log 1"+itemId)
        var modalDel = document.getElementById("ModalDel");
        modalDel.style.display = "block";
        console.log(`Item ${itemId}`)
    })

    divIcon.appendChild(spanBtn) //adicionado ao Div de icone
    tdLog.appendChild(divTxt)
    tdLog.appendChild(divIcon)
    tdId.innerHTML = element.id
    tdname.innerHTML = element.name
    tdFunc.innerHTML = element.func
    pTxt.innerHTML = element.log
    linha.appendChild(tdId)
    linha.appendChild(tdname)
    linha.appendChild(tdFunc)
    linha.appendChild(tdLog)

    return linha
}


var btnCancel = document.getElementById('delCancel')
btnCancel.addEventListener("click", function(){
    cancelaModalDel();
    console.log(`Item cancel ${itemId}`)
})

var btnConfirm = document.getElementById('delExcluir')
btnConfirm.addEventListener("click" , function(){
    confirmaExclusao(itemId);
    console.log(`Item excluir ${itemId}`)
})




