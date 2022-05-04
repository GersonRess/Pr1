(function () {
    'use strict'

    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()
$("#boton").click(function () {
    contador = parseInt($("#contador").val());
    nombre = prompt("ingrese nombre: ")
    url = prompt("ingrese ruta de img: ")
    $("#tabla").append("<tr><td>" + contador + "<td/><td>"
        + nombre + "<td/><td><img = src =" + url + "><td/><td>desc</td><tr/>");
    contador++;
    $("#contador").val(contador);
});


$("#API").click(function () {
    $.get("https://api.imgflip.com/get_memes",
        function (data) {
            $.each(data.data.memes, function (i, item) {
                $("#tabla").append("<tr><td>" + item.id +
                    "</td><td>" + item.name +
                    "</td><td><img class='img-fluid' src =" + item.url +
                    "></td><td>" + item.width +
                    "</td><td>" + item.height +
                    "</td><td>" + item.box_count +
                    "</td></tr>");
            });
        });
});

$config['image.settings']['allow_insecure_derivatives'] = TRUE;
