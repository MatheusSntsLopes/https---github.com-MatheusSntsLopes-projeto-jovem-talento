/* eslint-disable prettier/prettier */
// Geral
function efetuarLogin() {
  event.preventDefault();

  axios
    .post(`${baseURL}/login`, {
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
function meuCurriculo() {
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

async function listaVagas() {

  let vagasCandidatadas;

  await axios.get(
        `${baseURL}/candidato-vaga/candidato/${usuarioLogado.id}`,
      )
        .then(function (response) {
          vagasCandidatadas = (response.data);
        })
        .catch(function (error) {
          console.error(error);
          vagasCandidatadas = [];
        });

  axios.get(
    `${baseURL}/vaga`,
  )
    .then(function (response) {
      console.log(response.data);
      let vagas = response.data;
      for (let i = 0; i < vagas.length; i++) {
        $("#divEmpresarios").append(`
                <div class="accordion-item">
                    <dt class="accordion-header" id="heading${vagas[i].id}">
                        <a class="accordion-title accordionTitle js-accordionTrigger" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${vagas[i].id}" aria-expanded="true" aria-controls="collapseOne">
                            ${vagas[i].cargo} | Salário: R$${vagas[i].salario},00
                        </a>
                    </dt>`);
        if (vagas[i]) {
          $("#divEmpresarios").append(`
                    <dd id="collapse${vagas[i].id}" class="accordion-collapse collapse" aria-labelledby="heading${vagas[i].id}" data-bs-parent="#divEmpresarios">
                        <div class="accordion-body">
                            <text class="acordeonTitulo">Cargo</text>
                            <p>${vagas[i].cargo}</p>
                            <text class="acordeonTitulo">Formação</text>
                            <p>${vagas[i].formacao}</p>
                            <text class="acordeonTitulo">Salário</text>
                            <p>${vagas[i].salario}</p>
                            <text class="acordeonTitulo">Quantidade</text>
                            <p>${vagas[i].quantidade}</p>                             
                        </div>
                          <div class="text-left">
                              <button type="button" onclick="candidatarVaga(${vagas[i].id})" class="btnCandidatar btn btn-success">Candidatar-se</button>
                              <button class="btnDescandidatar btn btn-secondary d-none">Já candidatado</button>
                              <br>
                          </div>
                    </dd>
                </div>`);
        } else {
          $("#divEmpresarios").append(`
                    <div id="collapse${vagas[i].id}" class="accordion-collapse collapse" aria-labelledby="heading${vagas[i].id}" data-bs-parent="#divEmpresarios">
                        <div class="accordion-body">
                            <p>Vaga não cadastrada</p>
                        </div>
                    </div>
                </div>`);
        }
        if (vagasCandidatadas.filter(cv => cv.vagaId == vagas[i].id).length > 0) {
          $(`#collapse${vagas[i].id} .btnCandidatar`).addClass("d-none");
          $(`#collapse${vagas[i].id} .btnDescandidatar`).removeClass("d-none");           
        }
      }
    })
}

function candidatarVaga(vagaId) {
  event.preventDefault();  

  $(`#collapse${vagaId} .btnCandidatar`).addClass("d-none");
  $(`#collapse${vagaId} .btnDescandidatar`).removeClass("d-none");

  let url = `${baseURL}/candidato-vaga`;

  let dados = {
    candidatoId: usuarioLogado.id,
    vagaId: vagaId,
  }

  axios
    .post(url, dados, {
      headers: {
        Authorization: `Bearer ${usuarioLogado.access_token}`
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.error(error);
      alert("Houve uma falha no registro!")
      $(`#collapse${vagaId} .btnCandidatar`).removeClass("d-none");
      $(`#collapse${vagaId} .btnDescandidatar`).addClass("d-none");
   });
   
}

// Emrpesário
function minhasVagas() {

  axios.get(
    `${baseURL}/empresario/${usuarioLogado.id}`
    )
    .then(function (response) {
      console.log(response.data);
      let vagas = response.data.vaga;

      if (vagas.length == 0) {
        $("#divVagas").append(`
          <div class="nHV">             
            <p>Não há vagas cadastradas até o momento, <a href="/front/pages/cadastraVagas.html">clique aqui</a> para cadastrar uma vaga.</p>
          </div>`);
      } else {
        for (let i = 0; i < vagas.length; i++) {
          $("#divVagas").append(`
            <div class="accordion-item">
              <dt class="accordion-header" id="heading${i}">
                <a class="accordion-title accordionTitle js-accordionTrigger" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">
                  ${vagas[i].cargo} | Salário: R$${vagas[i].salario},00
                </a>
              </dt>
              <dd id="collapse${i}" class="accordion-collapse collapse" aria-labelledby="heading${i}" data-bs-parent="#divVagas">
                <div class="accordion-body">
                  <text class="acordeonTitulo">Cargo</text>
                  <p>${vagas[i].cargo}</p>
                  <text class="acordeonTitulo">Formação</text>
                  <p>${vagas[i].formacao}</p>
                  <text class="acordeonTitulo">Salário</text>
                  <p>${vagas[i].salario}</p>
                  <text class="acordeonTitulo">Quantidade</text>
                  <p>${vagas[i].quantidade}</p>
                  <button type="button" onclick="mostrarCandidatosInscritos(${vagas[i].id})" class="btn btn-success">Candidatos interessados</button>
                  <button type="button" onclick="deletarVaga(${vagas[i].id}, '${vagas[i].cargo}')" class="btn btn-danger">Apagar vaga</button>
                </div>
              </dd>
            </div>`);
        }
      }
    })
    .catch(function (error) {
      console.error(error);
    });
}

function cadastrarVaga() {
  event.preventDefault();

  let url = `${baseURL}/vaga`;

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

function mostrarCandidatosInscritos(vagaId) {

  axios.get(
    `${baseURL}/candidato-vaga/vagas/${vagaId}`
    )
    .then(function (response) {
      console.log(response.data);
      const listasCandidatos = response.data;

      const modalContent = document.querySelector("#modalContent");
      modalContent.innerHTML = "";

      listasCandidatos.forEach(function (candidato) {
        const candidatoInfo = document.createElement("div");
        candidatoInfo.innerHTML = `
          <text>${candidato.candidato.name}</text>         
          <p>Telefone: ${candidato.candidato.telefone}</p>
        `;

        modalContent.appendChild(candidatoInfo);
      });

      const modal = new bootstrap.Modal(document.getElementById("modal"));
      modal.show();
    })
    .catch(function (error) {
      console.error(error);
      alert("Houve um erro ao buscar os candidatos inscritos.");
    });
}

// function atualizarVaga(vagaId, dadosAtualizados) {

//   axios.put(
//     `${baseURL}/vaga/${vagaId}`,
//     dadosAtualizados,
//     {
//       headers: {
//         Authorization: `Bearer ${usuarioLogado.access_token}`
//       }
//     }
//   )
//   .then(function (response) {
//     alert("Vaga atualizada com sucesso!");
//   })
//   .catch(function (error) {
//     alert("Ocorreu um erro ao atualizar a vaga.");
//   });
// }

function deletarVaga(vagaId, cargo) {

  if (confirm(`Você realmente deseja excluir a vaga de ${cargo}?`)) {
      axios.delete(
    `${baseURL}/vaga/${vagaId}`, {
      headers: {
        Authorization: `Bearer ${usuarioLogado.access_token}`
      }
    })
    .then(function (response) {
      alert("A vaga foi excluída com sucesso!");
      location.reload();
    })
    .catch(function (error) {
      alert("Ocorreu um erro ao excluir a vaga.")
    });
  }
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
                    <dt class="accordion-header" id="heading${i}">
                        <a class="accordion-title accordionTitle js-accordionTrigger" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="true" aria-controls="collapseOne">
                            ${candidatos[i].name} | ${candidatos[i].cidade} - ${candidatos[i].estado}
                        </a>
                    </dt>`);
        if (candidatos[i].curriculo) {
          $("#divCandidatos").append(`
                    <dd id="collapse${i}" class="accordion-collapse collapse" aria-labelledby="heading${i}" data-bs-parent="#divCandidatos">
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
                    </dd>
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