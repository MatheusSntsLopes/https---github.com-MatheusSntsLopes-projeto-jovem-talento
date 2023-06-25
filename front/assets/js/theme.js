$.get(
    "../front/views/footer.html",
    (dados) => {
        $("body").append(dados);
    }
);