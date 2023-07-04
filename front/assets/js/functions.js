// Geral
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
      alert("Login inválido!");

    });
}

function efetuarLogout() {
  event.preventDefault();

  localStorage.removeItem("usuarioLogado");
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

// Candidato
function salvarCurriculo() {
  event.preventDefault();

  let url = `${baseURL}/curriculo`;

  let dados = {
    candidatoId: usuarioLogado.id,
    biografia: biografia.value,
    formacao: formacao.value,
    experiencia: experiencia.value,
    habilidade: habilidade.value,
    competencia: competencia.value,
  }

  if (curriculo == null) {
    axios
      .post(url, dados, {
        headers: {
          Authorization: `Bearer ${usuarioLogado.access_token}`
        }
      })

      .then(function (response) {
        console.log(response);
        alert('Currículo cadastrado com sucesso!')
        location.href = ('/front/pages/ambienteCandidato.html')
      })

      .catch(function (error) {
        console.error(error);
        if (error.response.data.message.join) {
          alert(error.response.data.message.join("\n"));
        } else {
          //alert(error.response.data.message);
          alert("Currículo cadastrado com sucesso!");
          location.href = ('/front/pages/ambienteCandidato.html')
          // location.reload();
        }
      });

  } else {

    axios
      .put(
        url + "/" + curriculo.id,
        dados, {
        headers: {
          Authorization: `Bearer ${usuarioLogado.access_token}`
        }
      })

      .then(function (response) {
        console.log(response);
        alert('Currículo alterado com sucesso!')
        location.href = ('/front/pages/ambienteCandidato.html')
      })

      .catch(function (error) {
        console.error(error);
        if (error.response.data.message.join) {
          alert(error.response.data.message.join("\n"));
        } else {
          //alert(error.response.data.message);
          alert("Não pode alterar currículo");
          //location.reload();
        }
      });


  }

}

function listaVagas() {

  axios.get(
    `${baseURL}/vaga`,
  )
    .then(function (response) {
      console.log(response.data);
      let vagas = response.data;
      for (let i = 0; i < vagas.length; i++) {
        $("#divEmpresarios").append(`
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading${i}">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="true" aria-controls="collapseOne">
                            ${vagas[i].cargo} - ${vagas[i].salario}
                        </button>
                    </h2>`);
        if (vagas[i]) {
          $("#divEmpresarios").append(`
                    <div id="collapse${i}" class="accordion-collapse collapse" aria-labelledby="heading${i}" data-bs-parent="#divEmpresarios">
                        <div class="accordion-body">
                            <h3>Cargo</h3>
                            <p>${vagas[i].cargo}</p>
                            <h3>Formação</h3>
                            <p>${vagas[i].formacao}</p>
                            <h3>Salário</h3>
                            <p>${vagas[i].salario}</p>
                            <h3>Quantidade</h3>
                            <p>${vagas[i].quantidade}</p>                             
                        </div>
                    </div>
                </div>`);
        } else {
          $("#divEmpresarios").append(`
                    <div id="collapse${i}" class="accordion-collapse collapse" aria-labelledby="heading${i}" data-bs-parent="#divEmpresarios">
                        <div class="accordion-body">
                            <p>Vaga não cadastrada</p>
                        </div>
                    </div>
                </div>`);
        }
      }
    })
}

// Emrpesário
function cadastrarVaga() {
  event.preventDefault();

  let url = 'http://localhost:3000/vaga';

  let dados = {
    cargo: cargo.value,
    formacao: formacao.value,
    salario: parseFloat(salario.value),
    quantidade: parseInt(quantidade.value),
    empresarioId: usuarioLogado.id,
  }

  axios
    .post(url, dados, {
      headers: {
        Authorization: `Bearer ${usuarioLogado.access_token}`
      }
    })
    .then(function (response) {
      console.log(response);
      alert('Vaga cadastrada com sucesso!')
      location.href = ('ambienteEmpresario.html')
    })
    .catch(function (error) {
      console.error(error);
    });
}

function minhasVagas() {

  axios.get(
    `${baseURL}/empresario/${usuarioLogado.id}`,
  )
    .then(function (response) {
      console.log(response.data);
      let vagas = response.data.vaga;
      if (vagas.length == 0) {
        $("#divVagas").append(`
                            <div id="collapse0" class="accordion-collapse collapse" aria-labelledby="heading0" data-bs-parent="#divVagas">
                                <div class="accordion-body">
                                    <p>Nenhuma vaga cadastrada.</p>
                                </div>
                            </div>
                        </div>`);
      } else {
        for (let i = 0; i < vagas.length; i++) {
          $("#divVagas").append(`
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="heading${i}">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="true" aria-controls="collapseOne">
                                    ${vagas[i].cargo} - ${vagas[i].salario}
                                </button>
                            </h2>`);
          $("#divVagas").append(`
                            <div id="collapse${i}" class="accordion-collapse collapse" aria-labelledby="heading${i}" data-bs-parent="#divVagas">
                                <div class="accordion-body">
                                    <h3>Cargo</h3>
                                    <p>${vagas[i].cargo}</p>
                                    <h3>Formação</h3>
                                    <p>${vagas[i].formacao}</p>
                                    <h3>Salário</h3>
                                    <p>${vagas[i].salario}</p>
                                    <h3>Quantidade</h3>
                                    <p>${vagas[i].quantidade}</p>                                    
                                </div>
                            </div>
                        </div>`);
        }
      }

    })
}

function listaCandidatos() {

  axios.get(
    `${baseURL}/candidato`,
  )
    .then(function (response) {
      console.log(response.data);
      let candidatos = response.data;
      for (let i = 0; i < candidatos.length; i++) {
        $("#divCandidatos").append(`
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading${i}">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="true" aria-controls="collapseOne">
                            ${candidatos[i].name} (${candidatos[i].cidade} - ${candidatos[i].estado})
                        </button>
                    </h2>`);
        if (candidatos[i].curriculo) {
          $("#divCandidatos").append(`
                    <div id="collapse${i}" class="accordion-collapse collapse" aria-labelledby="heading${i}" data-bs-parent="#divCandidatos">
                        <div class="accordion-body">
                            <h3>Biografia</h3>
                            <p>${candidatos[i].curriculo.biografia}</p>
                            <h3>Formação</h3>
                            <p>${candidatos[i].curriculo.formacao}</p>
                            <h3>Habilidades</h3>
                            <p>${candidatos[i].curriculo.habilidade}</p>
                            <h3>Experiência</h3>
                            <p>${candidatos[i].curriculo.experiencia}</p>
                            <h3>Competência</h3>
                            <p>${candidatos[i].curriculo.competencia}</p>
                        </div>
                    </div>
                </div>`);
        } else {
          $("#divCandidatos").append(`
                    <div id="collapse${i}" class="accordion-collapse collapse" aria-labelledby="heading${i}" data-bs-parent="#divCandidatos">
                        <div class="accordion-body">
                            <p>Currículo não cadastrado</p>
                        </div>
                    </div>
                </div>`);
        }
      }
    })
}