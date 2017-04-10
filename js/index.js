$(function() {
    $('#btn-submit').click(sendForm);
});
document.querySelector('input[type=submit]').addEventListener('click', sendForm);

function sendForm(e) {
    e.preventDefault();
    var form = document.querySelector('form');
    if (!form[0].checkValidity()) {
        form.find(':submit').click();
    }
    else {
        $.ajax({
            url: "https://formspree.io/inferno25znc@gmail.com",
            method: "POST",
            data: {
                clientQuestion: $('#client-question').val(),
                clientName: $('#client-name').val(),
                clientNumber: $('#client-number').val(),
                clientEmail: $('#client-email').val(),


            },
            dataType: "json"
        }).done(function() {
            $('#message').html('Ви успішно відправили повідомлення!');
        });
    }
