function efetuarLogin() {
    event.preventDefault();
  
    axios
      .post('http://localhost:3000/login', {
        email: email.value,
        password: password.value,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
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
            alert('Cadastro efetusado com sucesso!')
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