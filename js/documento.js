(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
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
    //buscar la info en url y almacenar todo en data
    $.get("https://api.imgflip.com/get_memes",
        function (data) {
            $.each(data.data.memes, function (i, item) {
                $("#tabla").append("<tr><td>" + item.id +
                    "</td><td>" + item.name +
                    "</td><td><img src =" + item.url +
                    "></td><td>" + item.width +
                    "</td><td>" + item.height +
                    "</td><td>" + item.box_count +
                    "</td></tr>");
            });
        });
});

$config['image.settings']['allow_insecure_derivatives'] = TRUE;

