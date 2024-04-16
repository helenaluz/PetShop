function salvarCadastro() {
  let cadastro = montarCadastro();
  let cadastros = localStorage.getItem("cadastros");

  if (cadastros != null) {
    cadastros = cadastros.slice(0, -1) + "," + cadastro + "]";
  } else {
    cadastros = "[" + cadastro + "]";
  }

  localStorage.removeItem("cadastros");
  localStorage.setItem("cadastros", cadastros);
}

function montarCadastro() {
  let nome = document.getElementById("nome").value;
  let Sobrenome = document.getElementById("Sobrenome").value;
  let rua = document.getElementById("rua").value;
  let bairro = document.getElementById("bairro").value;
  let cidade = document.getElementById("cidade").value;
  let estado = document.getElementById("estado").value;
  let cep = document.getElementById("cep").value;
  let dtnasci = document.getElementById("dtnasci").value;
  let genero = document.getElementById("genero").value;
  //let corFavorita = document.getElementById('corFavorita').value;
  let email = document.getElementById("email").value;
  let celular = document.getElementById("celular").value;
  let password = document.getElementById("password").value;

  return (
    `{"nome": "` +
    nome +
    `",
        "sobrenome": "` +
    Sobrenome +
    `",
        "rua": "` +
    rua +
    `",
        "bairro": "` +
    bairro +
    `",
        "cidade": "` +
    cidade +
    `",
        "estado": "` +
    estado +
    `",
        "cep": "` +
    cep +
    `",
        "dtnasci": "` +
    dtnasci +
    `",
        "genero": "` +
    genero +
    `",
        "email": "` +
    email +
    `",
        "celular": "` +
    celular +
    `",
        "password": "` +
    password +
    `"}`
  );
}

function logar() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("password").value;

  const cadastros = JSON.parse(localStorage.getItem("cadastros"));

  let usuarioLogado = null;
  cadastros.forEach((cadastro) => {
    if (cadastro.email === email && cadastro.password === senha) {
      usuarioLogado = cadastro;
    }
  });

  if (usuarioLogado) {
    localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));
    alert("Logado com sucesso!");
  } else {
    alert("Não foi possível fazer login. Verifique suas credenciais.");
  }

  return usuarioLogado;
}



document.addEventListener("DOMContentLoaded", function () {
  verificarLocalStorage();
});

function verificarLocalStorage() {
  const usuarioLogado = localStorage.getItem("cadastros");
  const botao = document.getElementById("meuBotao");

  console.log(usuarioLogado);
  console.log(botao.innerHTML);

  if (usuarioLogado) {
    botao.innerHTML =
      '<a href="../cadastro/login.html"  class="btn btn-sm ml-auto botao-azul" type="button">Login</a>';
  } else {
    botao.innerHTML =
      '<a href="../cadastro/cad.html"  class="btn btn-sm ml-auto botao-azul" type="button">Cadastro</a>';
  }
}