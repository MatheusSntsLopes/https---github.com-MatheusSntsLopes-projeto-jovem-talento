$.get(
    "/front/views/header.html",
    (dados) => {
        $("body").prepend(dados);
    }
);

$.get(
    "/front/views/footer.html",
    (dados) => {
        $("body").append(dados);
    }
);