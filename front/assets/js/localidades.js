const urlUF = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
const cidade = document.getElementById("cidade")
const estado = document.getElementById("estado");

estado.addEventListener("change", async function () {
  const urlCidades =
    "https://servicodados.ibge.gov.br/api/v1/localidades/estados/" +
    estado.value +
    "/municipios";
  const request = await fetch(urlCidades);
  const response = await request.json();
  let options = "";
  response.forEach(function (cidades) {
    options += "<option>" + cidades.nome + "</option>";
  });
  cidade.innerHTML = options
});

window.addEventListener("load", async () => {
  const request = await fetch(urlUF);
  const response = await request.json();

  const options = document.createElement("optgroup");
  options.setAttribute("label", "UFs");
  response.forEach(function (estado) {
    options.innerHTML += "<option>" + estado.sigla + "</option>";
  });

  estado.append(options);
});
