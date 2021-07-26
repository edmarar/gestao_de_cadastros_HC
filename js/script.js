const form = document.getElementById('form')
const form2 = document.getElementById('form2')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  cadastraCliente()

  let content = document.getElementById('content')

  let carregando = `<img src='./assets/loader.gif' id='loader'></img>`

  let pronto = `<p>Cadastro realizado com sucesso!</p>`

  content.innerHTML = carregando


  setTimeout(() => {
    content.innerHTML = pronto
  }, 1000)

})

form2.addEventListener('submit', (e) => {
  e.preventDefault();
  
  cadastraProduto()

  let content = document.getElementById('content2')

  let carregando = `<img src='./assets/loader.gif' id='loader'></img>`

  let pronto = `<p>Cadastro realizado com sucesso!</p>`

  content.innerHTML = carregando


  setTimeout(() => {
    content.innerHTML = pronto
  }, 1000)

})

function cadastraCliente(){
    let campo1 = document.getElementById("nome");
    let campo2 = document.getElementById("email");
    let campo3 = document.getElementById("cpf");
    let campo4 = document.getElementById("telefone");
    let campo5 = document.getElementById("endereco");

    let dados = JSON.parse(localStorage.getItem("dadosCliente"));

    if(dados == null){
        localStorage.setItem("dadosCliente", "[]");
        dados = [];
    }

    let auxRegistro = {
        nome: campo1.value,
        email: campo2.value,
        cpf: campo3.value,
        telefone: campo4.value,
        endereço: campo5.value
    }

    dados.push(auxRegistro);

    localStorage.setItem("dadosCliente", JSON.stringify(dados));

    campo1.value = "";
    campo2.value = "";
    campo3.value = "";
    campo4.value = "";
    campo5.value = "";
}


function cadastraProduto(){
    let campo6 = document.getElementById("nomeP");
    let campo7 = document.getElementById("slogan");
    let campo8 = document.getElementById("cupom");
    let campo9 = document.getElementById("emailP");
    let campo10 = document.getElementById("observacoes");

    let dados = JSON.parse(localStorage.getItem("dadosProduto"));

    if(dados == null){
        localStorage.setItem("dadosProduto", "[]");
        dados = [];
    }

    let auxRegistro = {
        codigo: campo6.value,
        produto: campo7.value,
        marca: campo8.value,
        quantidade: campo9.value,
        observações: campo10.value
    }

    dados.push(auxRegistro);

    localStorage.setItem("dadosProduto", JSON.stringify(dados));

    campo6.value = "";
    campo7.value = "";
    campo8.value = "";
    campo9.value = "";
    campo10.value = "";
}
