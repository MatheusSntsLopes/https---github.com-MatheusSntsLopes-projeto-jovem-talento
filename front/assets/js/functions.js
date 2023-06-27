//const { data } = require("jquery");

function efetuarLogin() {
  event.preventDefault();

  axios
    .post('http://localhost:3000/login', {
      email: email.value,
      password: password.value,
    })
    .then(function (response) {
      console.log(response.data);
      localStorage.setItem("usuarioLogado", JSON.stringify(response.data));
      if (response.data.tipo === "EMPRESARIO") {
        location.assign("../front/pages/ambienteEmpresario.html")
      } else {
        location.assign("../front/pages/ambienteCandidato.html")
      }
      
    })
    .catch(function (error) {
      console.error(error);
    });
}

function efetuarLogout() {
  event.preventDefault();
  
  localStorage.removeItem ("usuarioLogado");
  location.assign("../index.html");
}

function efetuarCadastro() {
  event.preventDefault();

  let url = 'http://localhost:3000/candidato';
  if (cnpj.checked) {
    url = 'http://localhost:3000/empresario';
  }

  let dados = {
    name: nome.value,
    data_nascimento: data_nascimento.value,
    email: email.value,
    password: password.value,
    telefone: telefone.value,
    rua: rua.value,
    numero: numero.value,
    estado: estado.value,
    cidade: cidade.value,
    bairro: bairro.value,
    cep: cep.value
  }

  if (cnpj.checked) {
    dados.cnpj = identificador.value;
  } else {
    dados.cpf = identificador.value;
  }

  axios
    .post(url, dados)
    .then(function (response) {
      console.log(response);
      alert('Cadastro efetuado com sucesso!')
      location.href = ('../index.html')
    })
    .catch(function (error) {
      console.error(error);
    });
}

function confereSenha() {
  const password = document.querySelector('input[id=password]');
  const confirm = document.querySelector('input[id=confirm]');

  if (confirm.value === password.value) {
    confirm.setCustomValidity('');
  } else {
    confirm.setCustomValidity('As senhas não conferem');
  }
}

function cadastrarCurriculo() {
  event.preventDefault();

  console.log("cadastrarCurriculo")

  let url = 'http://localhost:3000/curriculo';

  let dados = {
    candidatoId: usuarioLogado.id,
    biografia: biografia.value,
    formacao: formacao.value,
    experiencia: experiencia.value,
    habilidade: habilidade.value,
    competencia: competencia.value,
  }

  axios
    .post(url, dados, {
      headers: {
        "access_token": `${usuarioLogado.access_token}`
      }
    })

    .then(function (response) {
      console.log(response);
      alert('Currículo cadastrado com sucesso!')
      location.href = ('../front/pages/ambienteCandidato.html')
    })
    .catch(function (error) {
      console.error(error);
    });
}
