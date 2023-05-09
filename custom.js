//-=-=-=-=-=-=-Função modal-=-=-=-=-=-=-=-=
// Obtém o modal
var modal = document.getElementById("myModal");
//var modal = document.getElementById("ModalDel");

// Obtém o botão que abre o modal
var btn = document.getElementById("myBtn");
//var btn = document.getElementById("idIcon");

// Obtém o botão de fechar o modal
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no botão, abre o modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Quando o usuário clicar no botão de fechar, fecha o modal
span.onclick = function() {
  modal.style.display = "none";
}

// Quando o usuário clicar fora do modal, fecha o modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.getElementById("name").value = ""
    document.getElementById("func").value = ""
  }
}
//=-=-=-=-=--=-=FIM MODAL=-=-=-=-=-=-=-

function cancelaModalDel(){
  var modalDel = document.getElementById("ModalDel")
  modalDel.style.display = "none";
}








// Remove a lixeira quando o mouse sair da linha da tabela
tabela.addEventListener("mouseleave", function(event) {
    const linha = event.target.closest("tr");
    if (linha) {
        const lixeira = linha.querySelector(".lixeira");
        if (lixeira) {
            lixeira.parentNode.remove();
        }
    }
});
// Adicione eventos "mouseenter" e "mouseleave" para mostrar e esconder o ícone de lixeira quando o usuário passar o mouse sobre a linha
const lixeiras = document.querySelectorAll(".lixeira");
lixeiras.forEach(function(lixeira) {
  const linha = lixeira.parentNode;
  linha.addEventListener("mouseenter", function() {
    lixeira.style.display = "inline-block";
  });
  linha.addEventListener("mouseleave", function() {
    lixeira.style.display = "none";
  });
});

